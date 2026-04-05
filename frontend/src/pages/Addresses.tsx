import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Plus, MoreVertical, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const savedAddresses = [
  { id: 1, type: "Home", name: "John Doe", address: "123 Main St, Apt 4B, New York, NY 10001", phone: "+1 234 567 8900", isDefault: true, icon: Home },
  { id: 2, type: "Work", name: "John Doe", address: "456 Corporate Blvd, Suite 200, New York, NY 10002", phone: "+1 987 654 3210", isDefault: false, icon: Briefcase },
];

const Addresses = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 py-12 container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <MapPin className="w-6 h-6" /> Saved Addresses
          </h1>
          <Button className="gap-2 rounded-full">
            <Plus className="w-4 h-4" /> Add New
          </Button>
        </div>

        <div className="grid gap-4">
          {savedAddresses.map((addr) => (
            <div key={addr.id} className="bg-card border rounded-2xl p-5 relative group hover:shadow-md transition-shadow">
              <div className="absolute top-5 right-5">
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <addr.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{addr.type}</h3>
                    {addr.isDefault && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-sm text-foreground mb-1">{addr.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{addr.address}</p>
                  <p className="text-sm text-muted-foreground">Mobile: {addr.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Addresses;