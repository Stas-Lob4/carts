import { Grade } from '@/common'
import { LearnBlock } from '@/components/learn-card/learn-block'
import { LearnRate } from '@/components/learn-card/rate-block/learn-rate'

import s from './rate-block.module.scss'

export type RateBlockProps = {
  answer: string
  answerImg: string
  onSubmit: (data: Grade) => void
}

export const RateBlock = (props: RateBlockProps) => {
  const { answer, answerImg, onSubmit } = props

  return (
    <>
      <LearnBlock className={s.learn} description={answer} img={answerImg} main={'Answer'} />
      <LearnRate className={s.rate} onSubmit={onSubmit} />
    </>
  )
}
