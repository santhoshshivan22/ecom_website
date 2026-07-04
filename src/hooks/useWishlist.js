import { useWishlist as useWishlistContext } from '../context/WishlistContext'

export default function useWishlist() {
  const context = useWishlistContext()
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}