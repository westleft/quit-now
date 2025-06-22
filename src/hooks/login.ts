import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLoginStatusStore from '../store/loginStatus'

export function useLogin() {
  const navigate = useNavigate()
  const { setIsLoggedIn, isLoading, isLoggedIn } = useLoginStatusStore()

  useEffect(() => {
    setIsLoggedIn()
  }, [])

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoading])
}
