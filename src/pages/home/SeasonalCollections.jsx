import { Link } from 'react-router-dom'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_SEASONAL_COLLECTIONS } from '../../utils/constants'

export default function SeasonalCollections() {
  const collections = MOCK_SEASONAL_COLLECTIONS

  return (
    <section style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SectionReveal>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '700',
            color: '#7c3aed',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.85rem'
          }}>
            Curated For You
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            margin: '0 0 0.75rem'
          }}>
            Seasonal Collections
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65, fontFamily: 'var(--font-sans)' }}>
            Explore our handpicked seasonal edits designed for every occasion
          </p>
        </div>
      </SectionReveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }}>
        {collections.map((col, i) => (
          <FadeIn key={col.title} delay={i * 150}>
            <Link
              to={col.link}
              style={{
                position: 'relative',
                display: 'block',
                height: '360px',
                borderRadius: '24px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'white',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(124,58,237,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${col.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)'
              }}>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  margin: '0 0 0.35rem',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontFamily: 'var(--font-serif)'
                }}>
                  {col.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {col.subtitle}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
