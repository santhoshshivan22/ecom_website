import { useState } from 'react'
import { SectionReveal, FadeIn } from '../hooks/useScrollReveal'
import { Mail, Phone, MapPin, Clock, Send, Truck, Shield, HelpCircle } from 'lucide-react'
import { submitContactForm } from '../services/contact'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    }
    setIsSubmitting(true)
    setStatus('idle')
    try {
      await submitContactForm(payload)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'santhoshshivansasi@gmail.com', href: 'mailto:santhoshshivansasi@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 1800-123-4567', href: 'tel:+9118001234567' },
    { icon: MapPin, label: 'Address', value: 'Mumbai, Maharashtra, India', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 8PM', href: '#' }
  ]

  return (
    <>
      <section style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 70%, #475569 100%)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.25) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem 3rem',
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
          }}>Get in Touch</span>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 1rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-0.02em'
          }}>We're Here to Help</h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Have questions about orders, products, or anything else? Our team is ready to assist you.
          </p>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(165deg, #ffffff 0%, #f8f8fc 70%, #f1f0f5 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#7c3aed',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem'
              }}>Send a Message</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: '0 0 1.5rem',
                fontFamily: 'var(--font-serif)'
              }}>We'd Love to Hear From You</h2>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#334155',
                        marginBottom: '0.4rem'
                      }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        style={{
                          width: '100%',
                          padding: '0.9rem 1.1rem',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          fontFamily: 'inherit',
                          color: '#0f172a'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#7c3aed'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#334155',
                        marginBottom: '0.4rem'
                      }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        style={{
                          width: '100%',
                          padding: '0.9rem 1.1rem',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          fontFamily: 'inherit',
                          color: '#0f172a'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#7c3aed'
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#334155',
                      marginBottom: '0.4rem'
                    }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.1rem',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'inherit',
                        color: '#0f172a'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#7c3aed'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e2e8f0'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#334155',
                      marginBottom: '0.4rem'
                    }}>Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.1rem',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'inherit',
                        color: '#0f172a'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#7c3aed'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e2e8f0'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '1rem 2rem',
                      background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(124, 58, 237, 0.4)'
                    }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)'
                       e.currentTarget.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.3)'
                     }}
                   >
                     {isSubmitting ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed - Try Again' : 'Send Message'}
                     <Send size={18} />
                   </button>

                   {status === 'success' && (
                     <p style={{ color: '#22c55e', fontSize: '0.95rem', fontWeight: '600' }}>
                       Your message has been sent successfully!
                     </p>
                   )}
                   {status === 'error' && (
                     <p style={{ color: '#ef4444', fontSize: '0.95rem', fontWeight: '600' }}>
                       Something went wrong. Please try again.
                     </p>
                   )}
                </div>
              </form>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#7c3aed',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.75rem'
                }}>Contact Information</span>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#0f172a',
                  margin: '0 0 1.5rem',
                  fontFamily: 'var(--font-serif)'
                }}>Reach Us Directly</h2>
              </div>

              {contactInfo.map((info, i) => (
                <FadeIn key={info.label} delay={i * 100}>
                  <a href={info.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)'
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)'
                  }}
                  >
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <info.icon size={22} color="#7c3aed" />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#94a3b8',
                        margin: '0 0 0.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>{info.label}</p>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#0f172a',
                        margin: 0
                      }}>{info.value}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
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
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: '700',
                color: '#7c3aed',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                fontFamily: 'var(--font-sans)'
              }}>Frequently Asked</span>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: '800',
                color: '#0f172a',
                margin: '0 0 0.75rem',
                fontFamily: 'var(--font-serif)'
              }}>Quick Answers</h2>
              <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                Find answers to common questions about orders, shipping, and returns
              </p>
            </div>
          </SectionReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                icon: Truck,
                question: 'What is your shipping policy?',
                answer: 'Free shipping on orders above ₹75,000. Standard delivery takes 3-5 business days.',
                color: '#0ea5e9'
              },
              {
                icon: HelpCircle,
                question: 'How do I track my order?',
                answer: 'You can track your order status using the tracking link sent to your email.',
                color: '#7c3aed'
              },
              {
                icon: Shield,
                question: 'What is your return policy?',
                answer: 'Easy 30-day returns. Items must be unused with original tags attached.',
                color: '#22c55e'
              }
            ].map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 120}>
                <div style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(124, 58, 237, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: `${faq.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <faq.icon size={22} color={faq.color} />
                  </div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    margin: '0 0 0.75rem',
                    fontFamily: 'var(--font-serif)'
                  }}>{faq.question}</h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}>{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}