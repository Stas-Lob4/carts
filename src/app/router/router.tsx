import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Decks } from '../decks/decks'

const publicRouter: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
  },
  {
    element: <Decks />,
    path: '/decks',
  },
]

const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const privateRouter: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/',
  },
]

const router = createBrowserRouter([
  ...publicRouter,
  { children: privateRouter, element: <PrivateRoutes /> },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
