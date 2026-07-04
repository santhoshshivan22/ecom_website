import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #e2e8f0', padding: '2rem 1rem', marginTop: 'auto', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontWeight: 'bold', color: '#7c3aed', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Shopper's Stop</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Your one-stop shop for everything you need. Premium products, unbeatable prices.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#0f172a' }}>Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/shop" style={{ color: '#64748b', textDecoration: 'none' }}>All Products</Link></li>
              <li><Link to="/cart" style={{ color: '#64748b', textDecoration: 'none' }}>Cart</Link></li>
              <li><Link to="/wishlist" style={{ color: '#64748b', textDecoration: 'none' }}>Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#0f172a' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/contact" style={{ color: '#64748b', textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link to="/about" style={{ color: '#64748b', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/account" style={{ color: '#64748b', textDecoration: 'none' }}>My Account</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#0f172a' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#64748b' }}>
              <li>Mumbai, Maharashtra, India</li>
              <li>+91 1800-123-4567</li>
              <li>santhoshshivansasi@gmail.com</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
          &copy; {new Date().getFullYear()} Shopper's Stop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
