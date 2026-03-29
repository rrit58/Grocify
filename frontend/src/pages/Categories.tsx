import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import catFruits from '@/assets/cat-fruits.png'
import catVeggies from '@/assets/cat-veggies.png'
import catNonveg from '@/assets/cat-nonveg.png'
import catDairy from '@/assets/cat-dairy.png'

const categories = [
  { name: "Fruits", image: catFruits, count: "24 items", description: "Farm-fresh seasonal & exotic fruits delivered daily.", bg: "bg-orange-50" },
  { name: "Vegetables", image: catVeggies, count: "32 items", description: "Organic and locally sourced vegetables for your kitchen.", bg: "bg-green-50" },
  { name: "Meat & Eggs", image: catNonveg, count: "18 items", description: "Premium quality chicken, mutton, and farm-fresh eggs.", bg: "bg-red-50" },
  { name: "Dairy", image: catDairy, count: "15 items", description: "Fresh milk, curd, cheese, and more delivered chilled.", bg: "bg-yellow-50" },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-3">Categories</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Explore our curated grocery categories</p>
          </div>

          {/* Category Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link to="/shop" className={`group flex items-center gap-6 rounded-2xl ${cat.bg} p-6 lg:p-8 transition-shadow hover:shadow-card-hover`}>
                <img src={cat.image} alt={cat.name} className="w-28 h-28 lg:w-36 lg:h-36 object-contain group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">{cat.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{cat.description}</p>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    {cat.count} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Categories