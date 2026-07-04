import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatters'
import { FREE_SHIPPING_THRESHOLD, TAX_RATE } from '../../utils/constants'
import useCart from '../../stores/useCartStore'
import Button from '../ui/Button'

export default function CartSummary() {
  const items = useCart((s) => s.items)
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.99
  const tax = subtotal * TAX_RATE
  const total = subtotal + shipping + tax
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <div className="rounded-xl border border-border bg-bg p-6">
      <h3 className="text-lg font-semibold text-text-heading">Order Summary</h3>

      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-text">Subtotal</span>
          <span className="font-medium text-text-heading">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text">Shipping</span>
          <span className="font-medium text-text-heading">
            {shipping === 0 ? <span className="text-green-600">FREE</span> : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text">Estimated Tax</span>
          <span className="font-medium text-text-heading">{formatPrice(tax)}</span>
        </div>
        <hr className="border-border" />
        <div className="flex justify-between text-base font-bold">
          <span className="text-text-heading">Total</span>
          <span className="text-text-heading">{formatPrice(total)}</span>
        </div>
      </div>

      {subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD && (
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-text">
            Add {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping!
          </p>
        </div>
      )}

      <Link to="/checkout">
        <Button className="w-full mt-6" disabled={items.length === 0}>Proceed to Checkout</Button>
      </Link>
      <Link to="/shop">
        <Button variant="secondary" className="w-full mt-2">Continue Shopping</Button>
      </Link>
    </div>
  )
}
