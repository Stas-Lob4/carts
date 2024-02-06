import { Provider } from 'react-redux'

import { Router } from '@/app/router'
import { Toast } from '@/components'
import { store } from '@/services'

export function App() {
  return (
    <Provider store={store}>
      <Toast />
      <Router />
    </Provider>
  )
}
