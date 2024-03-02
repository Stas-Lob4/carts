import DeleteIcon from '@/assets/icons/deleteIcon'
import { Button, Modal, Typography } from '@/components'
import { useDeleteDeckMutation } from '@/services/decks'
import { DialogClose } from '@radix-ui/react-dialog'

import s from './deleteItem.module.scss'

type DeleteModalProps = {
  id: string
  modalName: string
  title: string
}

export const DeleteItemModal = (props: DeleteModalProps) => {
  const { id, modalName, title } = props
  const [deleteDeckMutation] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeckMutation({ id: id })
  }

  return (
    <Modal title={`Delete ${modalName}`} trigger={<DeleteIcon />}>
      <div className={s.content}>
        <Typography>Do you really want to delete {title}?</Typography>
        <Typography>All cards will be deleted.</Typography>
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={deleteDeckHandler}>Delete {props.modalName}</Button>
        </div>
      </div>
    </Modal>
  )
}
