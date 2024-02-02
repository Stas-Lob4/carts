import { Button, Typography } from '@/components'
import { CardsTable, Sort } from '@/components/cards/cards-table/cards-table'
import { Card } from '@/services/carts/carts.types'

import s from './cards.module.scss'

type CardProps = {
  cards: Card[] | undefined
  isEmpty?: boolean
  isOwner?: boolean
  onSort: (key: Sort) => void
  searchValue: null | string
  setCardToDeleteId?: (id: string) => void
  setCardToEditId?: (id: string) => void
  setCreateMode: (CreateMode: boolean) => void
  sort: Sort
}

export const Cards = (props: CardProps) => {
  const { cards, isEmpty, isOwner, onSort, searchValue, setCreateMode, sort } = props

  if (cards?.length === 0 && searchValue) {
    return (
      <Typography as={'h2'} className={s.found} variant={'h2'}>
        No result found for you search query. Please make sure you entered the query correctly.
      </Typography>
    )
  } else if (cards?.length === 0) {
    return (
      <>
        {isEmpty ? (
          <div className={s.info}>
            <Typography as={'h2'} className={s.infoText} variant={'h2'}>
              Cards not found
            </Typography>
            {isOwner && <Button onClick={() => setCreateMode(true)}>Add new card</Button>}
          </div>
        ) : (
          <CardsTable cards={cards} onSort={onSort} sort={sort} />
        )}
      </>
    )
  }

  return <CardsTable cards={cards} onSort={onSort} sort={sort} />
}
