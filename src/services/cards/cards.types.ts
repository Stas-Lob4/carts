import { Pagination } from '@/services'

export type CardType = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CardsResponse = {
  items: CardType[]
  pagination: Pagination
}

export type CardArgsType = {
  id: string
}

export type UpdateCardBody = {
  answer?: string
  answerImg?: string
  answerVideo?: string
  question?: string
  questionImg?: string
  questionVideo?: string
}

export type UpdateCardArgs = {
  body: UpdateCardBody
} & CardArgsType

export type GetCardsArgs = {
  currentPage?: number
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
}
