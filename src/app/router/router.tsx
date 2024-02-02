import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

const publicRouter: RouteObject[] = [
  {
    element: <div>Sign-in</div>,
    path: ROUTES.signIn,
  },
  {
    element: <Decks />,
    path: '/decks',
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
    path: ROUTES.base,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
