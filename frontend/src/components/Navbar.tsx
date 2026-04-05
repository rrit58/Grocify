import { useState } from 'react'
import { useTheme } from "./theme-provider"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Search, User, ShoppingCart, Sun, Moon } from 'lucide-react'
import favicon from "/favicon.png"
import { Button } from './ui/button'

const totalItems = 44;

const links = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Categories", to: "/categories" },
    { label: "Deals", to: "/deals" },
    { label: "About", to: "/about" },
];

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
            <div className='flex justify-between container mx-auto px-4 lg:px-8 h-16 lg:h-20 items-center'>
                {/* Logo */}
                <Link to="/" className='flex items-center'>
                    <img src={favicon} alt="Favicon" className='h-18 w-18 object-cover rounded-full' />
                    <span className="text-xl font-bold text-green-800 dark:text-green-500">Grocify</span>
                </Link>

                {/* Desktop Nav */}
                <div className='flex gap-8 items-center'>
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={`text-md font-medium transition-colors ${location.pathname === link.to ? "scale-105 duration-300 text-green-700 dark:text-green-500" : "transition-all duration-300 text-muted-foreground hover:scale-105 hover:text-green-700 dark:hover:text-green-500"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Action */}
                <div className='flex gap-5 items-center'>
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className='hidden sm:flex w-10 h-10 items-center justify-center rounded-full hover:bg-secondary transition-colors'
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
                    </button>
                    <button
                        onClick={() => navigate("/search")}
                        className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full hover:bg-secondary transition-colors"
                    >
                        <Search className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                        onClick={() => navigate("/cart")}
                        className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5 text-foreground" />
                        {totalItems > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-orange-400 text-white text-[10px] font-bold flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    
                    {isLoggedIn ? (
                        <button
                            onClick={() => navigate("/profile")}
                            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full hover:bg-secondary transition-colors border border-primary/20 bg-primary/5"
                        >
                            <User className="w-5 h-5 text-foreground" />
                        </button>
                    ) : (
                        <Button
                            onClick={() => {
                                setIsLoggedIn(true);
                                navigate("/login");
                            }}
                            className="hidden sm:flex bg-green-800 dark:bg-green-500 text-white items-center justify-center rounded-full px-5 py-2 text-sm font-bold hover:bg-green-900 dark:hover:bg-green-600 hover:text-white hover:scale-105 transition-all duration-200"
                            variant="default"
                        >
                            Login
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar