import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react'
import { formatPrice } from '../utils/formatters'
import useWishlistStore from '../stores/useWishlistStore'
import useCartStore from '../stores/useCartStore'

export default function Wishlist() {
  const items = useWishlistStore((s) => s.items)
  const toggleItem = useWishlistStore((s) => s.toggleItem)
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div style={{
      padding: '2rem 1rem',
      background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)',
      minHeight: 'calc(100vh - 200px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0f172a',
            fontFamily: 'var(--font-serif)',
            marginBottom: '0.25rem',
          }}>My Wishlist</h1>
          <p style={{ color: '#64748b' }}>Items you've saved for later ({items.length})</p>
        </div>

        {items.length === 0 ? (
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(124, 58, 237, 0.1)',
            textAlign: 'center',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: 'rgba(124, 58, 237, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Heart size={40} color="#7c3aed" />
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#0f172a',
              marginBottom: '0.5rem',
            }}>Your wishlist is empty</h3>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Save items you love by clicking the heart icon on any product.</p>
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
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}>
            {items.map((product) => {
              const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0
              return (
                <div key={product.slug} style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '20px',
                  border: '1px solid rgba(124, 58, 237, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                      }}
                    />
                    {discount > 0 && (
                      <span style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        borderRadius: '20px',
                      }}>
                        -{discount}%
                      </span>
                    )}
                    <button
                      onClick={() => toggleItem(product)}
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)',
                      }}
                      aria-label="Remove from wishlist"
                    >
                      <Heart size={16} fill="#ef4444" color="#ef4444" />
                    </button>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}>{product.category}</p>
                    <Link
                      to={`/product/${product.slug}`}
                      style={{
                        display: 'block',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#0f172a',
                        textDecoration: 'none',
                        marginBottom: '0.75rem',
                        fontFamily: 'var(--font-serif)',
                      }}
                    >
                      {product.name}
                    </Link>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                    }}>
                      <span style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        fontFamily: 'var(--font-serif)',
                      }}>{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span style={{
                          fontSize: '0.875rem',
                          color: '#64748b',
                          textDecoration: 'line-through',
                        }}>
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Link to={`/product/${product.slug}`} style={{ flex: 1, textDecoration: 'none' }}>
                        <button style={{
                          width: '100%',
                          padding: '0.625rem',
                          background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-sans)',
                          transition: 'transform 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                        }}>
                          View
                          <ArrowRight size={14} />
                        </button>
                      </Link>
                      <button
                        onClick={() => addItem(product)}
                        style={{
                          padding: '0.625rem',
                          border: '1px solid #e2e8f0',
                          background: 'white',
                          borderRadius: '12px',
                          cursor: 'pointer',
                        }}
                        title="Add to cart"
                      >
                        <ShoppingCart size={16} color="#64748b" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}