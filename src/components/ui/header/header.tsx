import logo from '@/assets/images/Logo.svg'
import userAva from '@/assets/images/userAva.svg'
import { Button } from '@/components'

import s from './header.module.scss'

export type CardProps = {
  isLoggedIn: boolean
  userAvatar?: string
  userName?: string
}

export const Header = (props: CardProps) => {
  const { isLoggedIn, userName = 'Ivan' } = props

  return (
    <header className={s.header}>
      <img alt={'it-incubator logo'} src={logo} />

      {isLoggedIn ? (
        <div className={s.userData}>
          <span>{userName}</span>
          <img alt={'user avatar'} src={userAva} />
        </div>
      ) : (
        <Button variant={'primary'}>Sign In</Button>
      )}
    </header>
  )
}
