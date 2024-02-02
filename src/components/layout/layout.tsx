import { Outlet } from 'react-router-dom'

import { Header } from '@/components'
import { useGetMeQuery, useLogoutMutation } from '@/services'

import s from './layout.module.scss'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const isAuth = !isError

  return (
    <>
      <Header isLoggedIn={isAuth} logout={logout} profile={data} />
      <main className={s.main}>
        {isLoading ? <div>Loading</div> : <Outlet context={{ isAuth }} />}
      </main>
    </>
  )
}
