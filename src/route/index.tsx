import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/Home'
import IntroPage from '../pages/Intro'
import ReasonsPage from '../pages/Reasons'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/intro', element: <IntroPage /> },
      { path: '/reasons', element: <ReasonsPage /> },
    ],
  },
])

export default router
