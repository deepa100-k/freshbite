import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Restaurants from "./pages/Restaurants";
import About from "./pages/About";
import RestaurantDetail from "./pages/RestaurantDetail"; 
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; // Ensure this is imported properly
import OrderStatus from "./pages/OrderStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-status" element={<OrderStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;