import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import PromoBanner from '@/components/PromoBanner'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default Home