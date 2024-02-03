import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ROUTES } from '@/common'
import { Layout } from '@/components'
import { ErrorPage } from '@/pages'

const publicRouter: RouteObject[] = [
  {
    element: <div>Sign-in</div>,
    path: ROUTES.signIn,
  },
]

const PrivateRoutes = () => {
  const { isAuthenticated } = { isAuthenticated: true }

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.signIn} />
}

const privateRouter: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.decks} />,
    path: ROUTES.base,
  },
  {
    element: <div>Deck</div>,
    path: ROUTES.decks,
  },
]

const router = createBrowserRouter([
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
