import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common'
import { Page, SignUp } from '@/components'
import { SignUpArgs, useSignUpMutation } from '@/services'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const signUpHandler = async ({ email, password }: SignUpArgs) => {
    try {
      await signUp({ email, password }).unwrap()
      toast.success('Your account has been created successfully. You can sign in now')
      navigate(ROUTES.signIn)
    } catch (e: any) {
      toast.error(e?.data?.message ?? 'Some error occurred while signing up')
    }
  }

  return (
    <Page>
      <SignUp onSubmit={signUpHandler} />
    </Page>
  )
}
