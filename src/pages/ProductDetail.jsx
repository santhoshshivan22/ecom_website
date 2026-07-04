import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Minus, Plus, Truck, Shield, RefreshCw, ChevronRight, ZoomIn, Share2, Check } from 'lucide-react'
import ProductGrid from '../components/product/ProductGrid'
import RatingStars from '../components/product/RatingStars'
import Badge from '../components/ui/Badge'
import { formatPrice } from '../utils/formatters'
import useCartStore from '../stores/useCartStore'
import useWishlistStore from '../stores/useWishlistStore'
import { MOCK_PRODUCTS } from '../utils/constants'
import { toast, Toaster } from 'react-hot-toast'

const RELATED_SLUGS = ['running-shoes', 'cotton-crew-tshirt', 'yoga-mat-premium', 'leather-backpack']

export default function ProductDetail() {
  const { slug } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const addItem = useCartStore((s) => s.addItem)
  const toggleItem = useWishlistStore((s) => s.toggleItem)
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(slug))

  const product = MOCK_PRODUCTS.find((p) => p.slug === slug)
  const related = MOCK_PRODUCTS.filter((p) => RELATED_SLUGS.includes(p.slug) && p.slug !== slug).slice(0, 4)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!product) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Product Not Found</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>The product you are looking for does not exist.</p>
        <Link to="/shop"><button style={{ padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Back to Shop</button></Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product)
    toast.success(`${quantity}x ${product.name} added to cart!`)
  }

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0

  return (
    <div style={{ padding: '2rem 1rem', background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)', minHeight: 'calc(100vh - 200px)' }}>
      <Toaster position="top-right" />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumbs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={16} color="#64748b" />
          <Link to="/shop" style={{ color: '#64748b', textDecoration: 'none' }}>Shop</Link>
          <ChevronRight size={16} color="#64748b" />
          <span style={{ color: '#0f172a', fontWeight: '500' }}>{product.name}</span>
        </nav>

        {/* Product Main */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
        }}>
          <style>{`
            @media (min-width: 1024px) {
              .product-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
            }
          `}</style>
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
            {/* Left: Image Gallery */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#f1f5f9',
                border: '1px solid rgba(124, 58, 237, 0.1)',
                aspectRatio: '1 / 1',
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {discount > 0 && (
                  <Badge variant="danger" style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '10px' }}>
                    -{discount}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Right: Product Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(124, 58, 237, 0.1)',
              height: 'fit-content',
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#7c3aed', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {product.category}
                </p>
                <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.25rem', lineHeight: 1.2 }}>
                  {product.name}
                </h1>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <RatingStars rating={product.rating} count={product.reviewCount} />
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>({product.reviewCount} reviews)</span>
                {product.isNew && <Badge variant="primary" style={{ fontSize: '0.75rem' }}>NEW</Badge>}
                {!product.inStock && <Badge variant="danger" style={{ fontSize: '0.75rem' }}>SOLD OUT</Badge>}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: '700', color: '#0f172a' }}>{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1.25rem', color: '#64748b', textDecoration: 'line-through' }}>
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span style={{ fontSize: '0.875rem', color: '#22c55e', fontWeight: '600' }}>
                    Save {discount}%
                  </span>
                )}
              </div>

              <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Tabs */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1rem' }}>
                  {['description', 'features', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: '0.75rem 1.25rem',
                        border: 'none',
                        borderBottom: activeTab === tab ? '2px solid #7c3aed' : '2px solid transparent',
                        background: 'transparent',
                        color: activeTab === tab ? '#7c3aed' : '#64748b',
                        fontWeight: activeTab === tab ? '600' : '500',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div style={{ padding: '0.5rem 0' }}>
                  {activeTab === 'description' && (
                    <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {product.description || 'No description available.'}
                    </p>
                  )}
                  {activeTab === 'features' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      {(product.features || []).map((f) => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0 }} />
                          <span style={{ color: '#0f172a', fontSize: '0.9rem' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 'reviews' && (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: '#64748b' }}>
                      <p>{product.reviewCount || 0} reviews for this product</p>
                      <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Customer reviews coming soon.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity & Actions */}
              {product.inStock ? (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>Quantity</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '0.5rem', background: 'white' }}>
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '36px', height: '36px', borderRadius: '10px', border: 'none', background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Decrease"><Minus size={18} /></button>
                      <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '600', color: '#0f172a', fontSize: '1rem' }}>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} style={{ width: '36px', height: '36px', borderRadius: '10px', border: 'none', background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Increase"><Plus size={18} /></button>
                    </div>
                    <button
                      onClick={() => toggleItem(product)}
                      style={{
                        width: '44px', height: '44px', borderRadius: '14px',
                        border: `1px solid ${isInWishlist ? '#7c3aed' : '#e2e8f0'}`,
                        background: isInWishlist ? 'rgba(124, 58, 237, 0.1)' : 'white',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                      }}
                      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <Heart size={20} fill={isInWishlist ? '#7c3aed' : 'none'} color={isInWishlist ? '#7c3aed' : '#64748b'} />
                    </button>
                  </div>
                </div>
              ) : (
                <Badge variant="danger" style={{ marginBottom: '1.5rem', fontSize: '0.95rem', padding: '0.5rem 1rem' }}>Out of Stock</Badge>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.inStock ? (
                  <>
                    <button
                      onClick={handleAddToCart}
                      style={{
                        width: '100%', padding: '1rem',
                        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                        color: 'white', border: 'none', borderRadius: '16px',
                        fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        transition: 'transform 0.2s',
                      }}
                    >
                      Add to Cart <Check size={18} />
                    </button>
                    <Link to="/checkout" style={{ width: '100%', textDecoration: 'none' }}>
                      <button style={{
                        width: '100%', padding: '1rem', border: '1px solid #e2e8f0', color: '#0f172a',
                        background: 'white', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                      }}>
                        Buy Now
                      </button>
                    </Link>
                  </>
                ) : (
                  <button style={{ width: '100%', padding: '1rem', border: '1px solid #7c3aed', color: '#7c3aed', background: 'rgba(124, 58, 237, 0.05)', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
                    Notify When Available
                  </button>
                )}
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(124, 58, 237, 0.1)' }}>
                <div style={{ textAlign: 'center' }}><Truck size={24} color="#7c3aed" style={{ marginBottom: '0.5rem' }} /><p style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>Free Shipping</p></div>
                <div style={{ textAlign: 'center' }}><Shield size={24} color="#7c3aed" style={{ marginBottom: '0.5rem' }} /><p style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>2 Year Warranty</p></div>
                <div style={{ textAlign: 'center' }}><RefreshCw size={24} color="#7c3aed" style={{ marginBottom: '0.5rem' }} /><p style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>30 Day Returns</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>You May Also Like</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>Curated selections from our collection</p>
            <ProductGrid products={related} loading={false} />
          </section>
        )}
      </div>
    </div>
  )
}
