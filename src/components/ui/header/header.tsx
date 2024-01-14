import logo from '@/assets/images/Logo.svg'
import { Button } from '@/components'
import { UserDropDown, UserDropDownProps } from '@/components/ui/header/user-dropdown/user-dropdown'

import s from './header.module.scss'

export type HeaderProps =
  | (Partial<UserDropDownProps> & {
      isLoggedIn: false
    })
  | (UserDropDownProps & {
      isLoggedIn: true
    })

export const Header = (props: HeaderProps) => {
  const { avatar, email, isLoggedIn, onLogout, userName } = props

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <a href={'#'}>
          <img alt={'it-incubator logo'} src={logo} />
        </a>

        {isLoggedIn && (
          <UserDropDown avatar={avatar} email={email} onLogout={onLogout} userName={userName} />
        )}

        {!isLoggedIn && (
          <Button as={'a'} href={'#'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
