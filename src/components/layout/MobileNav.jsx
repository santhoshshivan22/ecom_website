import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import useUIStore from '../../stores/useUIStore'

export default function MobileNav() {
  const { mobileMenuOpen, closeMobileMenu } = useUIStore()

  if (!mobileMenuOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu} />
      <div className="fixed right-0 top-0 h-full w-64 bg-bg p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button onClick={closeMobileMenu} className="p-2" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          <Link to="/" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/shop" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">Shop</Link>
          <Link to="/about" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">About</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">Contact</Link>
          <hr className="border-border" />
          <Link to="/account" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">My Account</Link>
          <Link to="/cart" onClick={closeMobileMenu} className="text-sm font-medium hover:text-primary">Cart</Link>
        </nav>
      </div>
    </div>
  )
}