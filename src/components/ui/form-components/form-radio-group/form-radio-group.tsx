import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

type FormRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'onValueChange' | 'value'>
export const FormRadioGroup = <T extends FieldValues>(props: FormRadioGroupProps<T>) => {
  const { control, name, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup name={name} onValueChange={onChange} value={value} {...rest} />
}
