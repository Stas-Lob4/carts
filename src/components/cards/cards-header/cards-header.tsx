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
  Typography,
} from '@/components'
import { Deck } from '@/services/deck'
import { clsx } from 'clsx'

import s from './cards-header.module.scss'

type CardsHeaderProps = {
  deck: Deck | undefined
  deckId: string
  isEmpty?: boolean
  isOwner: boolean
  setCreateMode: (createModule: boolean) => void
  setDeleteMode: (editDeckMode: boolean) => void
  setEditMode: (editDeckMode: boolean) => void
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const CardsHeader = (props: CardsHeaderProps) => {
  const { className, deck, deckId, isEmpty, isOwner, setCreateMode, setDeleteMode, setEditMode } =
    props
  const toLearnLink = `/decks/${deckId}/learn`

  const classNames = {
    deckImage: s.deckImage,
    header: clsx(s.header, className),
    headerLeft: s.headerLeft,
    headerWrapper: s.headerWrapper,
    iconTrigger: s.trigger,
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
                {isOwner && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to={toLearnLink}>
                        <DropdownBasicItemContent icon={<Play />} name={'Learn'} />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onSelect={() => setEditMode(true)}>
                  <DropdownBasicItemContent icon={<Edit />} name={'Edit'} />
                </DropdownMenuItem>
              </DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setDeleteMode(true)}>
                <DropdownBasicItemContent icon={<Trash />} name={'Delete'} />
              </DropdownMenuItem>
            </DropdownMenuRoot>
          )}
        </div>
        {isOwner && !isEmpty && <Button onClick={() => setCreateMode(true)}>Add new card</Button>}
        {isOwner && !isEmpty && (
          <Button as={Link} to={toLearnLink}>
            Learn to Pack
          </Button>
        )}
      </div>
      {deck?.cover && <img alt={'Deck Cover'} className={classNames.deckImage} src={deck.cover} />}
    </div>
  )
}
