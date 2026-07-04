import { Link } from 'react-router-dom'

export default function PromotionalBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      color: 'white',
      padding: '0.6rem 1.5rem',
      textAlign: 'center',
      fontSize: '0.85rem',
      fontWeight: '500',
      letterSpacing: '0.02em',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
        animation: 'shimmer 3s infinite linear'
      }} />
      <span style={{
        display: 'inline-block',
        animation: 'pulse 2s infinite',
        color: '#f59e0b',
        marginRight: '0.5rem'
      }}>✦</span>
      Free shipping on orders above <strong>₹999</strong> — Use code <strong style={{ color: '#e9d5ff', marginLeft: '0.25rem' }}>STYLE20</strong> for 20% off
      <span style={{
        display: 'inline-block',
        animation: 'pulse 2s infinite 0.5s',
        color: '#f59e0b',
        marginLeft: '0.5rem'
      }}>✦</span>
      <Link to="/shop" style={{
        marginLeft: '1rem',
        color: '#c084fc',
        fontWeight: '600',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        transition: 'all 0.2s ease',
        padding: '0.25rem 0.5rem',
        borderRadius: '6px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(192, 132, 252, 0.2)'
        e.currentTarget.style.color = '#f9a8d4'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = '#c084fc'
      }}
      >
        Shop Now
      </Link>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}
