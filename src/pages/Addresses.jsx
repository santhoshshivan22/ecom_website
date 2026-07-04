import { MapPin, Plus, Edit, Trash2 } from 'lucide-react'

const ADDRESSES = [
  { id: 1, name: 'John Doe', street: '123 Main St', city: 'New York', state: 'NY', zip: '10001', country: 'USA', isDefault: true },
  { id: 2, name: 'John Doe', street: '456 Oak Ave', city: 'Los Angeles', state: 'CA', zip: '90001', country: 'USA', isDefault: false },
]

export default function Addresses() {
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
          marginBottom: '2rem',
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#0f172a',
              fontFamily: 'var(--font-serif)',
              marginBottom: '0.25rem',
            }}>Address Book</h1>
            <p style={{ color: '#64748b' }}>Manage your delivery addresses</p>
          </div>
          <button style={{
            padding: '0.75rem 1.25rem',
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '14px',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            transition: 'transform 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <Plus size={16} />
            Add Address
          </button>
        </div>

        {ADDRESSES.length === 0 ? (
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(124, 58, 237, 0.1)',
            textAlign: 'center',
          }}>
            <MapPin size={64} color="#64748b" style={{ opacity: 0.3, marginBottom: '1.5rem' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#0f172a',
              marginBottom: '0.5rem',
            }}>No addresses saved</h3>
            <p style={{ color: '#64748b' }}>Add a delivery address to speed up checkout.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ADDRESSES.map((addr) => (
              <div key={addr.id} style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                transition: 'transform 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', flex: 1 }}>
                    <MapPin size={20} color="#7c3aed" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '1rem' }}>
                          {addr.name}
                        </p>
                        {addr.isDefault && (
                          <span style={{
                            fontSize: '0.75rem',
                            color: '#7c3aed',
                            background: 'rgba(124, 58, 237, 0.1)',
                            padding: '0.125rem 0.5rem',
                            borderRadius: '20px',
                            fontWeight: '500',
                          }}>
                            Default
                          </span>
                        )}
                      </div>
                      <p style={{ color: '#334155', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{addr.street}</p>
                      <p style={{ color: '#334155', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                        {addr.city}, {addr.state} {addr.zip}
                      </p>
                      <p style={{ color: '#334155', fontSize: '0.9rem' }}>{addr.country}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      style={{
                        padding: '0.5rem',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        background: 'rgba(124, 58, 237, 0.05)',
                        color: '#7c3aed',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      title="Edit address"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      style={{
                        padding: '0.5rem',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        background: 'rgba(239, 68, 68, 0.05)',
                        color: '#ef4444',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      title="Delete address"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}