import { useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/components'
import { CreateCardModalProps } from '@/components/modals/cards/create-card/create-card-modal.types'
import { useCreateCardMutation } from '@/services/cards/cards.services'

import { FormCardModal } from '../form-card'

export const CreateCardModal = ({ className, deckId, trigger }: CreateCardModalProps) => {
  const [open, setOpen] = useState(false)

  const [createCard, { isLoading }] = useCreateCardMutation()

  const createCardHandler = async (values: FormData) => {
    await createCard({ body: values, id: deckId })

    toast.success('A new cards has been create')
    setOpen(false)
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Add New Card'} trigger={trigger}>
      <FormCardModal
        buttonText={'Add New Card'}
        className={className}
        disabled={isLoading}
        onSubmit={createCardHandler}
        setOpen={setOpen}
      />
    </Modal>
  )
}
