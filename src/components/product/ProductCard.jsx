import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { formatPrice } from '../../utils/formatters'
import useCartStore from '../../stores/useCartStore'
import useWishlistStore from '../../stores/useWishlistStore'
import toast from 'react-hot-toast'

export default function ProductCard({ product, onQuickView, featured = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate()

  const addItem = useCartStore((s) => s.addItem)
  const toggleItem = useWishlistStore((s) => s.toggleItem)
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.slug))

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success(`${product.name} added to cart!`, {
      icon: '🛒',
      style: {
        background: '#7c3aed',
        color: 'white',
        fontWeight: '600'
      }
    })
  }

  const handleToggleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product)
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onQuickView) {
      onQuickView(product)
    } else {
      navigate(`/product/${product.slug}`)
    }
  }

  const handleImageClick = () => {
    navigate(`/product/${product.slug}`)
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        border: featured ? '1px solid rgba(124, 58, 237, 0.2)' : '1px solid rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(124, 58, 237, 0.1)' 
          : '0 4px 20px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', display: 'block', textDecoration: 'none' }} onClick={handleImageClick}>
        <div style={{
          position: 'relative',
          aspectRatio: '3 / 4',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f8f8fc 0%, #f1f0f5 100%)',
          cursor: 'pointer'
        }}>
          {!imageLoaded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f1f0f5, #e8e6ed)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid #e5e7eb',
                borderTopColor: '#7c3aed',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)'
              }} />
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              opacity: imageLoaded ? 1 : 0,
            }}
          />

          {/* Gradient Overlay */}
          {isHovered && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.05) 0%, transparent 50%)',
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease'
            }} />
          )}

          {/* Badges */}
          <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 3 }}>
            {discountPercentage && (
              <span style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '800',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                backdropFilter: 'blur(10px)',
              }}>
                -{discountPercentage}%
              </span>
            )}
            {product.isNew && (
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '800',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
              }}>
                NEW
              </span>
            )}
            {!product.inStock && (
              <span style={{
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '800',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(10px)',
              }}>
                SOLD OUT
              </span>
            )}
          </div>

          {/* Quick Actions Overlay */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
            transition: 'all 0.3s ease',
            zIndex: 3
          }}>
            <button
              onClick={handleToggleWishlist}
              type="button"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
              aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                size={16}
                style={{
                  color: isInWishlist ? '#dc2626' : '#1a1a2e',
                  fill: isInWishlist ? '#dc2626' : 'none',
                  transition: 'all 0.3s ease',
                  filter: isInWishlist ? 'drop-shadow(0 2px 4px rgba(220, 38, 38, 0.3))' : 'none'
                }}
              />
            </button>
            <button
              onClick={handleQuickView}
              type="button"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
              aria-label="Quick view"
            >
              <Eye size={16} style={{ color: '#1a1a2e' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '20px',
        gap: '10px',
        background: 'rgba(255, 255, 255, 0.98)',
      }}>
        {/* Brand */}
        <span style={{
          fontSize: '0.7rem',
          color: '#7c3aed',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontFamily: 'var(--font-sans)'
        }}>
          {product.brand || product.category}
        </span>

        {/* Product Name */}
        <Link to={`/product/${product.slug}`} style={{
          fontSize: '1rem',
          fontWeight: '700',
          color: '#0f172a',
          textDecoration: 'none',
          lineHeight: 1.4,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          transition: 'color 0.3s ease',
          fontFamily: 'var(--font-sans)'
        }}>
          {product.name}
        </Link>

        {/* Rating */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                style={{
                  color: star <= Math.round(product.rating || 0) ? '#f59e0b' : '#e5e7eb',
                  fill: star <= Math.round(product.rating || 0) ? '#f59e0b' : 'none',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>
            ({product.reviewCount || 0})
          </span>
        </div>

        {/* Price */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '10px',
          marginTop: '4px'
        }}>
          <span style={{
            fontSize: '1.35rem',
            fontWeight: '800',
            color: '#0f172a',
            letterSpacing: '-0.03em',
            fontFamily: 'var(--font-sans)'
          }}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span style={{
              fontSize: '0.875rem',
              color: '#94a3b8',
              textDecoration: 'line-through',
              fontWeight: '500'
            }}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          type="button"
          style={{
            marginTop: '10px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 16px',
            borderRadius: '12px',
            fontWeight: '700',
            fontSize: '0.8rem',
            background: product.inStock 
              ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' 
              : 'linear-gradient(135deg, #d1d5db, #e5e7eb)',
            color: 'white',
            border: 'none',
            cursor: product.inStock ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease',
            boxShadow: product.inStock 
              ? '0 4px 14px rgba(124, 58, 237, 0.25)' 
              : 'none',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)'
          }}
        >
          <ShoppingCart size={16} />
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>

      {/* Spin animation for skeleton loader */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
