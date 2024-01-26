import { baseApi } from '@/services'
import {
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DeleteDeckArgs,
  GetDecksArgs,
} from '@/services/deck/deck.types'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: arg => ({
          params: arg ?? undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
})
