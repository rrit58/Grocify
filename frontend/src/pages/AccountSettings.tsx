import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Settings, User, Mail, Phone, Lock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 py-12 container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Settings className="w-6 h-6" /> Account Settings
        </h1>

        <div className="bg-card border rounded-2xl p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">Personal Information</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-[150px_1fr] items-center gap-2 sm:gap-4">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input type="text" defaultValue="John Doe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="grid sm:grid-cols-[150px_1fr] items-center gap-2 sm:gap-4">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </label>
                <input type="email" defaultValue="raj@gmail.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div className="grid sm:grid-cols-[150px_1fr] items-center gap-2 sm:gap-4">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Phone
                </label>
                <input type="tel" defaultValue="+91 98765 43210" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2 pt-4">Security</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-[150px_1fr] items-center gap-2 sm:gap-4">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Password
                </label>
                <div className="flex gap-2">
                  <input type="password" value="********" disabled className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm opacity-50 cursor-not-allowed" />
                  <Button variant="outline">Change</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2 pt-4">Preferences</h2>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Order Notifications</p>
                  <p className="text-xs text-muted-foreground">Get updates on your delivery status</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end gap-3">
            <Button variant="outline" className="rounded-full">Cancel</Button>
            <Button className="rounded-full">Save Changes</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AccountSettings;