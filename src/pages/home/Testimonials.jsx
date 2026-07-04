import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { MOCK_REVIEWS } from '../../utils/constants'

export default function Testimonials() {
  const reviews = MOCK_REVIEWS

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #fafafb 0%, #f5f5f8 50%, #f0f0f5 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.04) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#7c3aed',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              fontFamily: 'var(--font-sans)'
            }}>
              Trusted Voices
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '1rem',
              color: '#0f172a',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em'
            }}>
              What Our Customers Say
            </h2>
            <p style={{
              color: '#64748b',
              textAlign: 'center',
              fontSize: '1.1rem',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)'
            }}>
              Real experiences shared by our community of discerning shoppers
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 120}>
              <div style={{
                padding: '2.25rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: 'translateY(0)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)'
              }}
              >
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '4rem',
                  color: 'rgba(124, 58, 237, 0.08)',
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>
                  "
                </span>

                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} style={{
                      color: '#f59e0b',
                      fontSize: '1.1rem',
                      filter: 'drop-shadow(0 1px 2px rgba(245, 158, 11, 0.2))'
                    }}>
                      {star}
                    </span>
                  ))}
                </div>
                <p style={{
                  color: '#334155',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '-0.01em'
                }}>
                  {review.text}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, 
                      ${index === 0 ? '#7c3aed' : index === 1 ? '#ef4444' : index === 2 ? '#0ea5e9' : '#f59e0b'} 0%, 
                      ${index === 0 ? '#6d28d9' : index === 1 ? '#dc2626' : index === 2 ? '#0284c7' : '#d97706'} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                  }}>
                    <span style={{
                      color: 'white',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      fontFamily: 'var(--font-sans)'
                    }}>
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', fontSize: '0.95rem', margin: 0, color: '#0f172a', fontFamily: 'var(--font-serif)' }}>{review.name}</p>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: '500' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
