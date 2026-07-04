import { Smartphone } from 'lucide-react'

export default function MobileAppPromo() {
  return (
    <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        borderRadius: '24px',
        padding: '3rem',
        color: 'white',
        flexWrap: 'wrap'
      }}>
        <div style={{ maxWidth: '480px' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '800',
            margin: '0 0 0.75rem',
            lineHeight: 1.2
          }}>
            Shop On The Go
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            margin: '0 0 1.5rem',
            opacity: 0.9
          }}>
            Download the Shopper's Stop app for exclusive app-only deals, personalized recommendations, and a seamless checkout experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>
              <Smartphone size={18} />
              App Store
            </button>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}>
              <Smartphone size={18} />
              Google Play
            </button>
          </div>
        </div>
        <div style={{
          fontSize: '8rem',
          lineHeight: 1,
          opacity: 0.9,
          fontWeight: '800',
          fontFamily: 'var(--font-serif)'
        }}>
          SS
        </div>
      </div>
    </section>
  )
}
