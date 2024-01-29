import { z } from 'zod'

export type CreatePasswordFormValues = z.infer<typeof createPasswordSchema>
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
export type SignInFormValues = z.infer<typeof signInSchema>
export type SignUpFormValues = z.infer<typeof signUpSchema>

const passwordSchema = z
  .string()
  .min(1, 'Enter password')
  .min(3, 'The password must be at least 3 characters')
  .max(30, 'The password cannot be more than 30 characters')

const emailSchema = z.string().min(1, 'Enter email').email('Invalid email address')

export const createPasswordSchema = z.object({
  password: passwordSchema,
})

export const resetPasswordSchema = z.object({
  email: emailSchema,
})

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    passwordConfirmation: z
      .string()
      .min(1, 'Confirm the password')
      .min(3, 'The password must be at least 3 characters')
      .max(30, 'The password cannot be more than 30 characters'),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })
