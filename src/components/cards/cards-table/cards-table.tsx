import {
  Cols,
  Rating,
  Table,
  TableBody,
  TableDataCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { CardType } from '@/services/carts/carts.types'

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

const columns: Column[] = [
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
  cards: CardType[] | undefined
  isOwner?: boolean
  onSort: (key: Sort) => void
  setCardToDeleteId?: (id: string) => void
  setCardToEditId?: (id: string) => void
  sort: Sort
}
export const CardsTable = (props: CardsTableProps) => {
  const { cards, onSort, sort } = props

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
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
