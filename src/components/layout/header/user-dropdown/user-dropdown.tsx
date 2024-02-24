import { Link, NavLink } from 'react-router-dom'

import { Logout, PersonOutline } from '@/assets'
import { ROUTES } from '@/common'
import {
  Avatar,
  DropdownBasicItemContent,
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
  logout: () => void
  userName: string
}
export const UserDropDown = (props: UserDropDownProps) => {
  const { avatar, email, logout, userName } = props

  return (
    <DropdownMenuRoot>
      <div className={s.navLinkBox}>
        <NavLink to={ROUTES.profile}>
          <Typography className={s.userName} variant={'subtitle1'}>
            {userName}
          </Typography>
        </NavLink>
        <DropdownMenuTrigger asChild>
          <button className={s.trigger}>
            <Avatar name={userName} src={avatar} />
          </button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Avatar name={userName} src={avatar} />
          <div>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to={ROUTES.profile}>
            <DropdownBasicItemContent icon={<PersonOutline />} name={'My Profile'} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={logout}>
          <DropdownBasicItemContent icon={<Logout />} name={'Sign out'} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
}
