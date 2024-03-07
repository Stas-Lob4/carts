import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './learn-block.module.scss'

export type LearnBlockProps = {
  className?: string
  description: string
  img?: string
  main: 'Answer' | 'Question'
}

export const LearnBlock = (props: LearnBlockProps) => {
  const { className, description, img, main } = props

  return (
    <div className={clsx(s.wrapper, className)}>
      <Typography as={'p'} className={s.text} variant={'h3'}>
        <Typography as={'span'} variant={'subtitle1'}>
          {`${main}: `}
        </Typography>
        {description}
      </Typography>

      {img && <img alt={`${main} image`} className={s.img} src={img} />}
    </div>
  )
}
