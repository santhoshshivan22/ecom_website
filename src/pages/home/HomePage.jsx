import PromotionalBar from './PromotionalBar'
import Hero from '../../components/Hero'
import FeaturedCategories from './FeaturedCategories'
import TrendingCollections from './TrendingCollections'
import NewArrivals from './NewArrivals'
import BestSellers from './BestSellers'
import SeasonalCollections from './SeasonalCollections'
import BrandShowcase from './BrandShowcase'
import FeaturedProducts from './FeaturedProducts'
import FlashSale from './FlashSale'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import MobileAppPromo from './MobileAppPromo'

export default function HomePage() {
  return (
    <>
      <PromotionalBar />
      <Hero />
      <FeaturedCategories />
      <TrendingCollections />
      <NewArrivals />
      <BestSellers />
      <SeasonalCollections />
      <BrandShowcase />
      <FeaturedProducts />
      <FlashSale />
      <Testimonials />
      <Newsletter />
      <MobileAppPromo />
    </>
  )
}
