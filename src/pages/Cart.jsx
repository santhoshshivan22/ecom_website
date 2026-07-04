import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { formatPrice } from '../utils/formatters'
import useCartStore from '../stores/useCartStore'

const FREE_SHIPPING_THRESHOLD = 75 // INR thousands

export default function Cart() {
  const items = useCartStore((s) => s.items)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const subtotal = useCartStore((s) => s.subtotal())
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD * 1000 ? 0 : 199
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '400px',
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '24px',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(124, 58, 237, 0.1)',
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ShoppingBag size={60} color="white" strokeWidth={1.5} />
          </div>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#0f172a',
            fontFamily: 'var(--font-serif)',
            marginBottom: '0.75rem',
          }}>Your Cart is Empty</h2>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>Add items to your cart and they will appear here. Start exploring our collection!</p>
          <Link to="/shop">
            <button style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'var(--font-sans)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Start Shopping
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      padding: '2rem 1rem',
      background: '#f8f8fc',
      minHeight: 'calc(100vh - 200px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          color: '#0f172a',
          fontFamily: 'var(--font-serif)',
          marginBottom: '2rem',
        }}>Shopping Cart ({items.length})</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}>
          <style>{`
            @media (min-width: 1024px) {
              .cart-grid { grid-template-columns: 1fr 380px !important; }
            }
          `}</style>
          <div className="cart-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map((item) => (
                <div key={item.slug} style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.08)',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  transition: 'box-shadow 0.2s',
                }}>
                  <img src={item.image} alt={item.name} style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#0f172a',
                      marginBottom: '0.25rem',
                      fontFamily: 'var(--font-serif)',
                    }}>{item.name}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.75rem' }}>{item.brand}</p>
                    <p style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#7c3aed',
                    }}>{formatPrice(item.price)}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>
                      -
                    </button>
                    <span style={{
                      minWidth: '30px',
                      textAlign: 'center',
                      fontWeight: '600',
                      color: '#0f172a',
                    }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>
                      +
                    </button>
                    <button onClick={() => removeItem(item.slug)} style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: 'none',
                      background: 'rgba(239, 68, 68, 0.1)',
                      color: '#ef4444',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '0.5rem',
                      transition: 'all 0.2s',
                      flexShrink: 0,
                    }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(124, 58, 237, 0.08)',
              height: 'fit-content',
              position: 'sticky',
              top: '2rem',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0f172a',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
              }}>Order Summary</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontSize: '1rem' }}>Subtotal</span>
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>{formatPrice(subtotal)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontSize: '1rem' }}>Shipping</span>
                  <span style={{ fontWeight: '600', color: shipping === 0 ? '#22c55e' : '#0f172a' }}>
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Add {formatPrice(FREE_SHIPPING_THRESHOLD * 1000 - subtotal)} more for free shipping
                  </p>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderTop: '2px solid rgba(124, 58, 237, 0.1)',
                marginBottom: '1.5rem',
              }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', fontFamily: 'var(--font-serif)' }}>Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#7c3aed' }}>{formatPrice(total)}</span>
              </div>

              <Link to="/checkout">
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}>
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(124, 58, 237, 0.1)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Total</p>
          <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#7c3aed' }}>{formatPrice(total)}</p>
        </div>
        <Link to="/checkout">
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
            Checkout
          </button>
        </Link>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          div[style*="position: fixed"] { display: none !important; }
        }
        @media (max-width: 1023px) {
          div[style*="position: sticky"] { position: static !important; }
        }
      `}</style>
    </div>
  )
}