import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ROUTES } from '@/common'
import { Page, ResetPassword } from '@/components'
import { RecoverPasswordArgs, useRecoverPasswordMutation } from '@/services'

export const ResetPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const resetPasswordHandler = async ({ email }: RecoverPasswordArgs) => {
    const payload = {
      email,
      // html: '<h1>Hi, ##name##</h1><p>Click <a href=`http://localhost:5173/create-password/##token##`>here</a> to reset your password</p>',
      html: `<h1>Hi, ##name##</h1><p>Click <a href="${window.location.origin}/create-password/##token##">here</a> to reset your password</p>`,
      subject: 'Password recovery',
    }

    try {
      await recoverPassword(payload).unwrap()
      navigate(ROUTES.checkEmail, { state: { email: email } })
    } catch (e: any) {
      toast.error(e?.data?.message ?? 'Some error occurred')
    }
  }

  return (
    <Page>
      <ResetPassword onSubmit={resetPasswordHandler} />
    </Page>
  )
}
