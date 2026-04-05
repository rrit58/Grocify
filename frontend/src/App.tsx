import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Shop from "./pages/Shop.tsx"
import Categories from "./pages/Categories.tsx"
import Deals from "./pages/Deals.tsx"
import About from "./pages/About.tsx"
import SignIn from "./pages/SignIn.tsx"
import SignUp from "./pages/SignUp.tsx"
import Profile from "./pages/Profile.tsx"
import MyOrders from "./pages/MyOrders.tsx"
import Wishlist from "./pages/Wishlist.tsx"
import Addresses from "./pages/Addresses.tsx"
import PaymentMethods from "./pages/PaymentMethods.tsx"
import AccountSettings from "./pages/AccountSettings.tsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/my-orders" element={<MyOrders />} />
        <Route path="/profile/wishlist" element={<Wishlist />} />
        <Route path="/profile/addresses" element={<Addresses />} />
        <Route path="/profile/payment-methods" element={<PaymentMethods />} />
        <Route path="/profile/account-settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
