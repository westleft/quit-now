import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LoginModal from './components/modals/Login'

function App() {
  return (
    <>
      <Outlet />
      <LoginModal />
      <ToastContainer />
    </>
  )
}

export default App
