import { Link } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_PRODUCTS } from '../../utils/constants'

export default function TrendingCollections() {
  const products = [...MOCK_PRODUCTS]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 4)

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #f8f8fc 0%, #f3f2f7 50%, #eae7f2 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
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
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: '#7c3aed',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
                padding: '0.4rem 0.85rem',
                background: 'rgba(124,58,237,0.08)',
                borderRadius: '50px',
                fontFamily: 'var(--font-sans)'
              }}>
                What's Hot
              </span>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: 0,
                lineHeight: 1.2
              }}>
                Trending Collections
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '1rem',
                marginTop: '0.5rem',
                maxWidth: '500px',
                lineHeight: 1.6,
                fontFamily: 'var(--font-sans)'
              }}>
                Discover the most sought-after styles picked by our fashion editors
              </p>
            </div>
            <Link
              to="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#7c3aed',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
                padding: '0.65rem 1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(124,58,237,0.3)',
                background: 'rgba(124,58,237,0.03)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              View All
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }}>
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

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
