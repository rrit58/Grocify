import { Percent, Clock, Truck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import PromoBanner from '@/components/PromoBanner'
import Footer from '@/components/Footer'
import productApple from '@/assets/product-apple.png'
import productChicken from '@/assets/product-chicken.png'
import productMutton from '@/assets/product-mutton.png'

const dealProducts = [
  { name: "Fresh Red Apples", price: 120, originalPrice: 160, image: productApple, unit: "1 kg", rating: 4.8, badge: "25% Off" },
  { name: "Chicken Breast", price: 280, originalPrice: 340, image: productChicken, unit: "1 kg", rating: 4.7, badge: "20% Off" },
  { name: "Mutton Chops", price: 650, originalPrice: 780, image: productMutton, unit: "1 kg", rating: 4.8, badge: "17% Off" },
];

const perks = [
  { icon: Percent, title: "Best Prices", desc: "Unbeatable deals on fresh produce" },
  { icon: Clock, title: "Limited Time", desc: "Deals refresh every week" },
  { icon: Truck, title: "Free Delivery", desc: "On orders above ₹499" },
];

const Deals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-3">Today's Deals</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Grab the freshest groceries at the best prices</p>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {perks.map((perk) => (
              <div key={perk.title} className="text-center p-4 rounded-2xl bg-secondary/50">
                <perk.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-display font-semibold text-foreground text-sm">{perk.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Deal Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
            {dealProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default Deals