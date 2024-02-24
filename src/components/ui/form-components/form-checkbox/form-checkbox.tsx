import { FieldValues, useController } from 'react-hook-form'

import { Checkbox, FormCheckboxProps } from '@/components'

export const FormCheckbox = <T extends FieldValues>(props: FormCheckboxProps<T>) => {
  const { control, shouldUnregister, ...rest } = props
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({ control, disabled: rest.disabled, name: rest.name, shouldUnregister })

  return <Checkbox {...rest} checked={value} onBlur={onBlur} onCheckedChange={onChange} ref={ref} />
}
