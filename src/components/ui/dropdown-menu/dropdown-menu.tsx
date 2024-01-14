import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenuRoot = DropdownMenu.Root
const DropdownMenuTrigger = DropdownMenu.Trigger

const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>((props, ref) => {
  const { align = 'end', children, className, sideOffset = 12, ...rest } = props

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align={align}
        className={clsx(s.content, className)}
        ref={ref}
        sideOffset={sideOffset}
        {...rest}
      >
        <DropdownMenu.Arrow asChild>
          <div className={s.arrow} />
        </DropdownMenu.Arrow>
        <div className={s.itemsBox}>{children}</div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
})

DropdownMenuContent.displayName = DropdownMenu.Content.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...rest }, ref) => (
  <DropdownMenu.Item className={clsx(s.item, className)} ref={ref} {...rest} />
))

DropdownMenuItem.displayName = DropdownMenu.Item.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
>(({ className, ...rest }, ref) => (
  <DropdownMenu.Separator className={clsx(s.separator, className)} ref={ref} {...rest} />
))

DropdownMenuSeparator.displayName = DropdownMenu.Separator.displayName

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenu.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenu.Label>
>(({ className, ...rest }, ref) => (
  <DropdownMenu.Label className={clsx(s.label, className)} ref={ref} {...rest} />
))

DropdownMenuLabel.displayName = DropdownMenu.Label.displayName

export {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
