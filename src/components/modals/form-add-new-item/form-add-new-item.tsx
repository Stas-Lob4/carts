import { FieldValues, useFormContext } from 'react-hook-form'

import { Trash } from '@/assets'
import { Button, FileUploader, Typography } from '@/components'
import { FormAddNewItemProps } from '@/components/modals/form-add-new-item/form-add-new-item.types'
import { FormCheckbox } from '@/components/ui/form-components/form-checkbox/form-checkbox'
import { FormTextField } from '@/components/ui/form-components/form-text-field/form-text-field'

import s from './form-add-new-item.module.scss'

export const FormAddNewItem = <T extends FieldValues>(props: FormAddNewItemProps<T>) => {
  const {
    cardSubtitle,
    checkboxProps,
    clearImg,
    fileRef,
    img,
    isCard,
    isDeck,
    newItemTextField,
    setImg,
  } = props
  const { label, name, placeholder } = newItemTextField
  const { control } = useFormContext()

  return (
    <>
      {isCard && (
        <Typography as={'h3'} variant={'subtitle2'}>
          {cardSubtitle}
        </Typography>
      )}
      <FormTextField
        autoComplete={'off'}
        control={control}
        label={label}
        name={name}
        placeholder={placeholder}
        rootContainerProps={{ className: s.inputContainer }}
      />
      {img ? (
        <div className={s.imgContainer}>
          <img
            alt={'questionImg'}
            className={s.img}
            src={typeof img === 'string' ? img : URL.createObjectURL(img)}
          />
          <div>
            <Button className={s.delete} onClick={clearImg} variant={'secondary'}>
              <Trash />
            </Button>
            <FileUploader
              ref={fileRef}
              setFile={setImg}
              trigger={
                <Button as={'span'} className={s.buttonImg} fullWidth variant={'secondary'}>
                  Change image
                </Button>
              }
            />
          </div>
        </div>
      ) : (
        <FileUploader
          className={s.fileUploaderBlock}
          ref={fileRef}
          setFile={setImg}
          trigger={
            <Button as={'span'} className={s.buttonImg} fullWidth variant={'secondary'}>
              Upload image
            </Button>
          }
        />
      )}
      {isDeck && (
        <FormCheckbox
          className={checkboxProps?.className}
          control={control}
          label={checkboxProps?.label}
          name={checkboxProps?.name ?? ''}
        />
      )}
    </>
  )
}
