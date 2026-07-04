import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY.includes('your_clerk')) {
    return (
      <StrictMode>
        <App />
      </StrictMode>
    )
  }

  return (
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
