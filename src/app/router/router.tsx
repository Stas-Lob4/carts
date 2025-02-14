import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common'
import { Layout, useAuthContext } from '@/components'
import {
  CheckEmailPage,
  CreatePasswordPage,
  Deck,
  Decks,
  ErrorPage,
  Learn,
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
} from '@/pages'
import { Profile } from '@/pages/profile/profile'

const publicRouter: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.signIn,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.signUp,
  },
  {
    element: <ResetPasswordPage />,
    path: ROUTES.reset,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.checkEmail,
  },
  {
    element: <CreatePasswordPage />,
    path: ROUTES.createPassword,
  },
]

const PrivateRoutes = () => {
  const { isAuth } = useAuthContext()

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.signIn} />
}

const privateRouter: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.decks} />,
    path: ROUTES.base,
  },
  {
    element: <Decks />,
    path: ROUTES.decks,
  },
  {
    element: <Deck />,
    path: ROUTES.deck,
  },
  {
    element: <Profile />,
    path: ROUTES.profile,
  },
  {
    element: <Learn />,
    path: `${ROUTES.decks}/:id${ROUTES.learn}`,
  },
]

const router = createHashRouter([
  {
    children: [
      ...publicRouter,
      {
        children: privateRouter,
        element: <PrivateRoutes />,
      },
    ],
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: ROUTES.base,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
