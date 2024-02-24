import { Control, FieldPath, FieldValues } from 'react-hook-form'

import { TextFieldProps } from '@/components'

export type FormTextFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldProps, 'id' | 'onChange' | 'value'>
