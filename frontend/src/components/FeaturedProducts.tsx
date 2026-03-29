import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { allProducts } from '@/data/products'

const FeaturedProducts = () => {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* FeaturedProducts Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">Handpicked fresh items just for you</p>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm font-semibold text-primary hover:underline">
            View All →
          </Link>
        </div>

        {/* FeaturedProducts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts