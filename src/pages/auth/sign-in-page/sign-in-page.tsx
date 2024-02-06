import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common'
import { Page, SignIn } from '@/components'
import { LogInArgs, useLogInMutation } from '@/services'

export const SignInPage = () => {
  const [login] = useLogInMutation()
  const navigate = useNavigate()

  const signInHandler = async (data: LogInArgs) => {
    try {
      await login(data).unwrap()
      toast.success('You have been successfully signed in')
      navigate(ROUTES.base)
    } catch (e: any) {
      toast.error(e?.data?.message ?? 'Some error occurred while signing in')
    }
  }

  return (
    <Page>
      <SignIn onSubmit={signInHandler} />
    </Page>
  )
}
