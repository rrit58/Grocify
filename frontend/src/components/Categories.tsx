import React from 'react'
import catFruits from "@/assets/cat-fruits.png";
import catVeggies from "@/assets/cat-veggies.png";
import catNonveg from "@/assets/cat-nonveg.png";
import catDairy from "@/assets/cat-dairy.png";

const categories = [
  { name: "Fruits", image: catFruits, count: "24 items", bg: "bg-orange-50" },
  { name: "Vegetables", image: catVeggies, count: "32 items", bg: "bg-green-50" },
  { name: "Dairy", image: catDairy, count: "15 items", bg: "bg-yellow-50" },
  { name: "Meat & Eggs", image: catNonveg, count: "18 items", bg: "bg-red-50" },
];

const Categories = () => {
  return (
    <section className='py-16 lg:py-20'>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Browse our wide selection of fresh groceries organized just for you
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`group relative rounded-2xl ${cat.bg} p-6 flex flex-col items-center text-center transition-shadow hover:shadow-card-hover cursor-pointer`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display font-semibold text-foreground text-lg">{cat.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cat.count}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories