import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Star, Sparkles } from 'lucide-react'

const HERO_BG = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&h=800&fit=crop'

export default function HeroBanner() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#0f0f1a'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(15,15,26,0.92) 70%), url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />

      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-8%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        width: '100%'
      }}>
        <div style={{ maxWidth: '700px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: '700',
            color: '#f9a8d4',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <Sparkles size={16} fill="#f9a8d4" color="#f9a8d4" />
            New Season Collection 2026
          </span>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
            fontWeight: '800',
            lineHeight: 1.02,
            color: 'white',
            margin: '0 0 1.75rem',
            letterSpacing: '-0.03em'
          }}>
            Redefine Your <br />
            <span style={{
              background: 'linear-gradient(135deg, #e9d5ff 0%, #f9a8d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Style Story
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '540px',
            fontFamily: 'var(--font-sans)',
            fontWeight: '400'
          }}>
            Discover our curated collection of premium fashion and lifestyle products.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}>
            <Link to="/shop" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e9d5ff 100%)',
              color: '#0f172a',
              padding: '1.1rem 2.5rem',
              borderRadius: '16px',
              textDecoration: 'none',
              fontWeight: '800',
              fontSize: '1.05rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>
            <Link to="/shop?category=clothing" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              padding: '1.1rem 2.25rem',
              borderRadius: '16px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.05rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              Explore Women
            </Link>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: Shield, label: 'Secure Payment' },
              { icon: Star, label: '4.9 Rated' }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.85)',
                padding: '0.6rem 1rem',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <item.icon size={18} style={idx === 2 ? { fill: '#f59e0b', color: '#f59e0b' } : {}} />
                <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.75rem',
        animation: 'bounce 2s infinite'
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px',
          height: '32px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)'
        }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}

