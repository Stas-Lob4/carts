import { useForm } from 'react-hook-form'

import { CreatePasswordFormValues, createPasswordSchema } from '@/components/auth/lib'
import { zodResolver } from '@hookform/resolvers/zod'

export const useCreatePassword = () =>
  useForm<CreatePasswordFormValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(createPasswordSchema),
  })
