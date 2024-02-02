import { useSelector } from 'react-redux'

import DeleteIcon from '@/assets/icons/deleteIcon'
import EditIcon from '@/assets/icons/editIcon'
import PlayCircleOutline from '@/assets/icons/playCircleOutline'
import {
  Button,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@/components'
import { RootState } from '@/services'

import s from '../decks.module.scss'

import { DeckType } from '../decks-reducer'
import { DeleteDeck } from '../deleteDeck/deleteDeck'

type AllCardsProps = {
  cardsCountRange: number[]
  page: number
  perPage: string
}

export const MyCards = (props: AllCardsProps) => {
  const decks = useSelector<RootState, DeckType[]>(state => state.decks.decks)

  const firstItem = +props.perPage * props.page - (+props.perPage - 1) - 1
  const lastItem = +props.perPage * props.page

  return (
    <Table className={s.table}>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Name</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Cards</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Last Updated</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Created By</Typography>
          </TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {decks
          .filter(
            el =>
              el.cardsCount >= props.cardsCountRange[0] && el.cardsCount <= props.cardsCountRange[1]
          )
          .slice(firstItem, lastItem)
          .map(item => (
            <TableRow className={s.tableDataRow} key={item.id}>
              <TableDataCell className={s.deckInfo}>
                {item.image && <img src={item.image} style={{ height: '60px', width: '60px' }} />}
                <Typography
                  as={'a'}
                  className={s.deckName}
                  href={'https://google.com'}
                  variant={'body2'}
                >
                  {item.title}{' '}
                </Typography>
              </TableDataCell>
              <TableDataCell>{item.cardsCount}</TableDataCell>
              <TableDataCell>{item.updated}</TableDataCell>
              <TableDataCell>{item.createdBy}</TableDataCell>
              <TableDataCell>
                <Button variant={'link'}>
                  <PlayCircleOutline style={{ height: '20px', width: '20px' }} />
                </Button>
                <Button variant={'link'}>
                  <EditIcon />
                </Button>
                <DeleteDeck />
              </TableDataCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
