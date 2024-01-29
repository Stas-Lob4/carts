import { Link } from 'react-router-dom'

import { ROUTES } from '@/common'
import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { SignInFormValues, useSignIn } from '@/components/auth/lib'

import s from './sign-in.module.scss'

type Props = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignIn = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignIn()

  const submitHandler = handleSubmit(onSubmit)

  return (
    <Card className={s.card}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign In
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
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography as={Link} to={'/reset-password'} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>

      <div className={s.signUp}>
        <Typography variant={'body2'}>Don&apos;t have an account?</Typography>

        <Typography as={Link} className={s.signUpLink} to={ROUTES.signUp} variant={'h3'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
