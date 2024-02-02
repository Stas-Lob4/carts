import { ReactNode } from 'react'

import DeleteIcon from '@/assets/icons/deleteIcon'
import { Button, Modal, Typography } from '@/components'
import { DialogClose, DialogTrigger } from '@radix-ui/react-dialog'

import s from './deleteDeck.module.scss'

export const DeleteDeck = () => {
  return (
    <Modal title={'Delete Deck'} variant={'link'}>
      <div className={s.content}>
        <Typography>Do you really want to delete smth?</Typography>
        <Typography>All cards will be deleted.</Typography>
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button type={'submit'}>Delete Deck</Button>
        </div>
      </div>
    </Modal>
  )
}
