import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'
import { useSignUp } from '@clerk/clerk-react'

export default function Register() {
  const { signUp, isLoaded } = useSignUp()



  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)



  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!isLoaded) return

  setError('')
  setLoading(true)

  try {
    const result = await signUp.create({
      emailAddress: email,
      password,
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ').slice(1).join(' ') || '',
    })

    console.log("Signup Result:", result)

    if (result.status === 'complete') {
      window.location.href = '/'
    } else {
      // Forward to a dummy page (which can show 404 if it doesn't exist)
      window.location.href = '/verify-email'
    }
  } catch (err) {
    console.error("Registration Error:", err)

    setError(
      err.errors?.[0]?.longMessage ||
      err.errors?.[0]?.message ||
      'Registration failed. Please try again.'
    )
  } finally {
    setLoading(false)
  }
}


  const handleGoogleSignIn = async () => {
    if (!isLoaded) return
    try {
      await signUp.authenticateWithRedirect?.({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/',
      })
    } catch (err) {
      console.error('Google sign-in error:', err)
      alert('Google Sign-In is not configured. Please use email/password to register.')
    }
  }


  if (!isLoaded) {

    return (

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)' }}>

        <p style={{ color: '#64748b' }}>Loading...</p>

      </div>

    )

  }



  return (

<div style={{

      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',

      padding: '2rem 1rem', background: 'linear-gradient(135deg, #f8f8fc 0%, #ffffff 100%)',

      position: 'relative', overflow: 'hidden',

    }}>

      <div style={{

        position: 'absolute', top: '-150px', right: '-150px', width: '400px', height: '400px',

        borderRadius: '50%', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(168, 85, 247, 0) 100%)', filter: 'blur(100px)',

      }} />

      <div style={{

        position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px',

        borderRadius: '50%', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(168, 85, 247, 0) 100%)', filter: 'blur(80px)',

      }} />



      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>

        <div style={{

          background: 'rgba(255, 255, 255, 0.8)', borderRadius: '24px', padding: '2.5rem',

          backdropFilter: 'blur(20px)', border: '1px solid rgba(124, 58, 237, 0.15)',

          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',

        }}>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>

            <div style={{

              width: '60px', height: '60px', margin: '0 auto 1rem', borderRadius: '16px',

              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',

              display: 'flex', alignItems: 'center', justifyContent: 'center',

            }}>

              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="8.5" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                <line x1="20" y1="8" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                <line x1="23" y1="11" x2="17" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              </svg>

            </div>

            <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#0f172a', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>Create Account</h1>

            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Join us today</p>

          </div>



          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            <div style={{ position: 'relative' }}>

              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />

              <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required

                style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', border: '1px solid #e2e8f0', borderRadius: '14px', fontSize: '0.95rem', background: 'rgba(255,255,255,0.8)', outline: 'none' }} />

            </div>

            <div style={{ position: 'relative' }}>

              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />

              <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required

                style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', border: '1px solid #e2e8f0', borderRadius: '14px', fontSize: '0.95rem', background: 'rgba(255,255,255,0.8)', outline: 'none' }} />

            </div>

            <div style={{ position: 'relative' }}>

              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />

              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required

                style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', border: '1px solid #e2e8f0', borderRadius: '14px', fontSize: '0.95rem', background: 'rgba(255,255,255,0.8)', outline: 'none' }} />

            </div>

            {error && (

              <p style={{ color: '#ef4444', fontSize: '0.875rem', margin: 0 }}>{error}</p>

            )}

            <button type="submit" disabled={loading} style={{

              width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', color: 'white',

              border: 'none', borderRadius: '16px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer',

              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1,

            }}>

              {loading ? 'Creating...' : 'Create Account'} {!loading && <ArrowRight size={18} />}

            </button>

          </form>



          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>

            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />

            <span style={{ color: '#64748b', fontSize: '0.875rem' }}>OR</span>

            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />

          </div>



          <button

            type="button"

            onClick={handleGoogleSignIn}

            style={{

              width: '100%', padding: '0.875rem', background: 'white', color: '#334155',

              border: '1px solid #e2e8f0', borderRadius: '16px', fontSize: '0.95rem', fontWeight: '600',

              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',

              transition: 'all 0.2s',

            }}

            onMouseEnter={(e) => {

              e.currentTarget.style.background = '#f8f8fc'

              e.currentTarget.style.borderColor = '#7c3aed'

            }}

            onMouseLeave={(e) => {

              e.currentTarget.style.background = 'white'

              e.currentTarget.style.borderColor = '#e2e8f0'

            }}

          >

            <svg width="20" height="20" viewBox="0 0 24 24">

              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>

              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>

              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"/>

              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>

            </svg>

            Sign in with Google

          </button>



          <p style={{ marginTop: '1.75rem', textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>

            Already have an account? <Link to="/login" style={{ color: '#7c3aed', fontWeight: '600', textDecoration: 'none' }}>Login</Link>

          </p>

        </div>

      </div>

    </div> 

  )

}
