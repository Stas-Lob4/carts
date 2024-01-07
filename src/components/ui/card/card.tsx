import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div className={classNames.root} ref={ref} {...rest}></div>
})
