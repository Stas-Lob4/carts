import { Sort } from '@/components/cards/cards-table/cards-table'
import { CardType } from '@/services/cards'

export type CardProps = {
  cards: CardType[] | undefined
  deckId: string
  isEmpty?: boolean
  isOwner?: boolean
  onSort: (key: Sort) => void
  searchValue: null | string
  sort: Sort
}
