import { Edit, Trash } from '@/assets'
import defaultImage from '@/assets/images/default-image-79ca681b.jpg'
import {
  Button,
  Cols,
  Rating,
  Table,
  TableBody,
  TableDataCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { DeleteCardModule, EditCardModal } from '@/components/modals'
import { CardType } from '@/services/cards/cards.types'

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
  sort: Sort
}
export const CardsTable = (props: CardsTableProps) => {
  const { cards, isOwner, onSort, sort } = props

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableDataCell>
              <div className={s.wrapper}>
                <img
                  alt={`Image Deck: ${card.question}`}
                  src={card.questionImg ? card.questionImg : defaultImage}
                  style={{ height: '50px', width: '70px' }}
                />
                <Typography variant={'body2'}>{card.question}</Typography>
              </div>
            </TableDataCell>
            <TableDataCell>
              <div className={s.wrapper}>
                <img
                  alt={`Image Deck: ${card.answer}`}
                  src={card.answerImg ? card.answerImg : defaultImage}
                  style={{ height: '50px', width: '70px' }}
                />
                {card.answer}
              </div>
            </TableDataCell>
            <TableDataCell>{new Date(card.updated).toLocaleDateString('ru-Ru')}</TableDataCell>
            <TableDataCell className={isOwner ? s.altTr : ''} col={'2'}>
              <div className={s.wrapperGrade}>
                <Rating rating={card.grade} />
                <div>
                  {isOwner && (
                    <div className={s.buttons}>
                      <EditCardModal
                        card={card}
                        trigger={
                          <Button variant={'icon'}>
                            <Edit />
                          </Button>
                        }
                      />
                      <DeleteCardModule
                        id={card.id}
                        name={card.question}
                        trigger={
                          <Button variant={'icon'}>
                            <Trash />
                          </Button>
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
