import { useState } from 'react'

import DeleteIcon from '@/assets/icons/deleteIcon'
import { Button, Header, Slider, TabSwitcher, TabType, TextField, Typography } from '@/components'
import { Pagination } from '@/components/ui/pagination/pagination'

import s from './decks.module.scss'

import { AddNewDeck } from './addNewDeck/addNewDeck'
import { AllCards } from './allDecks/allDecks'
import { MyCards } from './myDecks/myDecks'

const tabs: TabType[] = [
  { disabled: false, title: 'My Cards', value: '1' },
  { disabled: false, title: 'All Cards', value: '2' },
]

export const Decks = () => {
  const [value, setValue] = useState<number[]>([0, 10])
  const [page, setPage] = useState(1)
  const [select, setSelect] = useState<string>('3')
  const [tabValue, setTabValue] = useState<string | undefined>()

  const onValueChangeHandler = (newValue: number[]) => {
    setValue(newValue)
  }

  const changeTabValue = (value: string) => {
    setTabValue(value)
  }

  const clearFilterHandler = () => {
    setTabValue('2')
    setValue([0, 60])
  }

  return (
    <div className={s.body}>
      <header className={s.header}>
        <Header
          email={'pasha@google.com'}
          isLoggedIn
          onLogout={() => {
            alert('loggggin ouut')
          }}
          userName={'Pasha'}
        />
      </header>
      <div className={s.allSettings}>
        <div className={s.topItems}>
          <div className={s.title}>
            <Typography variant={'large'}>Decks list</Typography>
          </div>
          <span className={s.addButton}>
            <AddNewDeck />
          </span>
        </div>
        <div className={s.cardsParameters}>
          <span className={s.input}>
            <TextField
              placeholder={'       Input search'}
              style={{ width: '288px' }}
              type={'search'}
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
              onValueChange={onValueChangeHandler}
              style={{ width: '148px' }}
              value={value}
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

      {tabValue === '1' ? (
        <MyCards cardsCountRange={value} page={page} perPage={select} />
      ) : (
        <AllCards cardsCountRange={value} page={page} perPage={select} />
      )}
      <div className={s.pagination}>
        <Pagination
          count={30}
          onChange={page => {
            setPage(page)
          }}
          onPerPageChange={(select: string) => setSelect(select)}
          page={page}
          perPage={select}
          perPageOptions={['3', '5', '7', '10']}
          siblings={1}
        />
      </div>
    </div>
  )
}
