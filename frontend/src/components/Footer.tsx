import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import favicon from '/favicon.png'

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/categories" },
  { label: "Deals", to: "/deals" },
  { label: "About Us", to: "/about" },
]

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className='container mx-auto px-4 lg:px-8 py-4 lg:py-6'>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-15">
          {/* Brand */}
          <div>
            <Link to="/" className='flex items-center'>
              <img src={favicon} alt="Favicon" className='h-18 w-18 object-cover rounded-full' />
              <span className="text-xl font-bold text-green-700">Grocify</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted online grocery store delivering fresh fruits, vegetables, meats, and dairy to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {["Fruits", "Vegetables", "Meat & Poultry", "Eggs", "Dairy"].map((link) => (
                <li key={link}>
                  <Link to="/categories" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                123 Fresh Market Street, Mumbai, India
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 shrink-0" />
                hello@grocify.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Grocify. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer