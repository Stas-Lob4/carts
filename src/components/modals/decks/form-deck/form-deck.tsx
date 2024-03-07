import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { DECK_SCHEMA, UploadImage } from '@/common'
import { Button } from '@/components'
import { FormAddNewItem } from '@/components/modals'
import { Deck } from '@/services/decks'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './form-deck.module.scss'

export type FormDeckProps = {
  buttonName: string
  className?: string
  deck?: Deck
  disabled?: boolean
  onSubmit: (data: FormData) => void
  setOpen: (open: boolean) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export type FormDeckModalValues = z.input<typeof DECK_SCHEMA>

export const FormDeck = (props: FormDeckProps) => {
  const { buttonName, className, deck, disabled, onSubmit, setOpen } = props
  const [deckImg, setDeckImg] = useState<UploadImage>(deck?.cover || null)
  const formMethods = useForm<FormDeckModalValues>({
    defaultValues: { isPrivate: deck?.isPrivate || false, name: deck?.name || '' },
    resolver: zodResolver(DECK_SCHEMA),
  })

  const { handleSubmit } = formMethods

  const isStringDeckImg = typeof deckImg === 'string'

  const onSubmitHandler = (data: FormDeckModalValues) => {
    const formData = new FormData()
    const sendDeckImg = deckImg === null ? '' : deckImg

    !isStringDeckImg && formData.append('cover', sendDeckImg)
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate ? 'true' : 'false')
    onSubmit(formData)
  }

  const deckFileRef = useRef<HTMLInputElement>(null)
  const clearDeckImg = () => {
    setDeckImg(null)
    if (deckFileRef.current) {
      deckFileRef.current.value = ''
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmitHandler)}>
        <FormAddNewItem
          checkboxProps={{ className: s.checkbox, label: 'Private Pack', name: 'isPrivate' }}
          clearImg={clearDeckImg}
          fileRef={deckFileRef}
          img={deckImg}
          isDeck
          newItemTextField={{
            label: 'Name Pack',
            name: 'name',
            placeholder: 'Enter a new pack name',
          }}
          setImg={setDeckImg}
        />
        <div className={s.buttons}>
          <Button onClick={() => setOpen(false)} type={'reset'} variant={'secondary'}>
            Cancel
          </Button>
          <Button disabled={disabled} type={'submit'} variant={'primary'}>
            {buttonName}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
