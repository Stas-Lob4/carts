import {
  Column,
  Rating,
  Sort,
  TableBody,
  TableHeadCell,
  TableRow,
  TableSortHeader,
  Typography,
} from '@/components'
import { Card } from '@/services/carts/carts.types'
import { TableRoot } from '@radix-ui/themes'

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
  onSort: (key: Sort) => void
  sort: Sort
}
export const CardsTable = (props: CardsTableProps) => {
  const { cards, onSort, sort } = props

  return (
    <TableRoot>
      <TableSortHeader colums={colums} onSort={onSort} sort={sort} />
      <TableBody>
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableHeadCell col={'3'}>
              <Typography variant={'body2'}>{card.question}</Typography>
            </TableHeadCell>
            <TableHeadCell col={'3'}>{card.answer}</TableHeadCell>
            <TableHeadCell col={'3'}>
              {new Date(card.updated).toLocaleDateString('ru-Ru')}
            </TableHeadCell>
            <TableHeadCell col={'2'}>
              <Rating rating={card.grade} />
            </TableHeadCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  )
}
