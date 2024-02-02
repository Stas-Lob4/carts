import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { SELECT_OPTIONS_PAGINATION } from '@/common'
import { useDebounce } from '@/common/hooks/use-debounce'
import { useDecksSearchParams } from '@/common/hooks/use-decks-search-params'
import { BackButton, Cards, Page, TextField } from '@/components'
import { CardsHeader } from '@/components/cards/cards-header/cards-header'
import { Pagination } from '@/components/ui/pagination/pagination'
import { useGetMeQuery } from '@/services'
import { useGetDeckCartsQuery, useGetOneDeckQuery } from '@/services/deck'

import s from './deck.module.scss'

export const Deck = () => {
  const { deckId } = useParams()
  const [createMode, setCreateMode] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)
  const [deleteMode, setDeleteMode] = useState<boolean>(false)
  const [cartToDeleteId, setCartToDeleteId] = useState<null | string>(null)
  const [cartToEditId, setCartToEditId] = useState<null | string>(null)

  const {
    changeItemsPerPage,
    changePage,
    changeSort,
    changeValue,
    itemsPerPage,
    page,
    sort,
    value,
  } = useDecksSearchParams()
  const debouncedValue = useDebounce<string>(value ?? '', 500)

  const { data: cards, isLoading } = useGetDeckCartsQuery({
    arg: {
      currentPage: page,
      itemsPerPage,
      orderBy: sort ? `${sort.key}-${sort.direction}` : undefined,
      question: debouncedValue,
    },
    id: deckId || '',
  })
  const { data: deck } = useGetOneDeckQuery({ id: deckId || '' })
  const { data: me } = useGetMeQuery()

  const isOwner = me?.id === deck?.userId
  const isEmpty = deck && deck.cardsCount === 0

  const changeSearchValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeValue(e.currentTarget.value)
  }

  // const cardToDeleteName = cards?.items?.find(card => card.id === cardToDeleteName)?.question
  // const cardToEditId = cards?.items?.find(card => card.id === cardToEditId)

  if (isLoading) {
    return
  }

  return (
    <Page marginTop={'24px'}>
      <BackButton text={'Back to Decks List'} />
      <CardsHeader
        deck={deck}
        deckId={deckId ?? ''}
        isOwner={isOwner}
        setCreateMode={setCreateMode}
        setDeleteMode={setDeleteMode}
        setEditMode={setEditMode}
      />
      {!isEmpty && (
        <TextField
          onChange={changeSearchValueHandler}
          placeholder={'Search cards'}
          rootContainerProps={{ className: s.inputSearch }}
          type={'search'}
          value={value ?? ''}
        />
      )}
      <Cards
        cards={cards?.items}
        isEmpty={isEmpty}
        isOwner={isOwner}
        onSort={changeSort}
        searchValue={value}
        setCardToDeleteId={setCartToDeleteId}
        setCardToEditId={setCartToEditId}
        setCreateMode={setCreateMode}
        sort={sort}
      />
      <Pagination
        count={cards?.pagination.totalPages ?? 0}
        onChange={changePage}
        onPerPageChange={changeItemsPerPage}
        page={page}
        perPage={String(itemsPerPage)}
        perPageOptions={SELECT_OPTIONS_PAGINATION.map(m => m.value)}
      />
    </Page>
  )
}
