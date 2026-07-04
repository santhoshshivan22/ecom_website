import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (product) =>
        set((state) => {
          const exists = state.items.find((i) => i.slug === product.slug)
          return {
            items: exists
              ? state.items.filter((i) => i.slug !== product.slug)
              : [...state.items, product],
          }
        }),
      isInWishlist: (slug) => get().items.some((i) => i.slug === slug),
      clearWishlist: () => set({ items: [] }),
    }),
    { name: 'wishlist-storage' }
  )
)

export default useWishlistStore
