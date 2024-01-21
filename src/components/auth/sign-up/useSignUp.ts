import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type SignUpFormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(3, 'The password must be at least 3 characters')
      .max(30, 'The password cannot be more than 30 characters'),
    passwordConfirmation: z
      .string()
      .min(3, 'The password must be at least 3 characters')
      .max(30, 'The password cannot be more than 30 characters'),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })

export const useSignUp = () =>
  useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(signUpSchema),
  })
