import { Header } from '@/components/ui/header'

export function App() {
  return (
    <div>
      <Header email={'email@gmail.com'} isLoggedIn onLogout={() => {}} userName={'Vasia'} />
    </div>
  )
}
