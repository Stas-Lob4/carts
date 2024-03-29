import { CardGrade } from '@/common'
import { PaginatedResponse } from '@/services'

export type DeckResponse = PaginatedResponse<Deck[]>

export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DeckAuthor = {
  id: string
  name: string
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}

export type CreateDeckArgs = FormData

export type GradeCardArg = { cardId: string; grade: CardGrade }
export type GetRandomCardArg = { previousCardId: string }

export type DeleteDeckArgs = {
  id: string
}
