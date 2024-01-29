import { Link } from 'react-router-dom'

import { Email } from '@/assets'
import { ROUTES } from '@/common'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

type Props = {
  userEmail: string
}

export const CheckEmail = ({ userEmail }: Props) => {
  return (
    <Card className={s.card}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.info}>
        <Email />
        <Typography variant={'body2'}>
          We’ve sent an Email with instructions <br /> to {userEmail}
        </Typography>
      </div>
      <Button as={Link} fullWidth to={ROUTES.signIn}>
        Back to Sign In
      </Button>
    </Card>
  )
}
