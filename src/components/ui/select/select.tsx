import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets'
import { Typography } from '@/components'
import * as SelectFromRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { SelectItem } from './select-item'

export type SelectProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  label?: string
  options?: Option[]
  pagination?: boolean
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectFromRadix.Root>

export type Option = {
  disabled?: boolean
  label: string
  value: string
}

export const Select = forwardRef<ElementRef<typeof SelectFromRadix.Root>, SelectProps>(
  (props, ref) => {
    const {
      className,
      defaultValue,
      disabled,
      errorMessage,
      label,
      onValueChange,
      options,
      pagination,
      placeholder,
      value,
      ...rest
    } = props

    const classNames = {
      content: s.content,
      label: clsx(s.label, disabled && s.disabled, className),
      root: s.root,
      selectGroup: s.selectGroup,
      trigger: clsx(s.trigger, errorMessage && s.error, pagination && s.pagination),
      triggerIcon: clsx(s.triggerIcon),
      viewport: s.viewport,
    }

    const displayError = !!errorMessage && errorMessage.length > 0

    const selectOptions = options?.map(el => {
      return <SelectItem disabled={el.disabled} key={el.value} label={el.label} value={el.value} />
    })

    return (
      <div className={classNames.root}>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          {label}
        </Typography>
        <SelectFromRadix.Root
          defaultValue={defaultValue}
          disabled={disabled}
          onValueChange={onValueChange}
          value={value}
          {...rest}
        >
          <SelectFromRadix.Trigger className={classNames.trigger} ref={ref}>
            <SelectFromRadix.Value placeholder={placeholder} />
            <SelectFromRadix.Icon asChild className={classNames.triggerIcon}>
              <ArrowDown />
            </SelectFromRadix.Icon>
          </SelectFromRadix.Trigger>
          <SelectFromRadix.Portal>
            <SelectFromRadix.Content className={classNames.content} position={'popper'}>
              <SelectFromRadix.Viewport asChild className={classNames.viewport}>
                <SelectFromRadix.Group className={classNames.selectGroup}>
                  {selectOptions}
                </SelectFromRadix.Group>
              </SelectFromRadix.Viewport>
            </SelectFromRadix.Content>
          </SelectFromRadix.Portal>
        </SelectFromRadix.Root>
        {displayError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
    )
  }
)
