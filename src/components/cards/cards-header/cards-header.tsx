import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { Edit, Info, Play } from '@/assets'
import DeleteIcon from '@/assets/icons/deleteIcon'
import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  Typography,
} from '@/components'
import { CreateCardModal } from '@/components/modals/cards/create-card/create-card-modal'
import { UpdateItemModal } from '@/components/modals/decks/create-update-deck/updateModal'
import { DeleteItemModal } from '@/components/modals/decks/deleteItemModal/deleteItemModal'
import { Deck } from '@/services/decks'
import { clsx } from 'clsx'

import s from './cards-header.module.scss'

type CardsHeaderProps = {
  deck: Deck | undefined
  deckId: string
  isEmpty?: boolean
  isLoading: boolean
  isOwner: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const CardsHeader = (props: CardsHeaderProps) => {
  const { className, deck, deckId, isEmpty, isLoading, isOwner } = props
  const toLearnLink = `/decks/${deckId}/learn`

  const selectItemHandler = (e: Event) => e.preventDefault()

  const classNames = {
    deckImage: s.deckImage,
    header: clsx(s.header, className),
    headerLeft: s.headerLeft,
    headerWrapper: s.headerWrapper,
    iconTrigger: s.iconTrigger,
    title: s.title,
  }

  return (
    <div className={classNames.headerWrapper}>
      <div className={classNames.header}>
        <div className={classNames.headerLeft}>
          <Typography as={'h2'} className={classNames.title} variant={'large'}>
            {deck?.name}
          </Typography>
          {isOwner && deck && (
            <DropdownMenuRoot>
              <DropdownMenuTrigger className={s.trigger}>
                <Info className={classNames.iconTrigger} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {!isEmpty && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to={toLearnLink}>
                        <Button variant={'icon'}>
                          <Play />
                          Learn
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onSelect={selectItemHandler}>
                  {deck && (
                    <UpdateItemModal
                      buttonName={'Edit Pack'}
                      deck={deck}
                      modalTitle={'Edit Deck'}
                      trigger={
                        <Button variant={'icon'}>
                          <Edit />
                          Edit
                        </Button>
                      }
                    />
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={selectItemHandler}>
                  <DeleteItemModal
                    id={deck.id}
                    modalName={'Deck'}
                    title={deck.name}
                    trigger={
                      <Button variant={'icon'}>
                        <DeleteIcon />
                        Delete
                      </Button>
                    }
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuRoot>
          )}
        </div>
        {isOwner && !isEmpty && (
          <CreateCardModal
            deckId={deckId}
            trigger={<Button disabled={isLoading}>Add New Card</Button>}
          />
        )}
        {!isOwner &&
          !isEmpty &&
          (isLoading ? (
            <div>
              <Skeleton height={'36px'} width={'143px'} />
            </div>
          ) : (
            <Button as={Link} to={toLearnLink}>
              Learn to Pack
            </Button>
          ))}
      </div>
      {deck?.cover && <img alt={'Deck Cover'} className={classNames.deckImage} src={deck.cover} />}
    </div>
  )
}
