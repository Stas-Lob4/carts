import { ReactNode, useState } from 'react'

import { Button, Modal, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './delete-modal.module.scss'

type DeleteModalProps = {
  additionalText?: ReactNode | string
  className?: string
  deleteItemHandler: () => void
  disabled?: boolean
  name: string
  title?: string
  trigger: ReactNode
}
export const DeleteModal = (props: DeleteModalProps) => {
  const { additionalText, className, deleteItemHandler, disabled, name, title, trigger } = props
  const [open, setOpen] = useState(false)

  return (
    <Modal
      className={clsx(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title={title}
      trigger={trigger}
    >
      <div className={s.text}>
        <Typography variant={'body1'}>
          Do you really want to remove <b>{name}?</b>
          {additionalText}
        </Typography>
      </div>
      <div className={s.buttons}>
        <Button disabled={disabled} onClick={() => setOpen(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button disabled={disabled} onClick={deleteItemHandler}>
          {title || 'Remove item'}
        </Button>
      </div>
    </Modal>
  )
}
