import { Link } from 'react-router-dom'

import { ROUTES } from '@/common'
import { Button, Card, ControlledTextField, Typography } from '@/components'
import { ResetPasswordFormValues, useResetPassword } from '@/components/auth/lib'

import s from './reset-password.module.scss'

type Props = {
  onSubmit: (data: ResetPasswordFormValues) => void
}

export const ResetPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useResetPassword()

  const submitHandler = handleSubmit(onSubmit)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={submitHandler}>
        <div className={s.form}>
          <ControlledTextField
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
          />
        </div>
        <Typography className={s.comment} variant={'body2'}>
          Enter your email address and we will send you further instructions to email
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={Link} className={s.loginLink} to={ROUTES.signIn} variant={'h3'}>
        Try logging In
      </Typography>
    </Card>
  )
}
