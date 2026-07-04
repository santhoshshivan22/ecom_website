import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { formatPrice } from '../../utils/formatters'
import useCart from '../../stores/useCartStore'
import Button from '../ui/Button'
import useWishlist from '../../stores/useWishlistStore'

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart()
  const toggleItem = useWishlist((s) => s.toggleItem)

  return (
    <div className="flex gap-4 rounded-xl border border-border bg-bg p-4">
      <Link to={`/product/${item.slug}`} className="shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link to={`/product/${item.slug}`} className="font-medium text-text-heading hover:text-primary">
            {item.name}
          </Link>
          <p className="mt-1 text-sm text-text">{item.category}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.slug, item.quantity - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.slug, item.quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-text-heading">{formatPrice(item.price * item.quantity)}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" onClick={() => toggleItem(item)} aria-label="Add to wishlist">
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => removeItem(item.slug)} aria-label="Remove">
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
