import { useForm } from 'react-hook-form'

import { Button, Card, TextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-password.module.scss'

const newPasswordSchema = z.object({
  password: z.string().min(3).max(30),
})

type FormValues = z.infer<typeof newPasswordSchema>

type NewPasswordProps = {
  onSubmit: (data: FormValues) => void
}

export const CreatePasswordForm = (props: NewPasswordProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
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
