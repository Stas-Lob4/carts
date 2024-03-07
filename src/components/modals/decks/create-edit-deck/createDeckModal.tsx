import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/components'
import { FormDeck } from '@/components/modals/decks'
import { useCreateDeckMutation } from '@/services/decks'

type CreateItemModalProps = {
  className?: string
  trigger: ReactNode
}

export const CreateDeckModal = ({ className, trigger }: CreateItemModalProps) => {
  const [open, setOpen] = useState(false)
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  const createDeckHandler = async (data: FormData) => {
    const createNewDeck = createDeck(data).unwrap()

    await toast.promise(createNewDeck, {
      error: 'Failed to create DeckPage',
      pending: 'Create DeckPage...',
      success: 'DeckPage create successfully!',
    })
    await createNewDeck
    setOpen(false)
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Add New Card'} trigger={trigger}>
      <FormDeck
        buttonName={'Add New Pack'}
        className={className}
        disabled={isLoading}
        onSubmit={createDeckHandler}
        setOpen={setOpen}
      />
    </Modal>
  )
}
