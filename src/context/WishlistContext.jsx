import { createContext, useContext } from 'react'
import useWishlistStore from '../stores/useWishlistStore'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const { items, toggleItem, isInWishlist } = useWishlistStore()

  return (
    <WishlistContext.Provider value={{ items, toggleItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext)