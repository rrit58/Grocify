import { useState } from 'react'
import { Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { allProducts } from '@/data/products'

const filters = ["All", "Fruits", "Vegetables", "Meat & Eggs", "Dairy"];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = activeFilter === "All" || p.category === activeFilter;
    // const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-3">Our Shop</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Browse our complete collection of fresh groceries</p>
          </div>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${activeFilter === f ? "bg-primary text-primary-foreground" :
                            "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No products found.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Shop