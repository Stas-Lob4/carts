import { Sort, Typography } from '@/components'
import { CardsTable } from '@/components/cards/cards-table/cards-table'
import { Card } from '@/services/carts/carts.types'

import s from './cards.module.scss'

type CardProps = {
  cards: Card[] | undefined
  onSort: (key: Sort) => void
  searchValue: null | string
  sort: Sort
}

export const Cards = (props: CardProps) => {
  const { cards, onSort, searchValue, sort } = props

  if (cards?.length === 0 && searchValue) {
    return (
      <Typography as={'h2'} className={s.found} variant={'h2'}>
        No result found for you search query. Please make sure you entered the query correctly.
      </Typography>
    )
  } else if (cards?.length === 0) {
    return (
      <Typography as={'h2'} className={s.found} variant={'h2'}>
        Cards not found
      </Typography>
    )
  }

  return <CardsTable cards={cards} onSort={onSort} sort={sort} />
}
