import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Button, ControlledCheckbox, Modal, TextField } from '@/components'
import { Dialog, DialogClose } from '@radix-ui/react-dialog'

import s from './addNewDeck.module.scss'

import { addDeck } from './../decks-reducer'

type FormValues = {
  private: boolean
  title: string
}

export const AddNewDeck = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const dispatch = useDispatch()

  const createNewDeck = (title: string) => {
    dispatch(
      addDeck({
        newDeck: {
          cardsCount: 0,
          createdBy: 'Lis',
          id: 78,
          image: null,
          title: title,
          updated: '2023-07-04',
        },
      })
    )
  }

  return (
    <Modal buttonName={'Add New Deck'} title={'Add New Deck'}>
      <form className={s.form} onSubmit={handleSubmit(d => createNewDeck(d.title))}>
        <TextField label={'Name Pack'} {...register('title')} />
        <Button fullWidth variant={'secondary'}>
          Upload Image
        </Button>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Private pack'}
          name={'private'}
        />
        <div className={s.buttons}>
          <DialogClose className={s.closeDialog}>
            <Button type={'button'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button type={'submit'}>Add New Pack</Button>
        </div>
      </form>
    </Modal>
  )
}
