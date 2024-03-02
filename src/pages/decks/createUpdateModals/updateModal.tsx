import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, FileUploader, Modal, TextField } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { z } from 'zod'

import s from './createUpdateItemModal.module.scss'

type FormValues = {
  image?: File | undefined
  name: string
  private?: boolean | undefined
}

const imageSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB. The file will not be uploaded.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

const updateDecksSchema = z.object({
  name: z.string().min(3).max(30),
})

type updateCallback = (id: string, data: FormData) => void

type UpdateItemModalProps = {
  buttonName: string
  callback: updateCallback
  id: string
  modalTitle: string
  name: string
  trigger: ReactNode
}

export const UpdateItemModal = (props: UpdateItemModalProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { name: props.name },
    resolver: zodResolver(updateDecksSchema),
  })
  const [img, setImg] = useState<File | null>()

  const createDeckCallback = (data: FormValues) => {
    const deckFormData = new FormData()

    if (img) {
      deckFormData.append('cover', img)
    }

    deckFormData.append('name', data.name)
    deckFormData.append('isPrivate', `${data.private}`)

    props.callback(props.id, deckFormData)
  }

  return (
    <Modal title={props.modalTitle} trigger={props.trigger}>
      <form className={s.form} onSubmit={handleSubmit(createDeckCallback)}>
        <TextField label={'Name Pack'} {...register('name')} errorMessage={errors.name?.message} />
        <FileUploader
          name={'image'}
          setFile={setImg}
          trigger={
            <Button as={'span'} fullWidth variant={'secondary'}>
              Upload Image
            </Button>
          }
          validationSchema={imageSchema}
        />
        {img && <img src={URL.createObjectURL(img)} style={{ height: '70px', width: '100px' }} />}
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Private pack'}
          name={'private'}
        />
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button type={'submit'}>{props.buttonName}</Button>
        </div>
      </form>
    </Modal>
  )
}
