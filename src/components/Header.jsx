import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react'
import useCartStore from '../stores/useCartStore'
import useWishlistStore from '../stores/useWishlistStore'
import useAuthStore from '../stores/useAuthStore'
import useUIStore from '../stores/useUIStore'

export default function Header() {
  const cartCount = useCartStore((s) => s.totalItems())
  const wishlistCount = useWishlistStore((s) => s.items.length)
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore()

  return (
    <header style={{ borderBottom: '1px solid #e2e8f0', padding: '1rem', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', textDecoration: 'none', color: '#7c3aed', fontFamily: 'var(--font-serif)' }}>
          Shopper's Stop
        </Link>

        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hidden md:flex">
          <Link to="/shop" style={{ textDecoration: 'none', color: '#333' }}>Shop</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/wishlist" style={{ position: 'relative', textDecoration: 'none', color: '#333' }} className="hidden md:block">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                background: '#7c3aed', color: 'white', borderRadius: '50%',
                width: '18px', height: '18px', fontSize: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" style={{ position: 'relative', textDecoration: 'none', color: '#333' }} className="hidden md:block">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                background: '#7c3aed', color: 'white', borderRadius: '50%',
                width: '18px', height: '18px', fontSize: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
          <Link to={isAuthenticated ? "/account" : "/login"} style={{ textDecoration: 'none', color: '#333' }} className="hidden md:block">
            <User size={20} />
          </Link>

          <button onClick={toggleMobileMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'md:hidden' }} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'
        }} className="md:hidden">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/shop" onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>Shop</Link>
            <Link to="/about" onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>About</Link>
            <Link to="/contact" onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>Contact</Link>
            <Link to="/wishlist" onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>Wishlist</Link>
            <Link to="/cart" onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>Cart</Link>
            <Link to={isAuthenticated ? "/account" : "/login"} onClick={toggleMobileMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '600' }}>
              {isAuthenticated ? 'Account' : 'Login'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
