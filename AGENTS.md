# AGENTS.md — Shopper's Stop Ecommerce

## Commands
- `npm run dev` — starts Vite dev server (auto-assigns port if 5173 busy)
- `npm run build` — production build (Vite 8 + rolldown)
- `npm run lint` — ESLint flat config
- **No test runner configured** — do not run tests unless one is added

## Tech Stack
- React 19 + Vite 8 + React Router v7
- Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@theme` in CSS)
- Zustand (persist middleware, stores in `src/stores/*.js`)
- React Query v5 + Axios
- React Hook Form + Zod
- Lucide React icons

## Architecture Rules

### Currency = INR
All prices are in **Indian Rupees**. Do not change currency symbols or add USD conversion without explicit request.
- `formatPrice()` in `src/utils/formatters.js` defaults to `INR`
- Mock product prices in `src/utils/constants.js` are INR amounts

### Styling: CSS Modules over inline styles
- **Use CSS Modules** (`.module.css`) for new components
- Existing pages may use inline styles — refactor them gradually, not via shotgun rewrite
- `src/index.css` holds Tailwind import + custom `@theme` vars
- Do **not** inline Tailwind utility classes in JSX unless proven necessary

### Relative imports only
No path aliases configured. All imports use relative paths (`../../`).

### Folder conventions
- `src/layouts/` — app shell wrappers (MainLayout)
- `src/components/layout/` — Header, Footer, Navbar
- `src/pages/home/` — Home page sections (HeroBanner, FeaturedCategories, etc.)
- `src/pages/shop/` — Shop page + CSS Module
- `src/stores/` — Zustand stores (`.js` files)
- `src/context/` — React context providers wrapping the app in `App.jsx`

### Duplicate files exist
- `ProtectedRoute` in both `src/components/ProtectedRoute.jsx` and `src/components/auth/ProtectedRoute.jsx`
- Hero exists as both `src/components/Hero.jsx` and `src/pages/home/HeroBanner.jsx`
- Use the version already wired in routes, don’t add more duplicates

### React 19 specifics
- No manual React import needed for JSX (new transform)
- ESLint rules: `react-refresh/only-export-components` triggers on context files — suppress with comment if unavoidable

## Verification order
1. `npm run build` (must pass before any PR/commit)
2. `npm run lint` (fix all errors, warnings optional)
3. Manual browser test at the dev server URL shown in terminal

## Pitfalls
- Port collisions on `npm run dev` — Vite auto-rolls to next port, check terminal output
- `useEffect` with `setState` triggers ESLint error — add eslint-disable comment rather than restructuring working code
- Zustand `get()` is allowed in action creators but ESLint flags unused `get` parameter — prefix with `_get` if needed
- Tailwind v4 classes like `bg-primary` only work if color is declared in `@theme` block

## Premium Fashion Ecommerce Vision

I want to build a premium fashion e-commerce website using React + Vite.

The website should provide a shopping experience similar to leading fashion e-commerce platforms, but with an original design and branding. Do not copy any copyrighted layouts, logos, or assets.

### Design Requirements:

* Modern, clean, premium UI
* White background with accent colors (black, purple, or orange)
* Fully responsive (mobile, tablet, desktop)
* Smooth animations and hover effects
* Professional typography
* High-quality placeholder fashion images
* Fast loading and reusable components

### Home Page Sections (in order):

1. Promotional announcement bar
2. Sticky navigation bar
3. Hero banner with promotional offers
4. Shop by Category
5. Trending Collections
6. New Arrivals
7. Best Sellers
8. Seasonal Collections
9. Brand Showcase
10. Featured Products
11. Limited-Time Deals
12. Customer Reviews
13. Newsletter Subscription
14. Mobile App Promotion
15. Footer with useful links

### Navigation should include:

* Home
* Men
* Women
* Kids
* Beauty
* Accessories
* Sale
* Search
* Wishlist
* Cart
* Profile

### Product Card Fields:

* Product image
* Brand
* Product name
* Rating
* Original price
* Discounted price
* Discount percentage
* Wishlist button
* Add to Cart button
* Quick View button

### Shop Page Filters:

* Search functionality
* Category filtering
* Brand filtering
* Price filtering
* Size filtering
* Color filtering
* Sorting options
* Pagination or infinite scrolling

### Constraints:

* Use reusable React components and placeholder product data
* Focus only on creating a beautiful, production-quality frontend
* Do not implement the backend or authentication yet
