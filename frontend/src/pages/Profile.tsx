import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { User, Package, MapPin, Heart, LogOut, Settings, CreditCard, ChevronRight, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { useAuth } from '@/contexts/AuthContext'

const menuItems = [
  { icon: Package, label: "My Orders", desc: "Track, return, or buy things again", to: "/profile/my-orders" },
  { icon: Heart, label: "Wishlist", desc: "Your saved items", to: "/profile/wishlist" },
  { icon: MapPin, label: "Addresses", desc: "Manage delivery addresses", to: "/profile/addresses" },
  { icon: CreditCard, label: "Payment Methods", desc: "Manage cards and UPI", to: "/profile/payment-methods" },
  { icon: Settings, label: "Account Settings", desc: "Password, email, notifications", to: "/profile/account-settings" },
];

const Profile = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const user = JSON.parse(localStorage.getItem('grocify_user') || '{}')

  const handleLogout = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await logout();
    if (res.success) {
      toast.success(res.message)
      navigate("/login")
    } else {
      toast.error(res.message)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 lg:py-16">
        <div className="flex gap-8 mx-auto px-4 lg:px-8">
          {/* Profile Card */}
          <div className="flex-1 bg-card rounded-2xl border border-border p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display font-bold text-foreground text-xl">{user.fullName}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <Link to="/profile/my-orders" className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">12</p>
                <p className="text-[10px] text-muted-foreground">Orders</p>
              </Link>
              <Link to="/profile/wishlist" className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">3</p>
                <p className="text-[10px] text-muted-foreground">Wishlist</p>
              </Link>
              <Link to="/profile/addresses" className="bg-secondary/50 rounded-xl p-3">
                <p className="font-bold text-foreground">2</p>
                <p className="text-[10px] text-muted-foreground">Addresses</p>
              </Link>
            </div>

            <Button variant="outline" onClick={handleLogout} disabled={isLoading} className="cursor-pointer text-red-500 w-full mt-6 rounded-full gap-2 hover:cursor-pointer dark:hover:text-white dark:hover:bg-red-500 hover:scale-101 hover:bg-red-500 hover:text-white transition-all duration-100">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4" />} Sign Out
            </Button>
          </div>

          {/* Quick Menu */}
          <div className='flex-2'>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Quick Menu</h3>
            {menuItems.map((menuItem) => (
              <Link key={menuItem.label} to={menuItem.to} className="flex items-center gap-4 bg-card mb-2 rounded-xl border border-border p-4 hover:bg-secondary/50 hover:border-primary/50 hover:cursor-pointer hover:scale-101 transition-all duration-100">
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
      </section >
      <Footer />
    </div >
  )
}

export default Profile