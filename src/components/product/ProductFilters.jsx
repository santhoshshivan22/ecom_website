import { useMemo } from 'react'
import { MOCK_CATEGORIES } from '../../utils/constants'
import { ChevronDown } from 'lucide-react'

export default function ProductFilters({ filters, onChange }) {
  const categories = useMemo(() => MOCK_CATEGORIES, [])

  return (
    <div className="space-y-4 rounded-xl border border-border bg-bg p-4">
      <h3 className="font-semibold text-text-heading">Filters</h3>

      <div>
        <label className="mb-2 block text-sm font-medium text-text-heading">Category</label>
        <div className="relative">
          <select
            value={filters.category || ''}
            onChange={(e) => onChange('category', e.target.value)}
            className="w-full appearance-none rounded-lg border border-border px-3 py-2 pr-8 text-sm outline-none focus:border-primary"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-text pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-text-heading">Price Range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => onChange('minPrice', e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <span className="text-text">—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => onChange('maxPrice', e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-text-heading">Min Rating</label>
        <div className="flex gap-1">
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => onChange('rating', filters.rating === rating ? '' : rating)}
              className={`rounded px-2 py-1 text-sm ${
                filters.rating === rating
                  ? 'bg-primary text-white'
                  : 'border border-border hover:border-primary'
              }`}
            >
              {rating}+
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => onChange('inStock', e.target.checked)}
            className="rounded border-border"
          />
          <span className="text-sm font-medium">In Stock Only</span>
        </label>
      </div>
    </div>
  )
}
