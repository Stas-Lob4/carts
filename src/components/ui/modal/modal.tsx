import { ReactNode } from 'react'

import { Close } from '@/assets/icons'
import { Button, Card, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type Modals = {
  buttonName?: string
  children: ReactNode
  className?: string
  title?: string
  variant?: 'link' | 'secondary' | 'tertiary'
}

export const Modal = (props: Modals) => {
  const { buttonName, children, className, title, variant = 'primary', ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild>
        <Button className={className} variant={variant}>
          {buttonName}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <div className={s.window}>
          <Dialog.Content>
            <Card>
              {title && (
                <div className={s.header}>
                  <Dialog.Title asChild>
                    <Typography as={'h2'} variant={'h2'}>
                      {title}
                    </Typography>
                  </Dialog.Title>
                  <Dialog.Close aria-label={'Close'} asChild className={s.closeButton}>
                    <Close />
                  </Dialog.Close>
                </div>
              )}
              <div className={s.content}>{children}</div>
            </Card>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
