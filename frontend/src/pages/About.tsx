import { Leaf, Heart, Truck, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const values = [
  { icon: Leaf, title: "Farm Fresh", desc: "We source directly from local farms ensuring the freshest produce reaches your table." },
  { icon: Heart, title: "Quality First", desc: "Every item goes through strict quality checks before it's listed on our platform." },
  { icon: Truck, title: "Fast Delivery", desc: "Get your groceries delivered within hours of placing your order." },
  { icon: ShieldCheck, title: "100% Safe", desc: "Hygienically packed and safely delivered following the highest standards." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">About Grocify</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're on a mission to make fresh, quality groceries accessible to every household.
              From farm-fresh fruits to premium meats, we bring the market to your doorstep.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-secondary/50">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Grocify started with a simple idea — everyone deserves fresh, affordable groceries without the hassle of crowded markets.
              Founded in 2024, we've partnered with hundreds of local farmers and suppliers to bring you the best produce, meats, and dairy products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve thousands of happy customers across India, delivering freshness and quality right to their doorstep.
              Our commitment to sustainability and supporting local farmers drives everything we do.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About