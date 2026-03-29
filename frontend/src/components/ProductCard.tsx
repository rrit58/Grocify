import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
// import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  rating: number;
  badge?: string;
}

const ProductCard = ({ name, price, originalPrice, image, unit, rating, badge }: ProductCardProps) => {
  // const { addToCart } = useCart();

  return (
    <Link to={`/product/${encodeURIComponent(name)}`} className="group bg-card rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-card-hover">
      {/* Image area */}
      <div className="relative bg-secondary/50 p-4 flex items-center justify-center h-48">
        {badge && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-orange-400 text-white text-[10px] font-bold uppercase">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={512}
          height={512}
          className="h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1.5">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-muted-foreground">{rating}</span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1 hover:text-primary transition-colors">{name}</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">{unit}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-foreground">₹{price}</span>
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through">₹{originalPrice}</span>
            )}
          </div>
          <button
            // onClick={() => addToCart({ name, price, originalPrice, image, unit, rating, badge })}
            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
