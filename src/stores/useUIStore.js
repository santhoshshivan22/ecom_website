import { create } from 'zustand'

const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  searchOpen: false,
  notification: null,
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
  closeSearch: () => set({ searchOpen: false }),
  setNotification: (notification) => set({ notification }),
  clearNotification: () => set({ notification: null }),
}))

export default useUIStore
