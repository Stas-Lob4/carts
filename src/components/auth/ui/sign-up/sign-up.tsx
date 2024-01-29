import { Link } from 'react-router-dom'

import { ROUTES } from '@/common'
import { Button, Card, ControlledTextField, Typography } from '@/components'
import { SignUpFormValues, useSignUp } from '@/components/auth/lib'

import s from './sign-up.module.scss'

type Props = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUp = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignUp()

  const submitHandler = handleSubmit(onSubmit)

  return (
    <Card className={s.card}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={submitHandler}>
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.passwordConfirmation?.message}
          label={'Confirm Password'}
          name={'passwordConfirmation'}
          type={'password'}
        />

        <Button fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>

      <div className={s.signIn}>
        <Typography variant={'body2'}>Already have an account?</Typography>
        <Typography as={Link} className={s.signInLink} to={ROUTES.signIn} variant={'h3'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}
