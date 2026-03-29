import catFruits from "@/assets/cat-fruits.png";
import catVeggies from "@/assets/cat-veggies.png";
import catNonveg from "@/assets/cat-nonveg.png";
import catDairy from "@/assets/cat-dairy.png";

const categories = [
  { name: "Fruits", image: catFruits, count: "24 items", bg: "bg-orange-50 dark:bg-orange-950/30" },
  { name: "Vegetables", image: catVeggies, count: "32 items", bg: "bg-green-50 dark:bg-green-950/30" },
  { name: "Dairy", image: catDairy, count: "15 items", bg: "bg-yellow-50 dark:bg-yellow-950/30" },
  { name: "Meat & Eggs", image: catNonveg, count: "18 items", bg: "bg-red-50 dark:bg-red-950/30" },
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
              className="group relative bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 cursor-pointer"
            >
              <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full ${cat.bg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-16 h-16 lg:w-24 lg:h-24 object-contain drop-shadow-sm"
                />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{cat.count}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories