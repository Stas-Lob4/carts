import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/assets/icons'
import { Card, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

export type Modals = {
  children?: ReactNode
  className?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Content>

export const Modal = forwardRef<ElementRef<typeof Dialog.Content>, Modals>((props, ref) => {
  const { children, className, title, trigger, ...rest } = props

  const classNames = {
    closeButton: s.closeButton,
    content: clsx(s.content, className),
    header: s.header,
    overlay: s.overlay,
    title: s.title,
    trigger: s.trigger,
    window: s.window,
  }

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild className={classNames.trigger}>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.overlay} />
        <Dialog.Content asChild className={classNames.window} ref={ref}>
          <Card>
            {title && (
              <div className={classNames.header}>
                <Dialog.Title asChild>
                  <Typography as={'h2'} variant={'h2'}>
                    {title}
                  </Typography>
                </Dialog.Title>
                <Dialog.Close aria-label={'Close'} className={classNames.closeButton}>
                  <Close fill={'white'} />
                </Dialog.Close>
              </div>
            )}
            <div className={classNames.content}>{children}</div>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
})
