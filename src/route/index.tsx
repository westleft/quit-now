import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import IntroPage from '../pages/Intro'
import App from '../App'

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/intro', element: <IntroPage /> },
    ] 
  },
])

export default router
