import { createContext, useContext } from 'react'
import useAuthStore from '../stores/useAuthStore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const { user, isAuthenticated, setAuth, logout } = useAuthStore()

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)