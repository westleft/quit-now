import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import LoginModal from './components/modals/Login'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <LoginModal />
    </>
  )
}

export default App
