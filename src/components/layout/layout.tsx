import { Outlet, useOutletContext } from 'react-router-dom'

import { Header, Loader } from '@/components'
import { useGetMeQuery, useLogOutMutation } from '@/services'

import s from './layout.module.scss'

type AuthContext = {
  isAuth: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogOutMutation()
  const isAuth = !isError && !isLoading

  return (
    <>
      <Header isLoggedIn={isAuth} logout={logout} profile={data} />
      <main className={s.main}>
        {isLoading ? <Loader /> : <Outlet context={{ isAuth } satisfies AuthContext} />}
      </main>
    </>
  )
}
