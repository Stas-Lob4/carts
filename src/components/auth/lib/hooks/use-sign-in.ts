import { useForm } from 'react-hook-form'

import { SignInFormValues, signInSchema } from '@/components/auth'
import { zodResolver } from '@hookform/resolvers/zod'

export const useSignIn = () =>
  useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })
