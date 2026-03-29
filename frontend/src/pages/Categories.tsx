import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import catFruits from '@/assets/cat-fruits.png'
import catVeggies from '@/assets/cat-veggies.png'
import catNonveg from '@/assets/cat-nonveg.png'
import catDairy from '@/assets/cat-dairy.png'

const categories = [
  { name: "Fruits", image: catFruits, count: "24 items", description: "Farm-fresh seasonal & exotic fruits delivered daily.", bg: "bg-orange-50 dark:bg-orange-950/30" },
  { name: "Vegetables", image: catVeggies, count: "32 items", description: "Organic and locally sourced vegetables for your kitchen.", bg: "bg-green-50 dark:bg-green-950/30" },
  { name: "Meat & Eggs", image: catNonveg, count: "18 items", description: "Premium quality chicken, mutton, and farm-fresh eggs.", bg: "bg-red-50 dark:bg-red-950/30" },
  { name: "Dairy", image: catDairy, count: "15 items", description: "Fresh milk, curd, cheese, and more delivered chilled.", bg: "bg-yellow-50 dark:bg-yellow-950/30" },
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
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, index) => (
              <Link key={index} to="/shop" className="group flex flex-col sm:flex-row items-center gap-6 rounded-3xl bg-card border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 text-center sm:text-left">
                <div className={`shrink-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full ${cat.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                  <img src={cat.image} alt={cat.name} className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cat.name}</h2>
                  <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-fit mx-auto sm:mx-0">
                    View {cat.count} <ArrowRight className="w-4 h-4" />
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