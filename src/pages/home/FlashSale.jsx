import { useState, useEffect } from 'react'
import { MOCK_FLASH_SALES } from '../../utils/constants'
import ProductCard from '../../components/product/ProductCard'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'
import { Zap } from 'lucide-react'

function TimeBlock({ value, label }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '64px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '10px',
        padding: '10px 8px',
        minWidth: '64px'
      }}>
        <span style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          color: 'white',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.02em'
        }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span style={{
        fontSize: '0.7rem',
        color: 'rgba(255,255,255,0.6)',
        marginTop: '6px',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontWeight: '600'
      }}>
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span style={{
      fontSize: '1.5rem',
      color: 'rgba(255,255,255,0.4)',
      fontWeight: '300',
      margin: '0 4px',
      alignSelf: 'flex-start',
      paddingTop: '8px'
    }}>
      :
    </span>
  )
}

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '2px',
      background: 'rgba(0,0,0,0.25)',
      padding: '8px 16px',
      borderRadius: '14px',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

export default function FlashSale() {
  const targetDate = new Date().getTime() + 3600000 * 5 + 60000 * 23 + 45000
  const products = MOCK_FLASH_SALES

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, #1a1828 0%, #141220 50%, #1a1828 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#ef4444',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              padding: '0.4rem 1rem',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '50px',
              fontFamily: 'var(--font-sans)',
              animation: 'pulse 2s infinite'
            }}>
              <Zap size={14} fill="#ef4444" />
              Limited Time Only
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
              fontWeight: '800',
              color: 'white',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.02em'
            }}>
              Flash Sale
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
              maxWidth: '500px',
              margin: '0 auto 1.5rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)'
            }}>
              Huge discounts on premium brands. Hurry, ends soon!
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
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
