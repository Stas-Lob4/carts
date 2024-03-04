import { useState } from 'react'

import { Grade } from '@/common'
import { Button, Card, Typography } from '@/components'
import { LearnBlock } from '@/components/learn-card/learn-block'
import { RateBlock } from '@/components/learn-card/rate-block'
import { CardType } from '@/services/cards/cards.types'

import s from './learn-card.module.scss'

export type LearnCardProps = {
  card: CardType
  deckName: string
  onSubmit: (data: Grade, changeRateMode: any) => void
  open?: boolean
}
export const LearnCard = (props: LearnCardProps) => {
  const { card, deckName, onSubmit, open } = props

  const [rateMode, setRateMode] = useState(open)
  const handleSubmit = (date: Grade) => {
    onSubmit(date, setRateMode)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Learn “{deckName}”
      </Typography>
      <LearnBlock description={card.question} img={card.questionImg} main={'Question'} />

      <Typography as={'p'} className={s.shots} variant={'subtitle2'}>
        <Typography as={'span'} className={s.shotDescription} variant={'body2'}>
          Количество попыток ответов на вопросов:{' '}
        </Typography>
        {card.shots}
      </Typography>
      {rateMode ? (
        <RateBlock answer={card.answer} answerImg={card.answerImg} onSubmit={handleSubmit} />
      ) : (
        <Button className={s.button} fullWidth onClick={() => setRateMode(true)}>
          Show Answer
        </Button>
      )}
    </Card>
  )
}
