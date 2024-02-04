import { ArrowSort } from '@/assets'
import {
  Cols,
  Rating,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Typography,
} from '@/components'
import { Card } from '@/services/carts/carts.types'
import { clsx } from 'clsx'

import s from './cards-table.module.scss'

export type Column = {
  cols: Cols
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

const colums: Column[] = [
  {
    cols: '3',
    key: 'question',
    title: 'Question',
  },
  {
    cols: '3',
    key: 'answer',
    title: 'Answer',
  },
  {
    cols: '2',
    key: 'update',
    title: 'Last Update',
  },
  {
    cols: '2',
    key: 'grade',
    title: 'Grade',
  },
]

type CardsTableProps = {
  cards: Card[] | undefined
  isOwner?: boolean
  onSort: (key: Sort) => void
  setCardToDeleteId?: (id: string) => void
  setCardToEditId?: (id: string) => void
  sort: Sort
}
export const CardsTable = (props: CardsTableProps) => {
  const { cards, onSort, sort } = props

  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }
    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort?.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  const iconClass = clsx(s.sortArrow, sort?.direction === 'asc' ? s.asc : s.desc)

  return (
    <Table>
      <TableHead>
        <TableRow>
          {colums.map(({ cols, key, sortable = true, title }) => (
            <TableHeadCell
              className={s.align}
              col={cols}
              key={key}
              onClick={handleSort(key, sortable)}
            >
              {title}
              {sort && sort.key === key && (
                <span className={iconClass}>
                  <ArrowSort />
                </span>
              )}
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableDataCell>
              <Typography variant={'body2'}>{card.question}</Typography>
            </TableDataCell>
            <TableDataCell>{card.answer}</TableDataCell>
            <TableDataCell>{new Date(card.updated).toLocaleDateString('ru-Ru')}</TableDataCell>
            <TableDataCell>
              <Rating rating={card.grade} />
            </TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
