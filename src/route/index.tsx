import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import IntroPage from '../pages/Intro'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/intro', element: <IntroPage /> },
])

export default router
