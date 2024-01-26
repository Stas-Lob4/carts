import { Provider } from 'react-redux'

import { Router } from '@/app/router'
import { store } from '@/services'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
