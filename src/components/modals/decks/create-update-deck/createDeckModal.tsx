import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, FileUploader, Modal, TextField } from '@/components'
import { useCreateDeckMutation } from '@/services/decks'
import { zodResolver } from '@hookform/resolvers/zod'
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

const createDecksSchema = z.object({
  name: z.string().min(3).max(30),
})

type CreateItemModalProps = {
  buttonName: string
  modalTitle: string
  trigger: ReactNode
}

export const CreateDeckModal = (props: CreateItemModalProps) => {
  const [open, setOpen] = useState(false)
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(createDecksSchema) })
  const [img, setImg] = useState<File | null>()

  const [createDeck] = useCreateDeckMutation()

  const createDeckCallback = (data: FormValues) => {
    const deckFormData = new FormData()

    if (img) {
      deckFormData.append('cover', img)
    }

    deckFormData.append('name', data.name)
    deckFormData.append('isPrivate', `${data.private}`)

    createDeck(deckFormData)
    reset()
    setImg(null)
    setOpen(false)
  }

  const cancelCreateDeckHandler = () => setOpen(false)

  return (
    <Modal onOpenChange={setOpen} open={open} title={props.modalTitle} trigger={props.trigger}>
      <form className={s.form} onSubmit={handleSubmit(createDeckCallback)}>
        <TextField label={'Name Pack'} {...register('name')} errorMessage={errors.name?.message} />
        <div className={s.fileUploaderBlock}>
          <FileUploader
            name={'image'}
            setFile={setImg}
            trigger={
              <Button fullWidth variant={'secondary'}>
                Upload Image
              </Button>
            }
            validationSchema={imageSchema}
          />
        </div>
        {img && (
          <img
            alt={'avatar'}
            src={URL.createObjectURL(img)}
            style={{ height: '70px', width: '100px' }}
          />
        )}
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Private pack'}
          name={'private'}
        />
        <div className={s.buttons}>
          <Button onClick={cancelCreateDeckHandler} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'}>{props.buttonName}</Button>
        </div>
      </form>
    </Modal>
  )
}
