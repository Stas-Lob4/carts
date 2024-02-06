import { Slide, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Toast = () => {
  return (
    <ToastContainer
      autoClose={3000}
      closeOnClick
      draggable
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnFocusLoss={false}
      pauseOnHover
      position={'bottom-right'}
      rtl={false}
      theme={'dark'}
      transition={Slide}
    />
  )
}
