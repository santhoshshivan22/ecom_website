import ProductCard from './ProductCard'

export default function ProductGrid({ products, loading, emptyMessage = 'No products found' }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-bg animate-pulse">
            <div className="aspect-square rounded-t-xl bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-3 w-1/3 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gray-200" />
              <div className="h-6 w-1/4 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!products?.length) {
    return <p className="py-12 text-center text-text">{emptyMessage}</p>
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
