import { toast } from 'react-toastify'

import { DeleteModal, Typography } from '@/components'
import { DeleteCardModuleProps } from '@/components/modals/cards/delete-card/delete-card-module.types'
import { useDeleteCardMutation } from '@/services/cards'

export const DeleteCardModule = (props: DeleteCardModuleProps) => {
  const { className, id, name, trigger } = props
  const [deleteCard, { isLoading }] = useDeleteCardMutation()

  const deleteCardHandler = async () => {
    await deleteCard({ id: id })

    toast.success('Success update cards')
  }

  return (
    <DeleteModal
      additionalText={<Typography>All cards will be deleted.</Typography>}
      className={className}
      deleteItemHandler={deleteCardHandler}
      disabled={isLoading}
      name={name}
      title={'Delete cards'}
      trigger={trigger}
    />
  )
}
