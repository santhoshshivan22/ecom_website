import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-primary">Shopper's Stop</h3>
            <p className="mt-4 text-sm text-text">Your one-stop shop for everything you need.</p>
          </div>
          <div>
            <h4 className="font-semibold text-text-heading">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-primary">All Products</Link></li>
              <li><Link to="/shop?category=electronics" className="hover:text-primary">Electronics</Link></li>
              <li><Link to="/shop?category=clothing" className="hover:text-primary">Clothing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-heading">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/account/orders" className="hover:text-primary">Order Status</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-heading">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-text">
          &copy; {new Date().getFullYear()} Shopper's Stop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}