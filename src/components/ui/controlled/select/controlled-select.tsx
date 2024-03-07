import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/components'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<SelectProps, 'onValueChange' | 'value'>

export const ControlledSelect = <T extends FieldValues>(props: Props<T>) => {
  const { control, shouldUnregister, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <Select {...rest} onValueChange={onChange} value={value} />
}
