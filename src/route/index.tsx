import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import AboutPage from '../pages/About'
import CompanyPage from '../pages/Company'
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
      { path: '/company', element: <CompanyPage /> },
      { path: '/company/:id', element: <ReasonsPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
])

export default router
