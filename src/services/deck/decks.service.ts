import { baseApi } from '@/services'
import { CardType, CardsResponse, GetCardsArgs } from '@/services/carts/carts.types'
import {
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DeleteDeckArgs,
  GetDecksArgs,
  GradeCardArg,
} from '@/services/deck/deck.types'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => ({
          body: arg,
          formData: true,
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
      getDeckCarts: builder.query<CardsResponse, { arg: GetCardsArgs; id: string }>({
        query: ({ arg, id }) => ({ params: arg ? arg : undefined, url: `v1/decks/${id}/cards` }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: arg => ({
          params: arg ?? undefined,
          url: `v2/decks`,
        }),
      }),
      getOneDeck: builder.query<Deck, { id: string }>({
        query: ({ id }) => `v1/decks/${id}`,
      }),
      getRandomCard: builder.query<CardType, { args?: GetCardsArgs; id: string }>({
        providesTags: ['Cards'],
        query: args => ({
          params: args ? args : undefined,
          url: 'v2/decks',
        }),
      }),
      gradeCard: builder.mutation<CardType, { args: GradeCardArg; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ args, id }) => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${id}/learn`,
        }),
      }),
      updateDeck: builder.mutation<Deck, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckCartsQuery,
  useGetDecksQuery,
  useGetOneDeckQuery,
  useGetRandomCardQuery,
  useGradeCardMutation,
  useUpdateDeckMutation,
} = DecksService
