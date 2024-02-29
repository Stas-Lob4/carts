import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: Ref<ElementRef<T>>
  ) => {
    const { as, className, fullWidth, variant = 'primary', ...rest } = props
    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    const Component: ElementType = as || 'button'

    return <Component className={classNames} ref={ref} {...rest} />
  }
)
