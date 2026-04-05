import { useState } from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(allProducts.slice(0, 4));

  const removeItem = (name: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.name !== name));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 py-12 container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500 fill-red-500" /> My Wishlist ({wishlistItems.length})
        </h1>
        
        {wishlistItems.length > 0 ? (
          <div className="flex flex-col gap-4">
            {wishlistItems.map((product) => (
              <div key={product.name} className="flex flex-col sm:flex-row items-center gap-6 bg-card border rounded-2xl p-4 hover:shadow-md transition-all duration-200">
                {/* Image */}
                <Link to={`/product/${encodeURIComponent(product.name)}`} className="w-full sm:w-32 h-32 bg-secondary/50 rounded-xl flex items-center justify-center p-2 shrink-0 group">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </Link>
                
                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <Link to={`/product/${encodeURIComponent(product.name)}`} className="text-lg font-semibold hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{product.unit} • {product.category}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <span className="font-bold text-lg">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex sm:flex-col gap-3 w-full sm:w-40 mt-4 sm:mt-0 shrink-0">
                  <Button className="flex-1 sm:flex-none gap-2 rounded-full shadow-sm hover:translate-y-[-2px] transition-all">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 sm:flex-none gap-2 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 border-red-200 hover:border-red-300 transition-colors" 
                    onClick={() => removeItem(product.name)}
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border rounded-3xl bg-card/50 flex flex-col items-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground max-w-sm mb-8">Seems like you don't have wishes here. Explore our shop and make a wish!</p>
            <Button asChild className="rounded-full px-8">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default Wishlist;