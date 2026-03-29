import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const PromoBanner = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="relative rounded-3xl overflow-hidden p-8 lg:p-16 ml-10 mr-10 px-4 lg:px-8 z-10 bg-green-800">
        <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
          Limited Time Offer
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Get 30% Off on Your First Order
        </h2>
        <p className="text-white/80 mb-8 font-body">
          Use code <span className="font-bold text-white">FRESH30</span> at checkout. Fresh groceries delivered straight from the farm.
        </p>
        <Button asChild size="lg" className="bg-white text-green-900 hover:bg-white/90 rounded-full px-8 font-semibold gap-2">
          <Link to="/shop">Claim Offer<ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  )
}

export default PromoBanner