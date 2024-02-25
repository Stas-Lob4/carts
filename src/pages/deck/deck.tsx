import { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'

import { SELECT_OPTIONS_PAGINATION } from '@/common'
import { useDebounce } from '@/common/hooks/use-debounce'
import { useDecksSearchParams } from '@/common/hooks/use-decks-search-params'
import { BackButton, Cards, Loader, Page, TextField } from '@/components'
import { CardsHeader } from '@/components/cards/cards-header/cards-header'
import { Pagination } from '@/components/ui/pagination/pagination'
import { useGetMeQuery } from '@/services'

import s from './deck.module.scss'

import { useGetDeckCartsQuery, useGetOneDeckQuery } from '../../services/decks'

export const Deck = () => {
  const { deckId } = useParams()

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

  const {
    data: cards,
    isFetching: isFetchingCards,
    isLoading: isLoadingCards,
  } = useGetDeckCartsQuery({
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

  if (isLoadingCards) {
    return <Loader />
  }

  return (
    <Page marginTop={'24px'}>
      <BackButton className={s.backButton} text={'Back to Decks List'} />
      <CardsHeader
        deck={deck}
        deckId={deckId ?? ''}
        isEmpty={isEmpty}
        isLoading={isLoadingCards}
        isOwner={isOwner}
      />
      {!isEmpty && (
        <TextField
          disabled={isFetchingCards}
          onChange={changeSearchValueHandler}
          placeholder={'Search cards'}
          rootContainerProps={{ className: s.inputSearch }}
          type={'search'}
          value={value ?? ''}
        />
      )}
      <Cards
        cards={cards?.items}
        deckId={deckId ?? ''}
        isEmpty={isEmpty}
        isOwner={isOwner}
        onSort={changeSort}
        searchValue={value}
        sort={sort}
      />
      {cards?.items.length !== 0 && (
        <div className={s.pagination}>
          <Pagination
            count={cards?.pagination.totalPages ?? 0}
            onChange={page => changePage(page)}
            onPerPageChange={select => changeItemsPerPage(select)}
            page={page}
            perPage={JSON.stringify(itemsPerPage)}
            perPageOptions={SELECT_OPTIONS_PAGINATION.map(m => m.value)}
            siblings={1}
          />
        </div>
      )}
    </Page>
  )
}
