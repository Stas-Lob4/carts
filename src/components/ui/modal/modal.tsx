import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/assets/icons'
import { Card, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type Modals = {
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const Modal = forwardRef<ElementRef<typeof Dialog.Content>, Modals>((props, ref) => {
  const { children, title, trigger, ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild className={s.trigger}>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content asChild className={s.window} ref={ref}>
          <Card>
            {title && (
              <div className={s.header}>
                <Dialog.Title asChild>
                  <Typography as={'h2'} variant={'h2'}>
                    {title}
                  </Typography>
                </Dialog.Title>
                <Dialog.Close aria-label={'Close'} className={s.closeButton}>
                  <Close fill={'white'} />
                </Dialog.Close>
              </div>
            )}
            <div className={s.content}>{children}</div>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})
