import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import image from '../../assets/images/no-image-available-hi-814686611.png'

const initialState: AppInitialStateType = {
  decks: [
    {
      cardsCount: 10,
      createdBy: 'Andreww',
      id: 1,
      image: image,
      title: 'Project A',
      updated: '2023-07-07',
    },
    {
      cardsCount: 5,
      createdBy: 'Jane Smith',
      id: 2,
      image: image,
      title: 'Project B',
      updated: '2023-07-06',
    },
    {
      cardsCount: 8,
      createdBy: 'Alice Johnson',
      id: 3,
      image: image,
      title: 'Project C',
      updated: '2023-07-05',
    },
    {
      cardsCount: 3,
      createdBy: 'Bob Anderson',
      id: 4,
      image: image,
      title: 'Project D',
      updated: '2023-07-07',
    },
    {
      cardsCount: 12,
      createdBy: 'Emma Davis',
      id: 5,
      image: image,
      title: 'Project E',
      updated: '2023-07-04',
    },
  ],
}

export type AppInitialStateType = { decks: DeckType[] }

export type DeckType = {
  cardsCount: number
  createdBy: string
  id: number
  image: null | typeof image
  title: string
  updated: string
}

const slice = createSlice({
  initialState,
  name: 'decks',
  reducers: {
    addDeck: (state, action: PayloadAction<{ newDeck: DeckType }>) => {
      state.decks = [...state.decks, action.payload.newDeck]
    },
  },
})

export const decksReducer = slice.reducer
export const { addDeck } = slice.actions
