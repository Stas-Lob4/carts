import { ComponentPropsWithoutRef } from 'react'

import userAva from '@/assets/images/userAva.svg'
import clsx from 'clsx'

import s from './avatar.module.css'

export type AvatarProps = ComponentPropsWithoutRef<'img'> & {
  name?: string
  size?: string
}

export const Avatar = ({ className, name, size = '36px', src, ...rest }: AvatarProps) => {
  return (
    <img
      alt={`${name} avatar`}
      className={clsx(className, s.avatar)}
      height={size}
      src={src || userAva}
      width={size}
      {...rest}
    />
  )
}
