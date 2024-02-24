import { FieldValues, useController } from 'react-hook-form'

import { FormTextFieldProps, TextField } from '@/components'

export const FormTextField = <T extends FieldValues>(props: FormTextFieldProps<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({ control: props.control, name: props.name })

  return (
    <TextField
      {...props}
      {...field}
      errorMessage={error?.message}
      id={props.name}
      onChange={onChange}
      value={value}
    />
  )
}
