import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxRadix.Root> & {
  label?: string
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const { checked, className, disabled, id, label, ...rest } = props

    const classNames = {
      checkbox: s.checkbox,
      frame: s.frame,
      indicator: s.indicator,
      root: clsx(s.label, disabled && s.disabled, className),
    }

    return (
      <Typography as={'label'} className={classNames.root}>
        <CheckboxRadix.Root
          {...rest}
          className={classNames.checkbox}
          onCheckedChange={rest.onCheckedChange}
          ref={ref}
        >
          <div className={classNames.frame}></div>
          {checked && (
            <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
              <Check />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        {label}
      </Typography>
    )
  }
)
