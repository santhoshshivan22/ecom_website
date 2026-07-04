import { Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MOCK_ORDERS } from '../utils/constants'
import { formatDate, formatPrice } from '../utils/formatters'
import Badge from '../components/ui/Badge'

export default function Orders() {
  return (
    <div style={{
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)',
      minHeight: 'calc(100vh - 200px)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0f172a',
            fontFamily: 'var(--font-serif)',
            marginBottom: '0.25rem',
          }}>Order History</h1>
          <p style={{ color: '#64748b' }}>Track and review your past orders</p>
        </div>

        {MOCK_ORDERS.length === 0 ? (
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(124, 58, 237, 0.1)',
            textAlign: 'center',
          }}>
            <Package size={64} color="#64748b" style={{ opacity: 0.3, marginBottom: '1.5rem' }} />
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#0f172a',
              marginBottom: '0.5rem',
            }}>No orders yet</h3>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Your order history will appear here once you place an order.</p>
            <Link to="/shop">
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'transform 0.2s',
              }}>
                Start Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                transition: 'transform 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Package size={24} color="#7c3aed" />
                    </div>
                    <div>
                      <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '1rem' }}>{order.id}</p>
                      <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                        Placed on {formatDate(order.date)} · {order.items} items
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{
                      fontWeight: '700',
                      color: '#0f172a',
                      fontSize: '1.125rem',
                      fontFamily: 'var(--font-serif)',
                    }}>{formatPrice(order.total)}</p>
                    <Badge
                      variant={order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'primary' : 'warning'}
                      style={{ marginTop: '0.25rem' }}
                    >
                      {order.status}
                    </Badge>
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