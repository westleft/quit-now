import { create } from 'zustand'
import { supabase } from '../api'

interface LoginStatusState {
  isLoggedIn: boolean
  isLoading: boolean
  setIsLoggedIn: () => Promise<void>
  setIsLoggedOut: () => void
}

const useLoginStatusStore = create<LoginStatusState>(set => ({
  isLoggedIn: false,
  isLoading: true,
  setIsLoggedIn: async () => {
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
      }
      set({ isLoggedIn: !!data.session })
    }
    catch (error) {
      console.error(error)
    }
    finally {
      set({ isLoading: false })
    }
  },
  setIsLoggedOut: () => {
    set({ isLoggedIn: false })
  },
}))

export default useLoginStatusStore
