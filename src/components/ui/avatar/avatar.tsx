import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as Ava from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  name?: string
  src?: string
} & ComponentPropsWithoutRef<typeof Ava.Root>

export const Avatar = forwardRef<ElementRef<typeof Ava.Root>, AvatarProps>(
  ({ className, name, src, ...rest }, ref) => {
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
      <Ava.Root className={clsx(className, s.root)} ref={ref} {...rest}>
        <Ava.Image alt={`${name || null} avatar`} className={s.avatar} src={src} />
        {!src && (
          <Ava.Fallback className={s.fallback}>
            <Typography variant={'overline'}>{fallBackTitle}</Typography>
          </Ava.Fallback>
        )}
      </Ava.Root>
    )
  }
)
