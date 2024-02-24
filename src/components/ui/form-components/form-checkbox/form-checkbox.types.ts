import { FieldValues, UseControllerProps } from 'react-hook-form'

import { CheckboxProps } from '@/components'

export type FormCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>
