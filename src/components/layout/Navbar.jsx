import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="hidden border-b border-border bg-surface/90 backdrop-blur-md lg:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center gap-8 py-3">
          <li><Link to="/" className="text-sm font-medium hover:text-primary">Home</Link></li>
          <li><Link to="/shop?category=clothing&subcategory=men" className="text-sm font-medium hover:text-primary">Men</Link></li>
          <li><Link to="/shop?category=clothing&subcategory=women" className="text-sm font-medium hover:text-primary">Women</Link></li>
          <li><Link to="/shop?category=clothing&subcategory=kids" className="text-sm font-medium hover:text-primary">Kids</Link></li>
          <li><Link to="/shop?category=beauty" className="text-sm font-medium hover:text-primary">Beauty</Link></li>
          <li><Link to="/shop?category=accessories" className="text-sm font-medium hover:text-primary">Accessories</Link></li>
          <li><Link to="/sale" className="text-sm font-medium text-red-500 hover:text-red-600">Sale</Link></li>
        </ul>
      </div>
    </nav>
  )
}