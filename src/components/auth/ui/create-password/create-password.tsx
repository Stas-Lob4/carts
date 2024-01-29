import { Button, Card, ControlledTextField, Typography } from '@/components'
import { CreatePasswordFormValues, useCreatePassword } from '@/components/auth/lib'

import s from './create-password.module.scss'

type Props = {
  onSubmit: (data: CreatePasswordFormValues) => void
}

export const CreatePasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useCreatePassword()

  const submitHandler = handleSubmit(onSubmit)

  return (
    <Card className={s.card}>
      <form onSubmit={submitHandler}>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <Typography className={s.comment} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
