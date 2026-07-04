import { Link } from 'react-router-dom'
import { Package, Heart, MapPin, LogOut } from 'lucide-react'
import { useUser, useClerk } from '@clerk/clerk-react'

const MENU_ITEMS = [
  { label: 'Order History', to: '/account/orders', icon: Package, description: 'View your past orders' },
  { label: 'Wishlist', to: '/wishlist', icon: Heart, description: 'Saved items' },
  { label: 'Addresses', to: '/account/addresses', icon: MapPin, description: 'Manage shipping addresses' },
]

export default function Account() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <div style={{
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)',
      minHeight: 'calc(100vh - 200px)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0f172a',
              fontFamily: 'var(--font-serif)',
              marginBottom: '0.25rem',
            }}>My Account</h1>
            <p style={{ color: '#64748b' }}>Welcome back, {user?.fullName || 'User'}</p>
          </div>
          <button
            onClick={() => signOut()}
            style={{
              padding: '0.625rem 1.25rem',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              background: 'rgba(239, 68, 68, 0.05)',
              color: '#ef4444',
              borderRadius: '14px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}>
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(124, 58, 237, 0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <Icon size={32} color="#7c3aed" style={{ marginBottom: '1rem' }} />
                <h3 style={{
                  fontWeight: '600',
                  color: '#0f172a',
                  fontSize: '1.125rem',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-serif)',
                }}>{item.label}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>{item.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}