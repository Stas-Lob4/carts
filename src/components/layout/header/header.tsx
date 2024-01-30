import { Link } from 'react-router-dom'

import logo from '@/assets/images/Logo.svg'
import { ProfileData, ROUTES } from '@/common'
import { Button } from '@/components'

import s from './header.module.scss'

import { UserDropDown } from './user-dropdown'

export type HeaderProps = {
  isLoggedIn: boolean
  logout: () => void
  profile: ProfileData
}
export const Header = (props: HeaderProps) => {
  const { isLoggedIn, logout, profile } = props

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <Link to={ROUTES.base}>
          <img alt={'it-incubator logo'} src={logo} />
        </Link>

        {isLoggedIn && profile ? (
          <div className={s.trigger}>
            <UserDropDown
              avatar={profile?.avatar}
              email={profile?.email}
              logout={logout}
              userName={profile?.name}
            />
          </div>
        ) : (
          <Button as={'a'} href={'#'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}