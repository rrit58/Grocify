import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-groceries.jpg";

const HeroSection = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='bg-primary/5 grid lg:grid-cols-2 gap-10 items-center container mx-auto px-4 lg:px-8 py-8 lg:py-10'>
        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-green-800 dark:text-green-500 text-xs font-semibold mb-6">
            <Leaf className="w-3.5 h-3.5" /> Fresh & Organic
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Fresh Groceries,{" "}
            <span className="text-green-800 dark:text-green-500">Delivered</span> to Your Door
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-8 font-body">
            From farm-fresh fruits & vegetables to premium meats and eggs — get everything you need in one place.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <Button asChild size="lg" className="bg-green-800 dark:bg-green-600 text-white hover:bg-green-900 dark:hover:bg-green-700 rounded-full px-8 font-semibold gap-2">
              <Link to="/shop">Shop Now <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8  font-semibold border-border text-foreground hover:bg-secondary">
              <Link to="/deals">View Deals</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Truck, text: "Free Delivery" },
              { icon: Shield, text: "100% Fresh" },
              { icon: Leaf, text: "Organic Options" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-md text-green-800 dark:text-green-500">
                <Icon className="w-4 h-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-card">
          <img
            src={heroImage}
            alt="Fresh groceries including fruits, vegetables, chicken and eggs"
            width={1280}
            height={720}
            className="w-full h-60 sm:h-72 md:h-80 lg:h-[580px] object-cover rounded-3xl"
          />
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
            <p className="text-xs text-orange-600 dark:text-orange-400">Today's offer</p>
            <p className="font-display font-bold text-foreground text-lg">Up to 40% Off</p>
            <p className="text-xs text-green-800 dark:text-green-500 font-semibold">on fresh vegetables</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection