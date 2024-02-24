export const ROUTES = {
  base: '/',
  checkEmail: '/check-email',
  createPassword: '/create-password/:token',
  deck: '/decks/:deckId',
  decks: '/decks',
  learn: '/learn',
  profile: '/profile',
  reset: '/reset-password',
  signIn: '/sign-in',
  signUp: '/sign-up',
} as const
