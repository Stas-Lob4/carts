import { Outlet } from 'react-router-dom'

import { Header, Loader } from '@/components'
import { useGetMeQuery, useLogOutMutation } from '@/services'

import s from './layout.module.scss'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogOutMutation()
  const isAuth = !isError

  return (
    <>
      <Header isLoggedIn={isAuth} logout={logout} profile={data} />
      <main className={s.main}>{isLoading ? <Loader /> : <Outlet context={{ isAuth }} />}</main>
    </>
  )
}
