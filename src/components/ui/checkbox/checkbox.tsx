import { Check } from '@/assets'
import { Typography } from '@/components'
import * as CheckboxFromRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
}
export const Checkbox = (props: CheckboxProps) => {
  const { checked, className, disabled, id, label, onChange } = props

  const classNames = {
    checkbox: s.checkbox,
    frame: s.frame,
    indicator: s.indicator,
    root: clsx(s.label, disabled && s.disabled, className),
  }

  return (
    <Typography as={'label'} className={classNames.root}>
      <CheckboxFromRadix.Root
        checked={checked}
        className={classNames.checkbox}
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
      >
        <div className={classNames.frame}></div>
        {checked && (
          <CheckboxFromRadix.Indicator className={classNames.indicator} forceMount>
            <Check />
          </CheckboxFromRadix.Indicator>
        )}
      </CheckboxFromRadix.Root>
      {label}
    </Typography>
  )
}
