import DeleteIcon from '@/assets/icons/deleteIcon'
import { Button, Modal, Typography } from '@/components'
import { DialogClose } from '@radix-ui/react-dialog'

import s from './deleteItem.module.scss'

type DeleteModalProps = {
  deleteCallback: () => void
  id: string
  modalName: string
  title: string
}

export const DeleteItemModal = (props: DeleteModalProps) => {
  return (
    <Modal title={`Delete ${props.modalName}`} trigger={<DeleteIcon />}>
      <div className={s.content}>
        <Typography>Do you really want to delete {props.title}?</Typography>
        <Typography>All cards will be deleted.</Typography>
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              props.deleteCallback()
            }}
          >
            Delete {props.modalName}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
