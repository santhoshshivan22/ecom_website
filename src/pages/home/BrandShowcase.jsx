import { Link } from 'react-router-dom'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_BRAND_SHOWCASE } from '../../utils/constants'

export default function BrandShowcase() {
  const brands = MOCK_BRAND_SHOWCASE

  return (
    <section style={{ padding: '6rem 1.5rem', background: '#0f172a', maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#c084fc',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              fontFamily: 'var(--font-sans)'
            }}>
              Trusted Labels
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
              fontWeight: '800',
              color: 'white',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.02em'
            }}>
              Brand Showcase
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-sans)' }}>
              Shop from the brands you love, curated for quality and style
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {brands.map((brand, index) => (
            <FadeIn key={brand.category} delay={index * 100}>
              <Link
                to={`/shop?brand=${encodeURIComponent(brand.product)}`}
                style={{
                  display: 'block',
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)'
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  fontSize: '1.5rem'
                }}>
                  ✨
                </div>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  margin: '0 0 0.35rem',
                  color: 'white'
                }}>
                  {brand.category}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {brand.product}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
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
