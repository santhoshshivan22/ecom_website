import { Link } from 'react-router-dom'
import { SectionReveal, FadeIn } from '../../hooks/useScrollReveal'

export default function FeaturedCategories() {
  const categories = [
    { name: 'Men', slug: 'men', image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=500&h=400&fit=crop', count: 1240 },
    { name: 'Women', slug: 'women', image: 'https://images.unsplash.com/photo-1487412947147-578a7a3c7d1a?w=500&h=400&fit=crop', count: 2140 },
    { name: 'Kids', slug: 'kids', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=400&fit=crop', count: 560 },
    { name: 'Beauty', slug: 'beauty', image: 'https://images.unsplash.com/photo-1522335789203-abd1d0a386f7?w=500&h=400&fit=crop', count: 320 },
    { name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=400&fit=crop', count: 890 },
    { name: 'Sale', slug: 'sale', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=400&fit=crop', count: 450 },
  ]

  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(165deg, #f8f8fc 0%, #f1f0f5 70%, #eae7f2 100%)',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-15%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
              Explore Our Range
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#0f172a',
              margin: '0 0 0.75rem',
              fontFamily: 'var(--font-serif)'
            }}>
              Featured Categories
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
              Browse through our carefully curated categories to find exactly what you're looking for
            </p>
          </div>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {categories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={i * 80}>
              <Link to={`/shop?category=${cat.slug}`} style={{
                position: 'relative',
                display: 'block',
                height: '280px',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'white',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(124,58,237,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
              }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to top, rgba(124,58,237,0.85) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.75rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 0 0.35rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    {cat.name}
                  </h3>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.85)',
                    background: 'rgba(124,58,237,0.85)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '10px',
                    fontWeight: '600'
                  }}>
                    {cat.count} items
                  </span>
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
      </div>
    </section>
  )
}
