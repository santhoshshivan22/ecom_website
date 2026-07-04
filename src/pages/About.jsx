import { Link } from 'react-router-dom'
import { SectionReveal, FadeIn } from '../hooks/useScrollReveal'
import { Heart, Users, Shield, Globe, Award, ArrowRight } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'We believe in the power of style to transform lives and express individuality.',
      color: '#dc2626'
    },
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Every product is carefully curated to meet our high standards of excellence.',
      color: '#0ea5e9'
    },
    {
      icon: Users,
      title: 'Customer Centric',
      description: 'Your satisfaction is at the heart of everything we do.',
      color: '#7c3aed'
    },
    {
      icon: Globe,
      title: 'Sustainable',
      description: 'We partner with brands that care for our planet and its future.',
      color: '#16a34a'
    }
  ]

  const team = [
    { name: 'Aarav Mehta', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1d7a2a9d3a?w=200&h=200&fit=crop' },
    { name: 'Priya Sharma', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c92747e79?w=200&h=200&fit=crop' },
    { name: 'Rohan Verma', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1500648767792-2c6a1e50a3e3?w=200&h=200&fit=crop' },
    { name: 'Ananya Iyer', role: 'Design Lead', image: 'https://images.unsplash.com/photo-143876172100a0-772f48e7c3a5?w=200&h=200&fit=crop' }
  ]

  return (
    <>
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 70%, #334155 100%)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6rem 2rem 4rem',
          textAlign: 'center'
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#a855f7',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '1rem'
          }}>Our Story</span>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 1.5rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-0.02em'
          }}>Curating Elegance, Crafting Experiences</h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)'
          }}>
            Born from a passion for exceptional fashion, we bring you carefully selected pieces that define modern luxury.
          </p>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(165deg, #ffffff 0%, #f8f8fc 70%, #f1f0f5 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#7c3aed',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem'
              }}>Our Mission</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: '0 0 1.5rem',
                fontFamily: 'var(--font-serif)'
              }}>Elevate Every Wardrobe</h2>
              <p style={{
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                fontSize: '1.05rem'
              }}>
                We set out to revolutionize online fashion retail by connecting discerning customers with premium brands. Our mission is simple: make luxury accessible without compromising on quality or style.
              </p>
              <p style={{
                color: '#64748b',
                lineHeight: 1.7,
                fontSize: '1rem'
              }}>
                From the finest craftsmanship to sustainable practices, every decision we make reflects our commitment to excellence and our vision of a more stylish tomorrow.
              </p>
            </div>
            <div style={{
              height: '400px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px rgba(124, 58, 237, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '180px',
                height: '180px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
              }}>
                <Award size={80} color="#7c3aed" strokeWidth={1.5} />
              </div>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(40px)'
              }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(165deg, #f8f8fc 0%, #f3f2f8 70%, #f0f0f5 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              }}>Our Values</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: '0 0 0.75rem',
                fontFamily: 'var(--font-serif)'
              }}>What Drives Us</h2>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                maxWidth: '540px',
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                The principles that guide every decision and shape every experience
              </p>
            </div>
          </SectionReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem'
          }}>
            {values.map((val, i) => (
              <FadeIn key={val.title} delay={i * 100}>
                <div style={{
                  padding: '2.25rem',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)'
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)'
                }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${val.color}20 0%, ${val.color}10 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <val.icon size={24} color={val.color} strokeWidth={1.5} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    margin: '0 0 0.5rem',
                    fontFamily: 'var(--font-serif)'
                  }}>{val.title}</h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>{val.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(165deg, #ffffff 0%, #fafafb 70%, #f5f5f8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              }}>Meet the Team</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: '0 0 0.75rem',
                fontFamily: 'var(--font-serif)'
              }}>The Minds Behind the Magic</h2>
              <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                A passionate team dedicated to bringing you the finest fashion experiences
              </p>
            </div>
          </SectionReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 120}>
                <div style={{
                  textAlign: 'center',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                >
                  <div style={{
                    height: '240px',
                    background: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <div style={{ padding: '1.75rem' }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      margin: '0 0 0.25rem',
                      fontFamily: 'var(--font-serif)'
                    }}>{member.name}</h3>
                    <p style={{
                      color: '#7c3aed',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 1rem',
            fontFamily: 'var(--font-serif)'
          }}>Ready to Elevate Your Style?</h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join thousands of satisfied customers who trust us for their fashion needs.
          </p>
          <Link to="/shop" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'white',
            color: '#7c3aed',
            padding: '1rem 2.5rem',
            borderRadius: '16px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1rem',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
          >
            Shop Our Collection
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="height: 400px"] {
            height: 300px !important;
          }
        }
      `}</style>
    </>
  )
}