import { useForm } from 'react-hook-form'

import { ResetPasswordFormValues, resetPasswordSchema } from '@/components/auth/lib'
import { zodResolver } from '@hookform/resolvers/zod'

export const useResetPassword = () =>
  useForm<ResetPasswordFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(resetPasswordSchema),
  })
