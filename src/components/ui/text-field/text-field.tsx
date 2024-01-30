import { ChangeEvent, ComponentPropsWithoutRef, ElementType, forwardRef, useState } from 'react'

import { Close, Eye, Search, VisibilityOff } from '@/assets'
import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps<T extends ElementType = 'input'> = {
  as?: T
  className?: string
  clearField?: () => void
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  search?: boolean
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      clearField,
      errorMessage,
      label,
      onChangeValue,
      placeholder,
      search,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const isSearch = type === 'search'
    const isShowPasswordButton = type === 'password'
    const isShowClearButton = isSearch && clearField && rest.value

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeValue) {
        onChangeValue(e.target.value)
      }
    }

    const setShowPasswordHandler = () => setShowPassword(prevState => !prevState)

    const setFinalInputType = (type: TextFieldProps['type'], showPassword: boolean) => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      return type
    }
    const finalInputType = setFinalInputType(type, showPassword)

    const classNames = {
      buttonIcon: clsx(s.buttonIcon),
      closeButton: clsx(s.closeIcon),
      container: clsx(s.container),
      error: clsx(s.error),
      input: clsx(s.input, !!errorMessage && s.error, isSearch && s.hasSearchIcon, className),
      label: clsx(s.label),
      root: clsx(s.root),
      searchIcon: clsx(s.searchIcon, rest.disabled && s.disabled),
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.container}>
          {isSearch && <Search className={classNames.searchIcon} />}
          <input
            className={classNames.input}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={finalInputType}
            {...rest}
          />
          {isShowPasswordButton && (
            <button
              className={classNames.buttonIcon}
              disabled={rest.disabled}
              onClick={setShowPasswordHandler}
              type={'button'}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          {isShowClearButton && (
            <button
              className={classNames.closeButton}
              disabled={rest.disabled}
              onClick={clearField}
              type={'button'}
            >
              <Close />
            </button>
          )}
        </div>
        {errorMessage && (
          <Typography className={classNames.error} variant={'error'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
