import { decksReducer } from '@/app/decks/decks-reducer'
import { baseApi } from '@/services/base-api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    decks: decksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
