import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import Button from '../components/ui/Button'

export default function OrderConfirmation() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
      <h1 className="mt-6 text-3xl font-bold text-text-heading">Order Confirmed!</h1>
      <p className="mt-4 text-text">Thank you for your purchase. We've sent a confirmation email with your order details.</p>
      <p className="mt-2 text-sm text-text">Order #ORD-2024-001</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/account/orders"><Button variant="secondary">View Orders</Button></Link>
        <Link to="/shop"><Button>Continue Shopping</Button></Link>
      </div>
    </div>
  )
}
