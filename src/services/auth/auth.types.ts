export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LogInArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type ResendCheckEmailArgs = {
  html?: string
  subject?: string
  userId: string
}

export type RecoverPasswordArgs = Pick<SignUpArgs, 'email' | 'html' | 'subject'>
