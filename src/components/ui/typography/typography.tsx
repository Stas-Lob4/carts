import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TextProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<'p'>

export const Typography = <T extends ElementType = 'p'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { as: Component = 'a', className, variant = 'body1', ...rest } = props

  return <Component className={clsx(s.text, s[variant], className)} {...rest} />
}
