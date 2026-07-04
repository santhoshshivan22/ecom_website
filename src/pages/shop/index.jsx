import { useState, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, ChevronDown, X, Grid3X3, List, Tag } from 'lucide-react'
import ProductCard from '../../components/product/ProductCard'
import { MOCK_PRODUCTS, MOCK_CATEGORIES, SORT_OPTIONS, MOCK_BRANDS, MOCK_COLORS, MOCK_SIZES } from '../../utils/constants'
import { formatPrice } from '../../utils/formatters'
import styles from './Shop.module.css'
import useCartStore from '../../stores/useCartStore'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured')
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [visibleCount, setVisibleCount] = useState(8)
  const [viewMode, setViewMode] = useState('grid')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS]
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      )
    }
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand)
    }
    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes?.some((s) => selectedSizes.includes(s)))
    }
    if (selectedColors.length > 0) {
      result = result.filter((p) => p.colors?.some((c) => selectedColors.includes(c)))
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }
    return result
  }, [searchQuery, selectedCategory, selectedBrand, selectedSizes, selectedColors, sortBy, priceRange])

  const displayedProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const updateCategory = useCallback((slug) => {
    setSelectedCategory(slug)
    setVisibleCount(8)
    if (slug) setSearchParams({ category: slug })
    else setSearchParams({})
  }, [setSearchParams])

  const updateSort = useCallback((val) => {
    setSortBy(val)
    const params = new URLSearchParams(searchParams)
    if (val === 'featured') params.delete('sort')
    else params.set('sort', val)
    setSearchParams(params)
  }, [searchParams, setSearchParams])

  const clearAll = useCallback(() => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedBrand('')
    setSelectedSizes([])
    setSelectedColors([])
    setSortBy('featured')
    setPriceRange([0, 50000])
    setVisibleCount(8)
    setSearchParams({})
  }, [setSearchParams])

  const activeFilterCount = [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedSizes.length > 0 ? 'sizes' : null,
    selectedColors.length > 0 ? 'colors' : null,
    sortBy !== 'featured' ? sortBy : null,
    priceRange[0] > 0 || priceRange[1] < 50000 ? 'price' : null
  ].filter(Boolean).length

  const getCategoryLabel = () => {
    if (!selectedCategory) return 'All Products'
    const cat = MOCK_CATEGORIES.find(c => c.slug === selectedCategory)
    return cat?.name || 'Shop'
  }

  return (
    <div className={styles.page}>
      {/* Sticky Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Top Row */}
          <div className={styles.topRow}>
            {/* Title */}
            <div>
              <div className={styles.titleGroup}>
                <div className={styles.titleIcon}>SS</div>
                <h1 className={styles.title}>{getCategoryLabel()}</h1>
              </div>
              <p className={styles.subtitle}>
                <span className={styles.countBadge}>{filteredProducts.length}</span>
                {filteredProducts.length === 1 ? 'product' : 'products'} available
              </p>
            </div>

            {/* Toolbar */}
            <div className={styles.toolbar}>
              {/* Search */}
              <div className={styles.searchWrap}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(8) }}
                />
                <Search className={styles.searchIcon} size={16} />
                {searchQuery && (
                  <button className={styles.searchClear} onClick={() => { setSearchQuery(''); setVisibleCount(8) }}>
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Filter Toggle */}
              <button
                className={`${styles.filterBtn} ${showFilters ? styles.active : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className={styles.filterBadge}>{activeFilterCount}</span>
                )}
              </button>

              {/* Sort */}
              <div className={styles.sortWrapper}>
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => updateSort(e.target.value)}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className={styles.sortIcon} size={14} />
              </div>

              {/* View Toggle */}
              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className={styles.categoriesRow}>
            <button
              className={`${styles.categoryPill} ${selectedCategory === '' ? styles.active : ''}`}
              onClick={() => updateCategory('')}
            >
              All Products
            </button>
            {MOCK_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                className={`${styles.categoryPill} ${selectedCategory === cat.slug ? styles.active : ''}`}
                onClick={() => updateCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Filter Tags */}
          {(searchQuery || selectedCategory || sortBy !== 'featured') && (
            <div className={styles.activeFilters}>
              <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: '600', marginRight: '0.25rem' }}>Active:</span>
              {searchQuery && (
                <span className={styles.filterTag}>
                  Search: "{searchQuery}"
                  <span className={styles.filterTagX} onClick={() => { setSearchQuery(''); setVisibleCount(8) }}>
                    <X size={12} />
                  </span>
                </span>
              )}
              {selectedCategory && (
                <span className={styles.filterTag}>
                  <Tag size={12} />
                  {getCategoryLabel()}
                  <span className={styles.filterTagX} onClick={() => updateCategory('')}>
                    <X size={12} />
                  </span>
                </span>
              )}
              {sortBy !== 'featured' && (
                <span className={styles.filterTag}>
                  Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                  <span className={styles.filterTagX} onClick={() => updateSort('featured')}>
                    <X size={12} />
                  </span>
                </span>
              )}
              <button className={styles.clearAllBtn} onClick={clearAll}>Clear all</button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Sidebar Overlay (mobile) */}
        {showFilters && (
          <div className={styles.sidebarOverlay} onClick={() => setShowFilters(false)} />
        )}

        {/* Sidebar */}
        <aside className={styles.sidebar} style={{
          width: showFilters ? '300px' : '0px',
          overflow: 'hidden',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: showFilters ? 1 : 0,
        }}>
          <div className={styles.sidebarPanel}>
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>
                <SlidersHorizontal size={18} style={{ color: '#7c3aed' }} />
                Filters
              </h3>
              <button className={styles.sidebarClear} onClick={clearAll}>Clear all</button>
            </div>

            <div className={styles.sidebarBody}>
              {/* Price Range */}
              <div className={styles.filterSection}>
                <div className={styles.filterLabel}>
                  <span className={styles.filterAccent} />
                  Price Range
                </div>
                <div className={styles.priceInputs}>
                  <div className={styles.priceField}>
                    <span className={styles.priceSymbol}>₹</span>
                    <input
                      type="number"
                      className={styles.priceInput}
                      placeholder="Min"
                      value={priceRange[0] || ''}
                      onChange={(e) => setPriceRange([Number(e.target.value) || 0, priceRange[1]])}
                    />
                  </div>
                  <span className={styles.priceDash}>—</span>
                  <div className={styles.priceField}>
                    <span className={styles.priceSymbol}>₹</span>
                    <input
                      type="number"
                      className={styles.priceInput}
                      placeholder="Max"
                      value={priceRange[1] || ''}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value) || 50000])}
                    />
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className={styles.filterSection}>
                <div className={styles.filterLabel}>
                  <span className={styles.filterAccent} />
                  Categories
                </div>
                <div className={styles.categoryList}>
                  {MOCK_CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      className={`${styles.categoryBtn} ${selectedCategory === cat.slug ? styles.active : ''}`}
                      onClick={() => { updateCategory(cat.slug); setShowFilters(false) }}
                    >
                      <span>{cat.name}</span>
                      <span className={`${styles.categoryCount} ${selectedCategory === cat.slug ? styles.active : ''}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
               </div>

               {/* Brands */}
               <div className={styles.filterSection}>
                 <div className={styles.filterLabel}>
                   <span className={styles.filterAccent} />
                   Brand
                 </div>
                 <div className={styles.categoryList}>
                   {MOCK_BRANDS.map((brand) => (
                     <button
                       key={brand}
                       className={`${styles.categoryBtn} ${selectedBrand === brand ? styles.active : ''}`}
                       onClick={() => setSelectedBrand(selectedBrand === brand ? '' : brand)}
                     >
                       <span>{brand}</span>
                     </button>
                   ))}
                 </div>
               </div>

               {/* Sizes */}
               <div className={styles.filterSection}>
                 <div className={styles.filterLabel}>
                   <span className={styles.filterAccent} />
                   Size
                 </div>
                 <div className={styles.chipRow}>
                   {MOCK_SIZES.map((size) => (
                     <button
                       key={size}
                       className={`${styles.chip} ${selectedSizes.includes(size) ? styles.chipActive : ''}`}
                       onClick={() => {
                         setSelectedSizes((prev) =>
                           prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
                         )
                       }}
                     >
                       {size}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Colors */}
               <div className={styles.filterSection}>
                 <div className={styles.filterLabel}>
                   <span className={styles.filterAccent} />
                   Color
                 </div>
                 <div className={styles.chipRow}>
                   {MOCK_COLORS.map((color) => {
                     const colorMap = {
                       Black: '#1a1a2e',
                       White: '#f8f8f8',
                       Brown: '#92400e',
                       Silver: '#9ca3af',
                       Navy: '#1e3a8a',
                       Gray: '#6b7280',
                       Purple: '#7c3aed',
                       Blue: '#2563eb',
                       Green: '#16a34a',
                       Red: '#dc2626',
                     }
                     return (
                       <button
                         key={color}
                         className={`${styles.chip} ${styles.colorChip} ${selectedColors.includes(color) ? styles.chipActive : ''}`}
                         onClick={() => {
                           setSelectedColors((prev) =>
                             prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
                           )
                         }}
                         title={color}
                       >
                         <span
                           className={styles.colorDot}
                           style={{ background: colorMap[color] || '#ccc' }}
                         />
                         {color}
                       </button>
                     )
                   })}
                 </div>
               </div>
             </div>
           </div>
         </aside>

        {/* Products */}
        <main className={styles.productsArea}>
          {displayedProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3 className={styles.emptyTitle}>No products found</h3>
              <p className={styles.emptyText}>
                We couldn&apos;t find any products matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button className={styles.clearBtn} onClick={clearAll}>Clear All Filters</button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className={styles.productGrid}>
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.productList}>
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    background: 'white',
                    borderRadius: '20px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    padding: '1.25rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: '#f8f8f8'
                  }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#7c3aed',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}>
                        {product.category}
                      </span>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#1a1a2e',
                        margin: '0.35rem 0 0.5rem',
                        lineHeight: 1.3
                      }}>
                        {product.name}
                      </h3>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        lineHeight: 1.6,
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {product.description}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '1rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div>
                        <span style={{
                          fontSize: '1.5rem',
                          fontWeight: '800',
                          color: '#1a1a2e',
                          letterSpacing: '-0.02em'
                        }}>
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span style={{
                            fontSize: '0.95rem',
                            color: '#bbb',
                            textDecoration: 'line-through',
                            fontWeight: '500',
                            marginLeft: '0.5rem'
                          }}>
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          useCartStore.getState().addItem(product)
                        }}
                        disabled={!product.inStock}
                        style={{
                          padding: '0.65rem 1.5rem',
                          background: product.inStock
                            ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'
                            : '#e5e7eb',
                          color: product.inStock ? 'white' : '#9ca3af',
                          border: 'none',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: '700',
                          cursor: product.inStock ? 'pointer' : 'not-allowed',
                          boxShadow: product.inStock ? '0 4px 15px rgba(124, 58, 237, 0.3)' : 'none',
                          transition: 'all 0.2s',
                          fontFamily: 'inherit'
                        }}
                      >
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className={styles.loadMore}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount(prev => prev + 4)}
              >
                Show More ({filteredProducts.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
