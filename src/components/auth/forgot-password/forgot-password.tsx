import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

import { Card, Typography } from '../../ui'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

const EmailSchema = z.object({
  email: z.string().min(1).email('Invalid email address'),
})

export type ForgotPasswordFormValues = z.infer<typeof EmailSchema>

type NewPasswordProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPasswordForm = (props: NewPasswordProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(EmailSchema),
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={s.form}>
          <TextField {...register('email')} errorMessage={errors.email?.message} label={'Email'} />
        </div>
        <Typography className={s.comment} variant={'body2'}>
          Enter your email address and we will send you further instructions to email
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Send Instructions
        </Button>
        <Typography className={s.caption} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={s.loginLink} to={'/sign-in'} variant={'h3'}>
          Try logging In
        </Typography>
      </form>
    </Card>
  )
}
