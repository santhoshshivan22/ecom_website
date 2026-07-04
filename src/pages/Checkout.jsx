import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Check, CreditCard, Truck, User, ChevronRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatPrice } from '../utils/formatters'
import useCartStore from '../stores/useCartStore'
import { useUser } from '@clerk/clerk-react'
import { toast, Toaster } from 'react-hot-toast'

const shippingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().min(6, 'Pincode must be 6 digits'),
  country: z.string().min(2, 'Country is required'),
})

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, 'Card number must be 16 digits'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Format: MM/YY'),
  cvv: z.string().regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  nameOnCard: z.string().min(2, 'Name on card is required'),
})

const STEPS = [
  { id: 'shipping', label: 'Shipping', icon: Truck },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'review', label: 'Review', icon: Check },
]

export default function Checkout() {
  const navigate = useNavigate()
  const { items, subtotal, clearCart } = useCartStore()
  const { user } = useUser()
  const [stepIndex, setStepIndex] = useState(0)
  const [orderId, setOrderId] = useState(null)

  const shippingForm = useForm({
    resolver: zodResolver(shippingSchema),
    defaultValues: { fullName: user?.fullName || '', email: user?.primaryEmailAddress?.emailAddress || '', phone: '', address: '', city: '', state: '', pincode: '', country: 'India' },
  })

  const paymentForm = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: { cardNumber: '', expiry: '', cvv: '', nameOnCard: '' },
  })

  const shipping = subtotal >= 75000 ? 0 : 199
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + shipping + tax

  const currentStep = STEPS[stepIndex]

  const onShippingSubmit = (data) => {
    setStepIndex(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onPaymentSubmit = (data) => {
    setStepIndex(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePlaceOrder = () => {
    const orderNumber = 'ORD-' + Date.now().toString(36).toUpperCase()
    setOrderId(orderNumber)
    clearCart()
    toast.success('Order placed successfully!')
    setTimeout(() => navigate(`/order/${orderNumber}`), 1500)
  }

  useEffect(() => {
    if (items.length === 0 && !orderId) {
      navigate('/cart')
    }
  }, [items.length, navigate, orderId])

  if (orderId) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5rem 1rem', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #22c55e, #16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <Check size={40} color="white" />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>Order Confirmed!</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Thank you for your purchase.</p>
        <p style={{ color: '#7c3aed', fontWeight: '600', marginBottom: '2rem' }}>Order #{orderId}</p>
        <Link to="/shop"><button style={{ padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>Continue Shopping</button></Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 1rem', background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)', minHeight: 'calc(100vh - 200px)' }}>
      <Toaster position="top-right" />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginBottom: '2rem', textAlign: 'center' }}>Checkout</h1>

        {/* Stepper */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isActive = i === stepIndex
            const isCompleted = i < stepIndex
            return (
              <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: isCompleted ? 'linear-gradient(135deg, #22c55e, #16a34a)' : isActive ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : '#e2e8f0',
                  color: isCompleted || isActive ? 'white' : '#64748b',
                  fontWeight: '700', fontSize: '0.9rem', transition: 'all 0.3s',
                }}>
                  {isCompleted ? <Check size={18} /> : <Icon size={18} />}
                </div>
                <span style={{ fontWeight: isActive ? '600' : '400', color: isActive ? '#7c3aed' : '#64748b', fontSize: '0.9rem' }}>{step.label}</span>
                {i < STEPS.length - 1 && <ChevronRight size={16} color="#cbd5e1" style={{ marginLeft: '0.5rem' }} />}
              </div>
            )
          })}
        </div>

        {/* Step Content */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '24px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(124, 58, 237, 0.1)',
          marginBottom: '2rem',
        }}>
          {stepIndex === 0 && (
            <form onSubmit={shippingForm.handleSubmit(onShippingSubmit)}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={20} color="#7c3aed" /> Shipping Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'phone', label: 'Phone', type: 'tel' },
                  { name: 'address', label: 'Address', type: 'text', full: true },
                  { name: 'city', label: 'City', type: 'text' },
                  { name: 'state', label: 'State', type: 'text' },
                  { name: 'pincode', label: 'Pincode', type: 'text' },
                  { name: 'country', label: 'Country', type: 'text' },
                ].map((field) => (
                  <div key={field.name} style={field.full ? { gridColumn: '1 / -1' } : {}}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.4rem' }}>{field.label}</label>
                    <input
                      type={field.type}
                      {...shippingForm.register(field.name)}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '12px',
                        border: shippingForm.formState.errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
                        fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', color: '#0f172a',
                      }}
                    />
                    {shippingForm.formState.errors[field.name] && (
                      <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>{shippingForm.formState.errors[field.name].message}</p>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                <button type="submit" style={{ padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Continue to Payment <ChevronRight size={18} />
                </button>
              </div>
            </form>
          )}

          {stepIndex === 1 && (
            <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CreditCard size={20} color="#7c3aed" /> Payment Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {[
                  { name: 'cardNumber', label: 'Card Number', placeholder: '1234 5678 9012 3456' },
                  { name: 'nameOnCard', label: 'Name on Card', placeholder: 'John Doe' },
                  { name: 'expiry', label: 'Expiry Date', placeholder: 'MM/YY' },
                  { name: 'cvv', label: 'CVV', placeholder: '123' },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.4rem' }}>{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      {...paymentForm.register(field.name)}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '12px',
                        border: paymentForm.formState.errors[field.name] ? '2px solid #ef4444' : '2px solid #e2e8f0',
                        fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit', color: '#0f172a',
                      }}
                    />
                    {paymentForm.formState.errors[field.name] && (
                      <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>{paymentForm.formState.errors[field.name].message}</p>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={() => { setStepIndex(0); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ padding: '0.875rem 1.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', color: '#0f172a' }}>Back</button>
                <button type="submit" style={{ padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Review Order <ChevronRight size={18} />
                </button>
              </div>
            </form>
          )}

          {stepIndex === 2 && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={20} color="#7c3aed" /> Review Your Order</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: 'rgba(248, 248, 252, 0.5)', borderRadius: '16px', border: '1px solid rgba(124, 58, 237, 0.08)' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Shipping To</h3>
                  <p style={{ color: '#334155', fontSize: '0.95rem' }}>{shippingForm.getValues('fullName')}, {shippingForm.getValues('address')}, {shippingForm.getValues('city')}, {shippingForm.getValues('state')} {shippingForm.getValues('pincode')}, {shippingForm.getValues('country')}</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Order Items ({items.length})</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {items.map((item) => (
                      <div key={item.slug} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(248, 248, 252, 0.5)', borderRadius: '12px', border: '1px solid rgba(124, 58, 237, 0.06)' }}>
                        <img src={item.image} alt={item.name} style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem', margin: 0 }}>{item.name}</p>
                          <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0' }}>Qty: {item.quantity}</p>
                        </div>
                        <span style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '1.25rem', background: 'rgba(248, 248, 252, 0.5)', borderRadius: '16px', border: '1px solid rgba(124, 58, 237, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}><span style={{ color: '#64748b' }}>Subtotal</span><span style={{ fontWeight: '600', color: '#0f172a' }}>{formatPrice(subtotal)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}><span style={{ color: '#64748b' }}>Shipping</span><span style={{ fontWeight: '600', color: shipping === 0 ? '#22c55e' : '#0f172a' }}>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}><span style={{ color: '#64748b' }}>Tax (8%)</span><span style={{ fontWeight: '600', color: '#0f172a' }}>{formatPrice(tax)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0 0', borderTop: '2px solid rgba(124, 58, 237, 0.1)', marginTop: '0.5rem' }}><span style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a' }}>Total</span><span style={{ fontSize: '1.35rem', fontWeight: '700', color: '#7c3aed' }}>{formatPrice(total)}</span></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                <button type="button" onClick={() => { setStepIndex(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ padding: '0.875rem 1.5rem', border: '1px solid #e2e8f0', background: 'white', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', color: '#0f172a' }}>Back</button>
                <button onClick={handlePlaceOrder} style={{ padding: '0.875rem 2.5rem', background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 6px 20px rgba(34, 197, 94, 0.35)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check size={18} /> Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
