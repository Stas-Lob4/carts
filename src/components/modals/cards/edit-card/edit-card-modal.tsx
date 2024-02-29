import { useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/components'
import { useUpdateCardMutation } from '@/services/cards'

import { FormCardModal } from '../form-card'
import { EditCardModalProps } from './edit-card-modal.types'

export const EditCardModal = ({ card, className, trigger }: EditCardModalProps) => {
  const [open, setOpen] = useState(false)
  const [updateCard, { isLoading }] = useUpdateCardMutation()
  const { id } = card
  const updateCardHandler = async (data: FormData) => {
    setOpen(false)
    await updateCard({ body: data, id })

    toast.success('Succes updated cards')
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Edit Card'} trigger={trigger}>
      <FormCardModal
        buttonText={'Save changes'}
        card={card}
        className={className}
        disabled={isLoading}
        onSubmit={updateCardHandler}
        setOpen={setOpen}
      />
    </Modal>
  )
}
