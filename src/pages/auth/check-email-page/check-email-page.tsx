import { useLocation } from 'react-router-dom'

import { CheckEmail, Page } from '@/components'

export const CheckEmailPage = () => {
  const {
    state: { email },
  } = useLocation()

  return (
    <Page>
      <CheckEmail email={email} />
    </Page>
  )
}
