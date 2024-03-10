import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/components'
import { FormDeck } from '@/components/modals/decks/form-deck/form-deck'
import { Deck, useUpdateDeckMutation } from '@/services/decks'

export type EditDeckModalProps = {
  className?: string
  deck: Deck
  trigger: ReactNode
}

export const EditDeckModal = ({ className, deck, trigger }: EditDeckModalProps) => {
  const [open, setOpen] = useState(false)
  const [updateDeck, { isLoading }] = useUpdateDeckMutation()

  const updateDeckHandler = async (data: FormData) => {
    setOpen(false)
    const updateDeckUnwrap = updateDeck({ data, id: deck.id }).unwrap()

    await toast.promise(updateDeckUnwrap, {
      error: 'Failed to update decks',
      pending: 'updating decks...',
      success: 'decks update successfully!',
    })

    await updateDeckUnwrap
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Edit Deck'} trigger={trigger}>
      <FormDeck
        buttonName={'Save changes'}
        className={className}
        deck={deck}
        disabled={isLoading}
        onSubmit={updateDeckHandler}
        setOpen={setOpen}
      />
    </Modal>
  )
}
