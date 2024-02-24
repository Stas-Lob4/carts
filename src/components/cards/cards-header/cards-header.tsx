import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { Edit, Info, Play, Trash } from '@/assets'
import {
  Button,
  DropdownBasicItemContent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  Typography,
} from '@/components'
import { CreateCardModals } from '@/components/modals/cards/create-card-modals/create-card-modals'
import { Deck } from '@/services/deck'
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
          {isOwner && (
            <DropdownMenuRoot>
              <DropdownMenuTrigger>
                <Button variant={'icon'}>
                  <Info className={classNames.iconTrigger} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {!isEmpty && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to={toLearnLink}>
                        <DropdownBasicItemContent icon={<Play />} name={'Learn'} />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onSelect={selectItemHandler}>
                  <DropdownBasicItemContent icon={<Edit />} name={'Edit'} />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={selectItemHandler}>
                  <DropdownBasicItemContent icon={<Trash />} name={'Delete'} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuRoot>
          )}
        </div>
        {isOwner && !isEmpty && (
          <CreateCardModals
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
