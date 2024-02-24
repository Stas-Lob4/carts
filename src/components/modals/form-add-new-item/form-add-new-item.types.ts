import { RefObject } from 'react'
import { FieldValues } from 'react-hook-form'

import { UploadImage } from '@/common'
import { FormCheckboxProps, FormTextFieldProps } from '@/components'

type FormTextFieldPropsWithoutControl<TFieldValues extends FieldValues> = Omit<
  FormTextFieldProps<TFieldValues>,
  'control'
>

export type FormAddNewItemProps<TFieldValues extends FieldValues> = {
  cardSubtitle?: string
  checkboxProps?: FormCheckboxProps<TFieldValues>
  clearImg: () => void
  fileRef: RefObject<HTMLInputElement>
  img: UploadImage
  isCard?: boolean
  isDeck?: boolean
  newItemTextField: FormTextFieldPropsWithoutControl<TFieldValues>
  setImg: (questionImg: File | null) => void
}
