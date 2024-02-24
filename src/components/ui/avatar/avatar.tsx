import { ComponentPropsWithoutRef } from 'react'

import * as Ava from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.css'

export type AvatarProps = {
  name?: string
  size?: string
  src?: string
} & ComponentPropsWithoutRef<typeof Ava.Root>

export const Avatar = ({ className, name, size = '36px', src, ...rest }: AvatarProps) => {
  let fallBackTitle
  const arrayFromName = name?.split(/[\s_-]/)

  if (arrayFromName?.length === 1) {
    fallBackTitle = arrayFromName.join().slice(0, 2).toUpperCase()
  } else {
    fallBackTitle = arrayFromName
      ?.map(w => w.charAt(0))
      .join(' ')
      .toUpperCase()
  }

  return (
    <Ava.Root {...rest}>
      <Ava.Image
        alt={`${name} avatar`}
        className={clsx(className, s.avatar)}
        height={size}
        src={src}
        width={size}
      />
      <Ava.Fallback className={s.fallback} delayMs={600}>
        {fallBackTitle}
      </Ava.Fallback>
    </Ava.Root>
  )
}
