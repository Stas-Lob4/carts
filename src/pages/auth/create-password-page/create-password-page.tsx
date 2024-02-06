import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common'
import { CreatePassword, Page } from '@/components'
import { CreatePasswordFormValues } from '@/components/auth'
import { useResetPasswordMutation } from '@/services'

export const CreatePasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()

  const createPasswordHandler = async ({ password }: CreatePasswordFormValues) => {
    if (!token) {
      return
    }

    try {
      await resetPassword({ password, token }).unwrap()
      toast.success('Try to sign in with your new password')
      navigate(ROUTES.signIn)
    } catch (e: any) {
      toast.error(e?.data?.message ?? 'Some error occurred')
    }
  }

  return (
    <Page>
      <CreatePassword onSubmit={createPasswordHandler} />
    </Page>
  )
}
