import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { User, Package, MapPin, Heart, LogOut, Settings, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Package, label: "My Orders", desc: "Track, return, or buy things again", to: "/profile/my-orders" },
  { icon: Heart, label: "Wishlist", desc: "Your saved items", to: "/profile/wishlist" },
  { icon: MapPin, label: "Addresses", desc: "Manage delivery addresses", to: "/profile/addresses" },
  { icon: CreditCard, label: "Payment Methods", desc: "Manage cards and UPI", to: "/profile/payment-methods" },
  { icon: Settings, label: "Account Settings", desc: "Password, email, notifications", to: "/profile/account-settings" },
];

const fullName = "John Doe";
const email = "raj@gmail.com";
const phone = "+91 98765 43210";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 container mx-auto px-4 lg:px-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-card rounded-2xl border border-border p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-foreground text-xl">{fullName}</h2>
            <p className="text-sm text-muted-foreground">{email}</p>
            <p className="text-xs text-muted-foreground mt-1">{phone}</p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">12</p>
                <p className="text-[10px] text-muted-foreground">Orders</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">3</p>
                <p className="text-[10px] text-muted-foreground">Wishlist</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">2</p>
                <p className="text-[10px] text-muted-foreground">Addresses</p>
              </div>
            </div>

            <Button variant="outline" className="text-red-500 w-full mt-6 rounded-full gap-2 hover:cursor-pointer hover:scale-101 hover:bg-red-500 hover:text-white transition-all duration-100">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Menu */}
            <div>
              <h3 className="space-y-2 font-display font-semibold text-foreground text-lg mb-4">Quick Menu</h3>
              {menuItems.map((menuItem) => (
                <Link 
                  key={menuItem.label} 
                  to={menuItem.to} 
                  className="flex items-center gap-4 bg-card mb-2 rounded-xl border border-border p-4 hover:bg-secondary/50 hover:border-primary/50 hover:cursor-pointer hover:scale-101 transition-all duration-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <menuItem.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{menuItem.label}</p>
                    <p className="text-xs text-muted-foreground">{menuItem.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          {/* <div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-4">Recent Orders</h3>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between bg-card rounded-xl border border-border p-4">
                  <div>
                    <p className="font-medium text-foreground text-sm">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.date} • {order.items} items</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground text-sm">₹{order.total}</p>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Profile