import { Link } from 'react-router-dom'
import { MOCK_PRODUCTS } from '../../utils/constants'
import ProductCard from '../../components/product/ProductCard'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { Sparkles } from 'lucide-react'

export default function FeaturedProducts() {
  const products = MOCK_PRODUCTS.slice(0, 8)

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #ffffff 0%, #fafafb 30%, #f5f5f8 100%)',
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
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        width: '180px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 1
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
              color: '#7c3aed',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.85rem',
              padding: '0.4rem 0.85rem',
              background: 'rgba(124,58,237,0.08)',
              borderRadius: '50px',
              fontFamily: 'var(--font-sans)'
            }}>
              <Sparkles size={14} />
              Editor's Picks
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#0f172a',
              margin: '0 0 0.75rem'
            }}>
              Featured Products
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
              Hand-selected favorites from our latest collection
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
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.5rem'
        }}>
          <SectionReveal>
            <Link
              to="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#7c3aed',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '700',
                padding: '0.9rem 2rem',
                borderRadius: '14px',
                border: '1px solid rgba(124,58,237,0.3)',
                background: 'rgba(124,58,237,0.03)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.08)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              View All Products
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </Link>
          </SectionReveal>
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
