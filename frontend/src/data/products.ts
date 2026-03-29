import productApple from "@/assets/product-apple.png";
import productBroccoli from "@/assets/product-broccoli.png";
import productChicken from "@/assets/product-chicken.png";
import productEggs from "@/assets/product-eggs.png";
import productBanana from "@/assets/product-banana.png";
import productTomato from "@/assets/product-tomato.png";
import productMutton from "@/assets/product-mutton.png";
import productMilk from "@/assets/product-milk.png";

interface Product {
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    unit: string;
    rating: number;
    badge?: string;
    category: string;
    description: string;
}

const allProducts: Product[] = [
    { name: "Fresh Red Apples", price: 120, originalPrice: 160, image: productApple, unit: "1 kg", rating: 4.8, badge: "Bestseller", category: "Fruits", description: "Crisp, juicy Himalayan red apples sourced directly from Shimla orchards. Rich in fiber and antioxidants, perfect for snacking or baking." },
    { name: "Yellow Bananas", price: 45, image: productBanana, unit: "1 dozen", rating: 4.6, category: "Fruits", description: "Naturally ripened bananas packed with potassium and energy. Great for smoothies, desserts, or a quick healthy snack." },
    { name: "Organic Broccoli", price: 65, image: productBroccoli, unit: "500 g", rating: 4.5, category: "Vegetables", description: "Organically grown broccoli florets, rich in vitamins C and K. Steam, stir-fry, or add to salads for a nutritious boost." },
    { name: "Vine Tomatoes", price: 35, image: productTomato, unit: "500 g", rating: 4.4, category: "Vegetables", description: "Sun-ripened vine tomatoes bursting with flavor. Perfect for curries, salads, sauces, and everyday cooking." },
    { name: "Chicken Breast", price: 280, originalPrice: 340, image: productChicken, unit: "1 kg", rating: 4.7, badge: "20% Off", category: "Meat & Eggs", description: "Boneless, skinless chicken breast — lean, protein-packed and versatile. Ideal for grilling, curries, or meal prep." },
    { name: "Mutton Chops", price: 650, originalPrice: 780, image: productMutton, unit: "1 kg", rating: 4.8, badge: "Premium", category: "Meat & Eggs", description: "Premium quality goat mutton chops, tender and flavorful. Perfect for slow-cooked curries and biryanis." },
    { name: "Farm Fresh Eggs", price: 85, image: productEggs, unit: "Pack of 6", rating: 4.9, category: "Meat & Eggs", description: "Free-range farm eggs with rich golden yolks. High in protein and omega-3, perfect for breakfast or baking." },
    { name: "Fresh Milk", price: 55, image: productMilk, unit: "1 litre", rating: 4.7, category: "Dairy", description: "Farm-fresh whole milk, pasteurized and chilled. Creamy taste perfect for tea, coffee, cereals, and cooking." },
];

export { allProducts };
