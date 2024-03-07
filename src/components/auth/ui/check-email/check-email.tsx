import { Link } from 'react-router-dom'

import { Email } from '@/assets'
import { ROUTES } from '@/common'
import { Button, Card, Typography } from '@/components'

import s from './check-email.module.scss'

type Props = {
  email?: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.card}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.info}>
        <Email />
        <Typography variant={'body2'}>
          We’ve sent an email with instructions <br /> to {email}
        </Typography>
      </div>
      <Button as={Link} fullWidth to={ROUTES.signIn}>
        Back to Sign In
      </Button>
    </Card>
  )
}
