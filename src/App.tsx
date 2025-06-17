import { Outlet } from 'react-router-dom'
import LoginModal from './components/modals/Login'

function App() {
  return (
    <>
      <Outlet />
      <LoginModal />
    </>
  )
}

export default App
