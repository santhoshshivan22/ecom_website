import { Link } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_PRODUCTS } from '../../utils/constants'

export default function BestSellers() {
  const products = [...MOCK_PRODUCTS].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4)

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #fefefe 0%, #fafafa 50%, #f5f5f5 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.85rem',
              padding: '0.4rem 0.85rem',
              background: 'rgba(245, 158, 11, 0.08)',
              borderRadius: '50px',
              fontFamily: 'var(--font-sans)'
            }}>
              Top Rated
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#0f172a',
              margin: '0 0 0.75rem'
            }}>
              Best Sellers
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.65
            }}>
              Top-rated by thousands of customers
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }}>
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <div style={{ position: 'relative' }}>
                {index < 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: index === 0
                      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                      : index === 1
                        ? 'linear-gradient(135deg, #d1d5db, #9ca3af)'
                        : 'linear-gradient(135deg, #fb923c, #f97316)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    border: '2px solid white'
                  }}>
                    <span style={{
                      color: 'white',
                      fontSize: '0.85rem',
                      fontWeight: '800'
                    }}>
                      {index + 1}
                    </span>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionReveal>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              to="/shop?sort=rating"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#f59e0b',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                padding: '0.85rem 1.75rem',
                borderRadius: '14px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                background: 'rgba(245, 158, 11, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.08)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              View All Best Sellers
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>
        </SectionReveal>

        <style>{`
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns: repeat(4"] {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: repeat(4"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="gridTemplateColumns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
