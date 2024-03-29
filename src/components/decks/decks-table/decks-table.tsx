import { Link } from 'react-router-dom'

import { PlayCircleOutline } from '@/assets'
import DeleteIcon from '@/assets/icons/deleteIcon'
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
import { DeleteDeckModal, EditDeckModal } from '@/components/modals/decks'
import { Deck } from '@/services/decks'

import s from './decks-table.module.scss'

import defaultImage from '../../../assets/images/default-image-79ca681b.jpg'

const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
    width: '322px',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    width: '102px',
  },
  {
    key: 'updated',
    title: 'Last Updated',
    width: '132px',
  },
  {
    key: 'author',
    title: 'Created By',
    width: '150px',
  },
  {
    key: 'actions',
    title: '',
    width: '80px',
  },
]

type Props = {
  currentUserId: string | undefined
  decks: Deck[] | undefined
  onSort: (key: Sort) => void
  sort: Sort
}

export const DecksTable = ({ currentUserId, decks, onSort, sort }: Props) => {
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
              <img
                alt={`Image Deck: ${deck.name}`}
                src={deck.cover ? deck.cover : defaultImage}
                style={{ height: '50px', objectFit: 'cover', width: '70px' }}
              />
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
                <Button
                  as={deck.cardsCount > 0 && Link}
                  disabled={deck.cardsCount === 0}
                  to={`${deck.id}/learn`}
                  variant={'icon'}
                >
                  <PlayCircleOutline />
                </Button>
                {deck.author.id === currentUserId && (
                  <>
                    <EditDeckModal deck={deck} trigger={<EditIcon />} />
                    <DeleteDeckModal deck={deck} trigger={<DeleteIcon />} />
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
