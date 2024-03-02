import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import DeleteIcon from '@/assets/icons/deleteIcon'
import { SELECT_OPTIONS_PAGINATION } from '@/common'
import { useDebounce } from '@/common/hooks/use-debounce'
import { useDecksSearchParams } from '@/common/hooks/use-decks-search-params'
import {
  Button,
  Loader,
  Page,
  Slider,
  TabSwitcher,
  TabType,
  TextField,
  Typography,
} from '@/components'
import { Pagination } from '@/components/ui/pagination/pagination'
import { useGetMeQuery } from '@/services'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks'

import s from './decks.module.scss'

import { DecksTable } from './DecksTable/DecksTable'
import { CreateItemModal } from './createUpdateModals/createItemModal'

const tabs: TabType[] = [
  { disabled: false, title: 'My Cards', value: '1' },
  { disabled: false, title: 'All Cards', value: '2' },
]

export const Decks = () => {
  const {
    changeItemsPerPage,
    changeMinMaxCard,
    changePage,
    changeSort,
    itemsPerPage,
    maxCards,
    minCards,
    page,
    rangeValue,
    sort,
    //value,
  } = useDecksSearchParams()
  const { data: me } = useGetMeQuery()
  const currentUserId = me?.id

  const [tabValue, setTabValue] = useState<string | undefined>()

  const authorId = tabValue === '1' ? currentUserId : undefined

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { data: response, isLoading } = useGetDecksQuery({
    authorId,
    currentPage: page,
    itemsPerPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: debouncedSearch,
    orderBy: sort ? `${sort?.key}-${sort?.direction}` : null,
  })

  const [deleteDeckMutation] = useDeleteDeckMutation()
  const [createDeck] = useCreateDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const DeleteDeckCallback = (id: string) => {
    deleteDeckMutation({ id })
  }

  const updateDeckCallback = (id: string, data: FormData) => {
    updateDeck({ data, id })
  }

  const createDeckCallback = (data: FormData) => {
    createDeck(data)
  }

  const totalCount = response?.pagination.totalPages

  const decks = response?.items

  const totalPageCount = totalCount ?? 1

  const changeTabValue = (value: string) => {
    setTabValue(value)
  }

  const clearFilterHandler = () => {
    setTabValue('2')
    changeMinMaxCard([0, 60])
  }
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }, [tabValue])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Page>
      <div className={s.allSettings}>
        <div className={s.topItems}>
          <div className={s.title}>
            <Typography variant={'large'}>Decks list</Typography>
          </div>
          <span className={s.addButton}>
            <CreateItemModal
              buttonName={'Add New Pack'}
              callback={createDeckCallback}
              modalTitle={'Add New Deck'}
              trigger={<Button>Add New Deck</Button>}
            />
          </span>
        </div>
        <div className={s.cardsParameters}>
          <span className={s.input}>
            <TextField
              onChangeValue={setSearch}
              placeholder={'Input search'}
              style={{ width: '288px' }}
              type={'search'}
              value={search}
            />{' '}
          </span>
          <span className={s.tabSwitcher}>
            <Typography className={s.caption} variant={'body2'}>
              Show decks cards
            </Typography>
            <TabSwitcher
              defaultValue={'2'}
              onValueChange={changeTabValue}
              tabs={tabs}
              value={tabValue}
            />
          </span>
          <span>
            <Typography className={s.caption} variant={'body2'}>
              Number of cards
            </Typography>
            <Slider
              max={60}
              onValueChange={changeMinMaxCard}
              style={{ width: '148px' }}
              value={rangeValue}
            />
          </span>
          <span className={s.deleteButton}>
            <Button onClick={clearFilterHandler} variant={'secondary'}>
              <DeleteIcon />
              <Typography variant={'subtitle2'}>Clear Filter</Typography>
            </Button>
          </span>
        </div>
      </div>

      <DecksTable
        currentUserId={me?.id}
        decks={decks}
        onDeleteClick={DeleteDeckCallback}
        onEditClick={updateDeckCallback}
        onSort={changeSort}
        sort={sort}
      />
      <div className={s.pagination}>
        {decks?.length !== 0 && (
          <Pagination
            count={totalPageCount}
            onChange={page => {
              changePage(page)
            }}
            onPerPageChange={(select: string) => changeItemsPerPage(select)}
            page={page}
            perPage={JSON.stringify(itemsPerPage)}
            perPageOptions={SELECT_OPTIONS_PAGINATION.map(m => m.value)}
            siblings={1}
          />
        )}
      </div>
    </Page>
  )
}
