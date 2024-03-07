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
import { DecksTable } from '@/components/decks/decks-table/DecksTable'
import { CreateDeckModal } from '@/components/modals/decks/create-edit-deck/createDeckModal'
import { Pagination } from '@/components/ui/pagination/pagination'
import { useGetMeQuery } from '@/services'
import { useGetDecksQuery } from '@/services/decks'

import s from './decks.module.scss'

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
          <div className={s.addButton}>
            <CreateDeckModal trigger={<Button>Add New Deck</Button>} />
          </div>
        </div>
        <div className={s.cardsParameters}>
          <div className={s.input}>
            <TextField
              onChangeValue={setSearch}
              placeholder={'Input search'}
              style={{ width: '288px' }}
              type={'search'}
              value={search}
            />{' '}
          </div>
          <div className={s.tabSwitcher}>
            <Typography className={s.caption} variant={'body2'}>
              Show decks cards
            </Typography>
            <TabSwitcher
              defaultValue={'2'}
              onValueChange={changeTabValue}
              tabs={tabs}
              value={tabValue}
            />
          </div>
          <div className={s.sliderBlock}>
            <Typography className={s.caption} variant={'body2'}>
              Number of cards
            </Typography>
            <Slider
              max={60}
              onValueChange={changeMinMaxCard}
              style={{ width: '148px' }}
              value={rangeValue}
            />
          </div>
          <div className={s.deleteButton}>
            <Button onClick={clearFilterHandler} variant={'secondary'}>
              <DeleteIcon />
              <Typography variant={'subtitle2'}>Clear Filter</Typography>
            </Button>
          </div>
        </div>
      </div>

      <DecksTable currentUserId={me?.id} decks={decks} onSort={changeSort} sort={sort} />
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
