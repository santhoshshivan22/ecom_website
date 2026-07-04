import { useState } from 'react'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: '#f8f8fc',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{
            padding: '3rem',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(124, 58, 237, 0.05)',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>📬</span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '0.85rem'
            }}>
              Subscribe to Our Newsletter
            </h2>
            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
              Get the latest updates on new products, upcoming sales, and exclusive discounts delivered to your inbox.
            </p>

            {subscribed ? (
              <FadeIn>
                <p style={{ color: '#10b981', fontWeight: '700', fontSize: '1.05rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '12px' }}>
                  Thanks for subscribing! Check your inbox soon.
                </p>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <FadeIn delay={100}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      flex: '1 1 240px',
                      padding: '0.9rem 1.25rem',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      background: '#f8f8fc',
                      fontFamily: 'var(--font-sans)',
                      transition: 'all 0.3s ease',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#7c3aed'
                      e.target.style.boxShadow = '0 0 0 4px rgba(124, 58, 237, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0, 0, 0, 0.08)'
                      e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  />
                </FadeIn>
                <FadeIn delay={200}>
                  <button
                    type="submit"
                    style={{
                      padding: '0.9rem 1.75rem',
                      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 8px 20px rgba(124, 58, 237, 0.35)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = '0 4px 14px rgba(124, 58, 237, 0.25)'
                    }}
                  >
                    Subscribe
                  </button>
                </FadeIn>
              </form>
            )}

            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '1.25rem' }}>
              No spam, unsubscribe anytime.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
