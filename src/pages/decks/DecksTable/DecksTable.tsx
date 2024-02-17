import { Link } from 'react-router-dom'

import { PlayCircleOutline } from '@/assets'
import EditIcon from '@/assets/icons/editIcon'
import {
  Button,
  Column,
  Sort,
  Table,
  TableBody,
  TableDataCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { Deck } from '@/services/deck'

import s from './decks-table.module.scss'

import defaultImage from '../../../assets/images/default-image-79ca681b.jpg'
import { UpdateItemModal } from '../createUpdateModals/updateModal'
import { DeleteItemModal } from '../deleteItemModal/deleteItemModal'

const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'author',
    title: 'Created By',
  },
  {
    key: 'actions',
    title: '',
  },
]

type Props = {
  currentUserId: string | undefined
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string, data: FormData) => void
  onSort: (key: Sort) => void
  sort: Sort
}

export const DecksTable = ({
  currentUserId,
  decks,
  onDeleteClick,
  onEditClick,
  onSort,
  sort,
}: Props) => {
  if (decks?.length === 0) {
    return <Typography className={s.noContent}>No content with these terms...</Typography>
  }

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {decks?.map(deck => (
          <TableRow key={deck.id}>
            <TableDataCell className={s.deckInfo}>
              {deck.cover ? (
                <img src={deck.cover} style={{ height: '50px', width: '70px' }} />
              ) : (
                <img src={defaultImage} style={{ height: '50px', width: '70px' }} />
              )}
              <Typography
                as={Link}
                className={s.deckName}
                to={`/decks/${deck.id}`}
                variant={'body2'}
              >
                {deck.name}
              </Typography>
            </TableDataCell>
            <TableDataCell>{deck.cardsCount}</TableDataCell>
            <TableDataCell>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</TableDataCell>
            <TableDataCell>{deck.author.name}</TableDataCell>
            <TableDataCell>
              <div className={s.iconsContainer}>
                <Button as={Link} to={`/decks/${deck.id}/learn`} variant={'icon'}>
                  <PlayCircleOutline />
                </Button>
                {deck.author.id === currentUserId && (
                  <>
                    <UpdateItemModal
                      buttonName={'Edit Pack'}
                      callback={onEditClick}
                      id={deck.id}
                      modalTitle={'Edit Deck'}
                      name={deck.name}
                      trigger={<EditIcon />}
                    />
                    <DeleteItemModal
                      deleteCallback={() => {
                        onDeleteClick(deck.id)
                      }}
                      id={deck.id}
                      modalName={'Deck'}
                      title={deck.name}
                    />
                  </>
                )}
              </div>
            </TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
