import { Link } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_PRODUCTS } from '../../utils/constants'

export default function NewArrivals() {
  const products = MOCK_PRODUCTS.filter((p) => p.isNew).slice(0, 4)

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #fefefe 0%, #f8f8fc 30%, #f3f2f7 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(110, 231, 183, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#10b981',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '1rem',
              padding: '0.4rem 1rem',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '50px',
              fontFamily: 'var(--font-sans)'
            }}>
              Just Landed
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
              fontWeight: '800',
              color: '#0f172a',
              margin: '0 0 1rem',
              letterSpacing: '-0.02em'
            }}>
              New Arrivals
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '1.1rem',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)'
            }}>
              Fresh drops straight from the runway — be the first to shop the latest trends
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 120}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '-32px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  padding: '6px 44px',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  transform: 'rotate(-45deg)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  zIndex: 10,
                  animation: 'pulse 2s infinite'
                }}>
                  Just Landed
                </div>
                <ProductCard product={product} />
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionReveal>
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/shop?sort=newest"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#10b981',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '600',
                padding: '0.85rem 1.75rem',
                borderRadius: '14px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: 'rgba(16, 185, 129, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(16, 185, 129, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Explore All New Arrivals
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>
        </SectionReveal>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
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
