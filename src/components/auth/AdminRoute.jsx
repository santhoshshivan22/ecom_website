import { Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const ADMIN_EMAIL = 'santhoshshivansasi@gmail.com'

export default function AdminRoute({ children }) {
  const { user, isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        <p style={{ color: '#64748b' }}>Loading...</p>
      </div>
    )
  }

  if (!isSignedIn || !user || user.primaryEmailAddress?.emailAddress !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />
  }

  return children
}
