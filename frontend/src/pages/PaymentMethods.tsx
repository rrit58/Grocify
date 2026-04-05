import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CreditCard, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const savedCards = [
  { id: 1, type: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
  { id: 2, type: "MasterCard", last4: "8899", expiry: "08/25", isDefault: false },
];

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 py-12 container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <CreditCard className="w-6 h-6" /> Payment Methods
          </h1>
          <Button className="gap-2 rounded-full">
            <Plus className="w-4 h-4" /> Add Card
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {savedCards.map((card) => (
            <div key={card.id} className="bg-card border rounded-2xl p-6 relative flex flex-col justify-between min-h-[160px] hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center font-bold italic text-primary">
                  {card.type}
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div>
                <p className="font-mono text-lg tracking-widest mb-1 mt-6">
                  •••• •••• •••• {card.last4}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <p>Valid Thru: {card.expiry}</p>
                  {card.isDefault && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-secondary/30 border border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-secondary/50 transition-colors cursor-pointer min-h-[160px]">
            <Plus className="w-8 h-8 mb-2" />
            <p className="font-medium">Add New Payment Method</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PaymentMethods;