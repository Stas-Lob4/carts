import { ReactNode } from 'react'

import { Button, Modal, Typography } from '@/components'
import { Deck, useDeleteDeckMutation } from '@/services/decks'
import { DialogClose } from '@radix-ui/react-dialog'

import s from './delete-deck.module.scss'

type DeleteModalProps = {
  deck: Deck
  trigger: ReactNode
}

export const DeleteDeckModal = (props: DeleteModalProps) => {
  const { deck, trigger } = props
  const [deleteDeckMutation] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeckMutation({ id: deck.id })
  }

  return (
    <Modal title={`Delete Deck`} trigger={trigger}>
      <div className={s.content}>
        <Typography>Do you really want to delete {deck.name}?</Typography>
        <Typography>All cards will be deleted.</Typography>
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={deleteDeckHandler}>Delete Deck</Button>
        </div>
      </div>
    </Modal>
  )
}
