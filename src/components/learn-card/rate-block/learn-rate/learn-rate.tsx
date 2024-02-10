import { useForm } from 'react-hook-form'

import { CardGrade, Grade, Option } from '@/common'
import { Button, FormRadioGroup, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './learn-rate.module.scss'

export type LearnRateProps = {
  className?: string
  onSubmit: (data: Grade) => void
}

const options: Option[] = [
  { label: 'Did not know', value: CardGrade.DidNotKnow.toString() },
  { label: 'Forgot', value: CardGrade.Forgot.toString() },
  { label: 'A lot of Thought', value: CardGrade.ALotOfThought.toString() },
  { label: 'Confused', value: CardGrade.Confused.toString() },
  { label: 'Knew the answer', value: CardGrade.KnewTheAnswer.toString() },
]

export const LearnRate = ({ className, onSubmit }: LearnRateProps) => {
  const { control, handleSubmit } = useForm<Grade>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.title} variant={'subtitle1'}>
        Rate yourself:
      </Typography>
      <FormRadioGroup control={control} name={'grade'} options={options} />
      <Button className={s.button} fullWidth type={'submit'}>
        Next Question
      </Button>
    </form>
  )
}
