import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import CartDrawer from "./CartDrawer"; 
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isAuthOpen, setIsAuthOpen] = useState(false); // Auth Modal control state
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp & Login
  const [user, setUser] = useState(null); // Logged in user data state

  // Form fields state
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });

  const { cart } = useCart(); 
  const totalCartItems = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  // Check if user is already logged in on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("freshbite_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleInputChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  // Signup / Login Handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Fake Signup Action
      if (!authForm.name || !authForm.email || !authForm.password) return alert("All fields are required!");
      const userData = { name: authForm.name, email: authForm.email };
      localStorage.setItem("freshbite_user", JSON.stringify(userData));
      setUser(userData);
    } else {
      // Fake Login Action
      if (!authForm.email || !authForm.password) return alert("All fields are required!");
      const userData = { name: authForm.email.split("@")[0], email: authForm.email }; // Default name from email
      localStorage.setItem("freshbite_user", JSON.stringify(userData));
      setUser(userData);
    }
    setIsAuthOpen(false); // Close Modal after success
    setAuthForm({ name: "", email: "", password: "" }); // Reset Form
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("freshbite_user");
    setUser(null);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold">
            <span className="text-orange-500">Fresh</span>
            <span className="text-gray-900">Bite</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-orange-500 transition duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side (Desktop Controls) */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Shopping Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative hover:text-orange-500 p-2 transition-colors"
            >
              <ShoppingCart size={22} />
              {totalCartItems > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* User Profile / Auth Toggle */}
            {user ? (
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <span className="text-sm font-bold text-gray-700 capitalize">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors" title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button onClick={() => { setIsSignUp(true); setIsAuthOpen(true); }} className="hover:text-orange-500 p-2 transition-colors">
                <User size={22} />
              </button>
            )}

          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile User Icon */}
            {user ? (
              <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-1.5 rounded-full capitalize">Hi, {user.name}</span>
            ) : (
              <button onClick={() => { setIsSignUp(true); setIsAuthOpen(true); }} className="hover:text-orange-500 p-1">
                <User size={24} />
              </button>
            )}

            {/* Mobile View Cart Icon */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative hover:text-orange-500 p-2"
            >
              <ShoppingCart size={24} />
              {totalCartItems > 0 && (
                <span className="absolute top-0 right-0 bg-orange-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                  {totalCartItems}
                </span>
              )}
            </button>

            <button
              className="p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md border-t">
            <ul className="flex flex-col p-6 space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-orange-500 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              {user && (
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-left text-red-500 font-medium flex items-center gap-2 pt-2 border-t border-gray-100">
                  <LogOut size={18} /> Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </header>

      {/* Cart Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* ================= DYNAMIC SIGNUP / LOGIN MODAL ================= */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 relative border border-gray-100">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsAuthOpen(false)} 
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-gray-900">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {isSignUp ? "Sign up to start ordering healthy food" : "Log in to view your orders and profile"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={authForm.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={authForm.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={authForm.password}
                  onChange={handleInputChange}
                  required 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" 
                  placeholder="••••••••" 
                />
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition-all active:scale-98 mt-2">
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>

            {/* Toggle Footer text */}
            <div className="text-center mt-6 pt-4 border-t border-gray-50 text-xs text-gray-500">
              {isSignUp ? "Already have an account? " : "New to FreshBite? "}
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-orange-500 font-bold hover:underline"
              >
                {isSignUp ? "Log In" : "Create Account"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;