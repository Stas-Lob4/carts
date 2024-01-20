import { Logout } from '@/assets'
import EditIcon from '@/assets/icons/editIcon'
import { Button, Typography } from '@/components'

import s from './profile-info.module.scss'

type ProfileInfoProps = {
  activeEditMode: () => void
  email?: string
  logout: () => void
  username?: string
}
export const ProfileInfo = (props: ProfileInfoProps) => {
  const { activeEditMode, email, logout, username = '' } = props

  return (
    <>
      <div className={s.nameWithEditButton}>
        <Typography className={s.name} variant={'h1'}>
          {username}
        </Typography>
        <button className={s.editNameButton} onClick={activeEditMode}>
          <EditIcon />
        </button>
      </div>
      <Typography as={'span'} className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <div className={s.buttonContainer}>
        <Button onClick={logout} variant={'secondary'}>
          <Logout />
          Sign Out
        </Button>
      </div>
    </>
  )
}
