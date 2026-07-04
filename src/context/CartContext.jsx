import { createContext, useContext } from 'react'
import useCartStore from '../stores/useCartStore'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const { items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal } = useCartStore()

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)