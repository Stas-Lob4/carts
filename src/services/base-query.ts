import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
})
