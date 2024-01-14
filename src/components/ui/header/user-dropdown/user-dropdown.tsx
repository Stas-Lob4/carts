import { ComponentPropsWithoutRef } from 'react'

import { Logout, PersonOutline, PlayCircleOutline } from '@/assets'
import {
  Avatar,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '@/components'

import s from './user-dropdown.module.scss'

export type UserDropDownProps = {
  avatar?: string
  email: string
  onLogout: ComponentPropsWithoutRef<typeof DropdownMenuItem>['onSelect']
  userName: string
}
export const UserDropDown = (props: UserDropDownProps) => {
  const { avatar, email, onLogout, userName } = props

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <button className={s.trigger}>
          <Typography className={s.userName} variant={'subtitle1'}>
            {userName}
          </Typography>
          <Avatar src={avatar} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Avatar src={avatar} />
          <div>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <PlayCircleOutline />
          Learn
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PersonOutline />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>
          <Logout />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
}
