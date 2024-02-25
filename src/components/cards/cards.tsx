import { Button, Typography } from '@/components'
import { CardsTable, Sort } from '@/components/cards/cards-table/cards-table'
import { CreateCardModals } from '@/components/modals/cards/create-card-modals/create-card-modals'
import { CardType } from '@/services/cards/cards.types'

import s from './cards.module.scss'

type CardProps = {
  cards: CardType[] | undefined
  deckId: string
  isEmpty?: boolean
  isOwner?: boolean
  onSort: (key: Sort) => void
  searchValue: null | string
  sort: Sort
}

export const Cards = (props: CardProps) => {
  const { cards, deckId, isEmpty, isOwner, onSort, searchValue, sort } = props

  if (cards?.length === 0 && searchValue) {
    return (
      <Typography as={'h2'} className={s.found} variant={'h2'}>
        No result found for you search query. Please make sure you entered the query correctly.
      </Typography>
    )
  }

  return (
    <>
      {isEmpty ? (
        <div className={s.infoBlock}>
          <Typography as={'h2'} className={s.infoText} variant={'h2'}>
            {'This decks is empty' +
              (isOwner ? '. ' + 'Click add new card to fill this decks' : '')}
          </Typography>
          {isOwner && <CreateCardModals deckId={deckId} trigger={<Button>Add New Card</Button>} />}
        </div>
      ) : (
        <CardsTable cards={cards} isOwner={isOwner} onSort={onSort} sort={sort} />
      )}
    </>
  )
}
