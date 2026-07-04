import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Star } from 'lucide-react'

const HERO_BG = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=900&fit=crop'

export default function Hero({
  title = 'Discover Your Perfect Style',
  subtitle = 'Explore our curated collection of premium products. From fashion to electronics, find everything you love at unbeatable prices.',
  badge = 'Summer Sale — Up to 50% Off',
  ctaText = 'Shop Now',
  ctaLink = '/shop',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = HERO_BG,
}) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#0f0f1a'
    }}>
      {/* Background Image with Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(15,15,26,0.95) 65%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />

      {/* Decorative animated orbs */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
              background: 'radial-gradient(circle, rgba(192,132,252,0.25) 0%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        width: '100%'
      }}>
        <div style={{ maxWidth: '700px' }}>
          {/* Promo Badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.45rem 1.1rem',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: '700',
            color: '#e9d5ff',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '1.75rem',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            {badge}
          </span>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            lineHeight: 1.05,
            color: 'white',
            margin: '0 0 1.25rem',
            letterSpacing: '-0.02em',
            animation: 'fadeInUp 0.8s ease-out 0.1s both'
          }}>
            {title}
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '2.25rem',
            maxWidth: '550px',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem',
            animation: 'fadeInUp 0.8s ease-out 0.3s both'
          }}>
            <Link to={ctaLink} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              color: 'white',
              padding: '1rem 2.25rem',
              borderRadius: '14px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(124,58,237,0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              {ctaText}
              <ArrowRight size={18} />
            </Link>

            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '1rem 2.25rem',
                borderRadius: '14px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.2s ease'
              }}>
                {secondaryCtaText}
              </Link>
            )}
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.85)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <Truck size={16} />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Free Shipping</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.85)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <Shield size={16} />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Secure Payment</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.85)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>4.9 Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.7rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px',
          height: '32px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)'
        }} />
      </div>

      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
