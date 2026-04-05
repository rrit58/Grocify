import { useState } from "react";
import { Package, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ordersData } from "@/data/products";

const filterOptions = ["All", "Delivered", "Pending", "Cancelled"];

const MyOrders = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleOrder = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const filteredOrders = ordersData.filter((order) => {
    if (filter === "All") return true;
    return order.status === filter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 container mx-auto px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Package /> My Orders
        </h1>

        {/* Filters */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
          {filterOptions.map((filterOption) => (
            <Button key={filterOption} variant={filterOption === filter ? "default" : "outline"} onClick={() => setFilter(filterOption)} className="rounded-full shrink-0">
              {filterOption}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredOrders.length > 0 ? filteredOrders.map((order) => (
            <div key={order.id} className="border rounded-xl p-4 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOrder(order.id)}>
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.date}
                  </p>
                </div>

                <div className="text-right flex-1 pr-4">
                  <p className="font-bold">₹{order.total}</p>
                  <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${order.status === "Delivered"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}>
                    {order.status}
                  </span>
                </div>

                <ChevronDown className={`transition-transform duration-300 text-muted-foreground ${expanded === order.id ? "rotate-180" : ""}`} />
              </div>

              {/* Expand Section */}
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${expanded === order.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden mt-4 border-t pt-1 space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <p className="text-muted-foreground">{item.name} x {item.qty}</p>
                      <p className="font-medium">₹{item.price}</p>
                    </div>
                  ))}

                  <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-dashed">
                    <span>Total</span>
                    <span>₹{order.total}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-2">
                    <Button variant="outline" className="flex-1 rounded-full">View Details</Button>
                    <Button variant="outline" className="flex-1 rounded-full">Reorder</Button>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-12 border rounded-xl bg-card/50">
              <p className="text-muted-foreground">No orders found.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyOrders;