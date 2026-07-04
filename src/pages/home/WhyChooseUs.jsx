import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const benefits = [
    { title: 'Free Shipping', description: 'On all orders above ₹1,999', icon: Truck },
    { title: 'Secure Checkout', description: 'SSL encrypted payment', icon: Shield },
    { title: 'Easy Returns', description: '30-day hassle-free returns', icon: RotateCcw },
    { title: '24/7 Support', description: 'Dedicated customer service', icon: Headphones },
  ]

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #ffffff 0%, #fafafb 50%, #f5f5f8 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-10%',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '240px',
        height: '240px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
            Our Promise
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
            Why Choose Us
          </h2>
          <p style={{
            color: '#64748b',
            textAlign: 'center',
            marginBottom: 0,
            fontSize: '1.1rem',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'var(--font-sans)'
          }}>
            We go beyond the ordinary to deliver an exceptional shopping experience every time
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {benefits.map((item, index) => {
            const Icon = item.icon
            const gradientColors = [
              'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
            ]
            return (
              <div key={item.title} style={{
                padding: '2.5rem 2rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '24px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: 'translateY(0)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)'
              }}>
                {/* Icon container */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  margin: '0 auto 1.5rem',
                  background: gradientColors[index],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative'
                }}>
                  <Icon size={28} color="white" strokeWidth={1.5} />
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  margin: '0 0 0.75rem',
                  color: '#0f172a',
                  fontFamily: 'var(--font-serif)',
                  letterSpacing: '-0.01em'
                }}>{item.title}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '500'
                }}>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
