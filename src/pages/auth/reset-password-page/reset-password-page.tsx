import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PASSWORD_RESET_EMAIL_TEMPLATE, ROUTES } from '@/common'
import { Page, ResetPassword } from '@/components'
import { RecoverPasswordArgs, useRecoverPasswordMutation } from '@/services'

export const ResetPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const resetPasswordHandler = async ({ email }: RecoverPasswordArgs) => {
    const payload = {
      email,
      html: PASSWORD_RESET_EMAIL_TEMPLATE,
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
