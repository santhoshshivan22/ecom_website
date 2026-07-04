import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Search, User, Menu, X, Sparkles, Shield } from 'lucide-react'
import useCart from '../../stores/useCartStore'
import useUIStore from '../../stores/useUIStore'
import { useUser } from '@clerk/clerk-react'

const ADMIN_EMAIL = 'santhoshshivansasi@gmail.com'

export default function Header() {
  const totalItems = useCart((s) => s.totalItems())
  const { toggleMobileMenu, mobileMenuOpen, toggleSearch, searchOpen } = useUIStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { user, isSignedIn } = useUser()
  const isAdmin = isSignedIn && user?.primaryEmailAddress?.emailAddress === ADMIN_EMAIL

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled
          ? '1px solid rgba(0, 0, 0, 0.08)'
          : '1px solid rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
              color: '#334155'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            {mobileMenuOpen ? <X style={{ height: '24px', width: '24px' }} /> : <Menu style={{ height: '24px', width: '24px' }} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.25)'
            }}>
              <Sparkles size={18} color="white" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }} />
            </div>
            <span style={{
              fontSize: '1.35rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '-0.02em'
            }}>
              Shopper's Stop
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=clothing&subcategory=men', label: 'Men' },
              { to: '/shop?category=clothing&subcategory=women', label: 'Women' },
              { to: '/shop?category=clothing&subcategory=kids', label: 'Kids' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#334155',
                  transition: 'color 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
                onMouseLeave={(e) => e.target.style.color = '#334155'}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sale"
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '700',
                color: '#dc2626',
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(220, 38, 38, 0.05))',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)'
                e.target.style.color = 'white'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(220, 38, 38, 0.05))'
                e.target.style.color = '#dc2626'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Sale
            </Link>
          </nav>

          {/* Right Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* Search */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {searchOpen && (
                <input
                  autoFocus
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    position: 'absolute',
                    right: '100%',
                    marginRight: '12px',
                    width: '240px',
                    padding: '10px 14px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'all 0.3s ease'
                  }}
                />
              )}
              <button
                onClick={toggleSearch}
                aria-label="Search"
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  transition: 'all 0.2s ease',
                  color: '#334155'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'
                  e.currentTarget.style.color = '#7c3aed'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                  e.currentTarget.style.color = '#334155'
                }}
              >
                <Search style={{ height: '20px', width: '20px' }} />
              </button>
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
                color: '#334155',
                position: 'relative',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'
                e.currentTarget.style.color = '#7c3aed'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = '#334155'
              }}
            >
              <Heart style={{ height: '20px', width: '20px' }} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Cart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
                color: '#334155',
                position: 'relative',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'
                e.currentTarget.style.color = '#7c3aed'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = '#334155'
              }}
            >
              <ShoppingCart style={{ height: '20px', width: '20px' }} />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '4px',
                  right: '4px',
                  height: '18px',
                  minWidth: '18px',
                  padding: '0 4px',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                  color: 'white',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
                  border: '2px solid white',
                  lineHeight: 1
                }}>
                  {totalItems}
                </span>
              )}
            </Link>

             {/* Account */}
             <Link
               to="/account"
               aria-label="Account"
               style={{
                 background: 'none',
                 border: 'none',
                 cursor: 'pointer',
                 padding: '10px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 borderRadius: '10px',
                 transition: 'all 0.2s ease',
                 color: '#334155',
                 textDecoration: 'none'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'
                 e.currentTarget.style.color = '#7c3aed'
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.background = 'none'
                 e.currentTarget.style.color = '#334155'
               }}
             >
               <User style={{ height: '20px', width: '20px' }} />
             </Link>

             {isAdmin && (
               <Link
                 to="/admin"
                 aria-label="Admin"
                 style={{
                   background: 'none',
                   border: 'none',
                   cursor: 'pointer',
                   padding: '10px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   borderRadius: '10px',
                   transition: 'all 0.2s ease',
                   color: '#7c3aed',
                   textDecoration: 'none'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'}
                 onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
               >
                 <Shield style={{ height: '20px', width: '20px' }} />
               </Link>
             )}
          </div>
        </div>
      </div>
    </header>
  )
}
