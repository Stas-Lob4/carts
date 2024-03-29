import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { CARD_SCHEMA, Card, UploadImage } from '@/common'
import { Button } from '@/components'
import { FormAddNewItem } from '@/components/modals/form-add-new-item'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './form-card-modal.module.scss'

export type FormCardModalProps = {
  buttonText: string
  card?: Card
  disabled?: boolean
  onSubmit: (data: FormData) => void
  setOpen: (open: boolean) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export type FormCardModalValues = z.input<typeof CARD_SCHEMA>

export const FormCardModal = (props: FormCardModalProps) => {
  const { buttonText, card, className, disabled, onSubmit, setOpen } = props
  const [questionImg, setQuestionImg] = useState<UploadImage>(card?.questionImg || '')
  const [answerImg, setAnswerImg] = useState<UploadImage>(card?.answerImg || '')

  const formMethods = useForm<FormCardModalValues>({
    defaultValues: {
      answer: card?.answer || '',
      question: card?.question || '',
    },
    resolver: zodResolver(CARD_SCHEMA),
  })

  const { handleSubmit } = formMethods

  const isStringAnswerImg = typeof answerImg === 'string'
  const isStringQuestionImg = typeof questionImg === 'string'

  const onSubmitHandler = (data: FormCardModalValues) => {
    const formData = new FormData()
    const sentQuestionImg = questionImg === null ? '' : questionImg
    const sentAnswerImg = answerImg === null ? '' : answerImg

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    !isStringQuestionImg && formData.append('questionImg', sentQuestionImg)
    !isStringAnswerImg && formData.append('answerImg', sentAnswerImg)
    onSubmit(formData)
  }

  const answerFileRef = useRef<HTMLInputElement>(null)
  const questionFileRef = useRef<HTMLInputElement>(null)

  const clearQuestionImg = () => {
    setQuestionImg(null)
    if (questionFileRef.current) {
      questionFileRef.current.value = ''
    }
  }
  const clearAnswerImg = () => {
    setAnswerImg(null)
    if (answerFileRef.current) {
      answerFileRef.current.value = ''
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmitHandler)}>
        <FormAddNewItem
          cardSubtitle={'Question:'}
          clearImg={clearQuestionImg}
          fileRef={questionFileRef}
          img={questionImg}
          isCard
          newItemTextField={{
            label: 'Question',
            name: 'question',
            placeholder: 'Enter your question',
          }}
          setImg={setQuestionImg}
        />
        <FormAddNewItem
          cardSubtitle={'Answer:'}
          clearImg={clearAnswerImg}
          fileRef={answerFileRef}
          img={answerImg}
          isCard
          newItemTextField={{
            label: 'Answer',
            name: 'answer',
            placeholder: 'Enter your answer',
          }}
          setImg={setAnswerImg}
        />
        <div className={s.buttons}>
          <Button onClick={() => setOpen(false)} type={'reset'} variant={'secondary'}>
            Cancel
          </Button>
          <Button disabled={disabled} type={'submit'} variant={'primary'}>
            {buttonText}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
