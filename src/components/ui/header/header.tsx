import logo from '@/assets/images/Logo.svg'
import { Button, Typography } from '@/components'
import { Avatar } from '@/components/ui/header/avatar'

import s from './header.module.scss'

export type HeaderProps = {
  isLoggedIn: boolean
  userAvatar?: string
  userName?: string
}

export const Header = (props: HeaderProps) => {
  const { isLoggedIn, userAvatar, userName } = props

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <a href={'#'}>
          <img alt={'it-incubator logo'} src={logo} />
        </a>

        {isLoggedIn && (
          <div className={s.user}>
            <Typography className={s.userName} variant={'subtitle1'}>
              {userName}
            </Typography>
            {/*there will be DropDown component later for in Avatar*/}
            <Avatar name={userName} src={userAvatar} />
          </div>
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
