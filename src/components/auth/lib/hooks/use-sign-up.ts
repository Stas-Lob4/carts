import { useForm } from 'react-hook-form'

import { SignUpFormValues, signUpSchema } from '@/components/auth/lib'
import { zodResolver } from '@hookform/resolvers/zod'

export const useSignUp = () =>
  useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(signUpSchema),
  })
