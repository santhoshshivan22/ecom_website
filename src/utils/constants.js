export const PRODUCTS_PER_PAGE = 12
export const FREE_SHIPPING_THRESHOLD = 999
export const TAX_RATE = 0.08
export const CURRENCY = 'INR'
export const CURRENCY_SYMBOL = '₹'
export const USD_TO_INR = 83
export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export const MOCK_PRODUCTS = [
  { id: 1, name: 'Silk Blend Blazer', slug: 'silk-blend-blazer', price: 4999, originalPrice: 7999, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop', category: 'Clothing', brand: 'Lux Couture', rating: 4.5, reviewCount: 128, description: 'Premium silk blend blazer with a modern tailored fit. Perfect for formal occasions and upscale events.', features: ['Silk Blend Fabric', 'Tailored Fit', 'Premium Lining', 'Dry Clean Only'], inStock: true, isNew: true, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Navy', 'Burgundy'] },
  { id: 2, name: 'Leather Tote Bag', slug: 'leather-tote-bag', price: 14999, originalPrice: 19999, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=600&fit=crop', category: 'Accessories', brand: 'UrbanThread', rating: 4.8, reviewCount: 86, description: 'Handcrafted genuine leather tote bag with spacious interior and premium brass hardware.', features: ['Genuine Leather', 'Spacious Interior', 'Brass Hardware', 'Adjustable Strap'], inStock: true, isNew: true, sizes: ['One Size'], colors: ['Tan', 'Black', 'Brown'] },
  { id: 3, name: 'Designer Kurta Set', slug: 'designer-kurta-set', price: 599, originalPrice: 999, image: 'https://images.unsplash.com/photo-1610030275166-2c2a0081e84c?w=600&h=600&fit=crop', category: 'Clothing', brand: 'Ethnic Elegance', rating: 4.2, reviewCount: 342, description: 'Elegant designer kurta set with intricate embroidery. Comfortable fit for festive and casual wear.', features: ['Premium Cotton', 'Hand Embroidery', 'Comfortable Fit', 'Machine Washable'], inStock: true, isNew: false, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Cream', 'Navy', 'Maroon'] },
  { id: 4, name: 'Premium Face Serum', slug: 'premium-face-serum', price: 1299, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop', category: 'Beauty', brand: 'GlowUp', rating: 4.6, reviewCount: 97, description: 'Advanced hydrating face serum with vitamin C and hyaluronic acid for radiant skin.', features: ['Vitamin C', 'Hyaluronic Acid', 'Paraben Free', 'Dermatologist Tested'], inStock: true, isNew: false, sizes: ['30ml', '50ml'], colors: ['Clear'] },
  { id: 5, name: 'Wireless Headphones', slug: 'wireless-headphones', price: 3499, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop', category: 'Electronics', brand: 'SoundCore', rating: 4.3, reviewCount: 215, description: 'Premium wireless noise-canceling headphones with exceptional sound quality and 30-hour battery life.', features: ['Active Noise Cancellation', '30-Hour Battery', 'Premium Sound', 'Bluetooth 5.3'], inStock: true, isNew: true, sizes: ['One Size'], colors: ['Black', 'Silver', 'Blue'] },
  { id: 6, name: 'Designer Handbag', slug: 'designer-handbag', price: 3499, originalPrice: 4999, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop', category: 'Accessories', brand: 'ChicBags', rating: 4.7, reviewCount: 63, description: 'Trendy designer handbag with multiple compartments. Perfect blend of style and functionality.', features: ['Premium Faux Leather', 'Multiple Pockets', 'Adjustable Strap', 'Gold Hardware'], inStock: false, isNew: false, sizes: ['One Size'], colors: ['Beige', 'Black', 'Pink'] },
  { id: 7, name: 'Running Shoes X1', slug: 'running-shoes-x1', price: 2499, originalPrice: 3999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', category: 'Sports', brand: 'FlexFit', rating: 4.4, reviewCount: 189, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for peak performance.', features: ['Responsive Cushioning', 'Breathable Mesh', 'Durable Outsole', 'Reflective Details'], inStock: true, isNew: false, sizes: ['6', '7', '8', '9', '10', '11'], colors: ['Black', 'White', 'Red'] },
  { id: 8, name: 'Linen Blend Dress', slug: 'linen-blend-dress', price: 1999, originalPrice: 2999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=600&fit=crop', category: 'Clothing', brand: 'ModaLux', rating: 4.1, reviewCount: 44, description: 'Elegant linen blend dress perfect for summer. Breathable fabric with a flattering silhouette.', features: ['Linen Blend', 'Breathable', 'Relaxed Fit', 'Machine Washable'], inStock: true, isNew: false, sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Beige', 'Sage'] },
  { id: 9, name: 'Smart Watch Pro', slug: 'smart-watch-pro', price: 8999, originalPrice: 12999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', category: 'Electronics', brand: 'TechWear', rating: 4.7, reviewCount: 156, description: 'Advanced smartwatch with health monitoring, GPS, and stunning AMOLED display.', features: ['AMOLED Display', 'Health Monitoring', 'GPS Enabled', '7-Day Battery'], inStock: true, isNew: true, sizes: ['One Size'], colors: ['Black', 'Silver', 'Rose Gold'] },
  { id: 10, name: 'Wool Blend Scarf', slug: 'wool-blend-scarf', price: 899, originalPrice: 1499, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop', category: 'Accessories', brand: 'CozyKnit', rating: 4.5, reviewCount: 78, description: 'Luxuriously soft wool blend scarf. Perfect accessory for cold days.', features: ['Wool Blend', 'Soft Texture', 'Lightweight', 'Gift Ready'], inStock: true, isNew: false, sizes: ['One Size'], colors: ['Gray', 'Camel', 'Black', 'Burgundy'] },
  { id: 11, name: 'Digital Camera', slug: 'digital-camera', price: 5499, originalPrice: 7999, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop', category: 'Electronics', brand: 'PhotoPro', rating: 4.6, reviewCount: 92, description: 'Compact digital camera with 4K video and advanced autofocus. Perfect for creators.', features: ['4K Video', 'Advanced Autofocus', 'Compact Design', 'WiFi Enabled'], inStock: true, isNew: true, sizes: ['One Size'], colors: ['Black'] },
  { id: 12, name: 'Floral Print Saree', slug: 'floral-print-saree', price: 3999, originalPrice: 6999, image: 'https://images.unsplash.com/photo-1610189012996-6a239e0b76f8?w=600&h=600&fit=crop', category: 'Clothing', brand: 'Ethnic Elegance', rating: 4.4, reviewCount: 118, description: 'Beautiful floral print saree with premium silk fabric. Includes matching blouse piece.', features: ['Premium Silk', 'Floral Print', 'Blouse Included', 'Traditional Design'], inStock: true, isNew: false, sizes: ['Free Size'], colors: ['Pink', 'Blue', 'Green'] },
]

export const MOCK_ORDERS = [
  { id: 'ORD-2024-001', date: '2024-01-15', status: 'Delivered', total: 10998, items: 3 },
  { id: 'ORD-2024-002', date: '2024-01-10', status: 'Shipped', total: 14999, items: 1 },
  { id: 'ORD-2024-003', date: '2024-01-05', status: 'Processing', total: 4297, items: 2 },
]

export const MOCK_CATEGORIES = [
  { id: 'electronics', name: 'Electronics', slug: 'electronics', count: 42 },
  { id: 'clothing', name: 'Clothing', slug: 'clothing', count: 28 },
  { id: 'beauty', name: 'Beauty', slug: 'beauty', count: 15 },
  { id: 'accessories', name: 'Accessories', slug: 'accessories', count: 33 },
  { id: 'sports', name: 'Sports', slug: 'sports', count: 22 },
]

export const MOCK_BRANDS = ['Lux Couture', 'UrbanThread', 'Ethnic Elegance', 'GlowUp', 'SoundCore', 'ChicBags', 'FlexFit', 'ModaLux', 'TechWear', 'CozyKnit', 'PhotoPro']

export const MOCK_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size', 'Free Size', 'Standard', 'Large', '6', '7', '8', '9', '10', '11', '30ml', '50ml']

export const MOCK_COLORS = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple', 'Orange', 'Brown', 'Gray', 'Navy', 'Beige', 'Cream', 'Maroon', 'Burgundy', 'Camel', 'Sage', 'Tan', 'Rose Gold', 'Silver', 'Clear']

export const MOCK_REVIEWS = [
  { id: 1, name: 'Priya Sharma', role: 'Verified Buyer', rating: 5, text: 'Absolutely love the quality! The silk blazer fits perfectly and the fabric feels luxurious. Will definitely order again.', date: '2 days ago', product: 'Silk Blend Blazer', avatar: 'S' },
  { id: 2, name: 'Rahul Verma', role: 'Premium Member', rating: 5, text: 'The leather bag is even better in person. Excellent craftsmanship and fast delivery. Highly recommended!', date: '1 week ago', product: 'Leather Tote Bag', avatar: 'R' },
  { id: 3, name: 'Ananya Iyer', role: 'Verified Buyer', rating: 4, text: 'Great value for money. The kurta set is beautiful and the embroidery is very detailed. Perfect for festivals.', date: '2 weeks ago', product: 'Designer Kurta Set', avatar: 'A' },
  { id: 4, name: 'Vikram Singh', role: 'Regular Customer', rating: 5, text: 'Best shopping experience ever! The face serum has done wonders for my skin. Customer service is excellent.', date: '3 weeks ago', product: 'Premium Face Serum', avatar: 'V' },
  { id: 5, name: 'Meera Patel', role: 'Verified Buyer', rating: 5, text: 'The headphones have amazing sound quality. Battery life is impressive. Worth every rupee!', date: '1 month ago', product: 'Wireless Headphones', avatar: 'M' },
  { id: 6, name: 'Arjun Reddy', role: 'New Customer', rating: 4, text: 'Fast shipping and great packaging. The running shoes are very comfortable for daily workouts.', date: '1 month ago', product: 'Running Shoes X1', avatar: 'A' },
]

export const MOCK_FLASH_SALES = [
  { id: 101, name: 'Designer Anarkali', slug: 'designer-anarkali', price: 2999, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1610030275166-2c2a0081e84c?w=400&h=400&fit=crop', category: 'Clothing', rating: 4.4, reviewCount: 210, inStock: true, discount: 50 },
  { id: 102, name: 'Running Shoes Pro', slug: 'running-shoes-pro', price: 3499, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', category: 'Sports', rating: 4.3, reviewCount: 189, inStock: true, discount: 42 },
  { id: 103, name: 'Smart Watch Series 5', slug: 'smart-watch-series-5', price: 4499, originalPrice: 7999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', category: 'Electronics', rating: 4.6, reviewCount: 86, inStock: true, discount: 44 },
  { id: 104, name: 'Summer Collection Dress', slug: 'summer-collection-dress', price: 1499, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop', category: 'Clothing', rating: 4.1, reviewCount: 44, inStock: true, discount: 40 },
]

export const MOCK_SEASONAL_COLLECTIONS = [
  {
    title: 'Summer Edit',
    subtitle: 'Light fabrics, bold colors',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
    link: '/shop?category=clothing'
  },
  {
    title: 'Monsoon Essentials',
    subtitle: 'Waterproof. Stylish. Ready.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    link: '/shop?category=clothing'
  },
  {
    title: 'Festive Couture',
    subtitle: 'Celebrate in elegance',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=600&fit=crop',
    link: '/shop?category=clothing'
  }
]

export const MOCK_BRAND_SHOWCASE = [
  { category: 'Clothing', product: 'Silk Blend Blazer' },
  { category: 'Electronics', product: 'Wireless Headphones' },
  { category: 'Accessories', product: 'Leather Tote Bag' },
  { category: 'Beauty', product: 'Premium Face Serum' },
]

export const MOCK_RELATED_PRODUCTS = ['silk-blend-blazer', 'leather-tote-bag', 'designer-kurta-set', 'running-shoes-x1']

export const MOCK_APP_FEATURES = [
  { icon: '📱', title: 'Exclusive Deals', description: 'App-only discounts and early access to sales' },
  { icon: '🔔', title: 'Smart Alerts', description: 'Get notified about price drops and restocks' },
  { icon: '⚡', title: 'Fast Checkout', description: 'One-tap purchase with saved preferences' },
  { icon: '🎯', title: 'Personalized', description: 'AI-powered recommendations just for you' },
]

export const MOCK_BENEFITS = [
  { title: 'Free Shipping', description: 'On all orders above ₹999', icon: '🚚' },
  { title: 'Secure Checkout', description: '256-bit SSL encryption', icon: '🔒' },
  { title: 'Easy Returns', description: '30-day hassle-free returns', icon: '↩️' },
  { title: '24/7 Support', description: 'Dedicated customer service', icon: '🎧' },
]
