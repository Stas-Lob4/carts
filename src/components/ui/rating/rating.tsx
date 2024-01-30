import { ComponentPropsWithoutRef } from 'react'

import { Star, StarEmpty } from '@/assets'
import { clsx } from 'clsx'

import s from './rating.module.scss'

type RatingProps = {
  maxRating?: number
  rating: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = (props: RatingProps) => {
  const { className, maxRating = 5, rating, ...rest } = props
  const stars = [...Array(maxRating)].map((_, index) => index + 1)

  return (
    <div className={clsx(s.root, className)} {...rest}>
      {stars.map((star, index) => {
        return rating >= star ? (
          <Star className={s.icon} key={index} />
        ) : (
          <StarEmpty className={s.icon} key={index} />
        )
      })}
    </div>
  )
}
