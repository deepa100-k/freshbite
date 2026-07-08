import React, { useState, useEffect } from "react";
import { ShoppingCart, Flame, Clock, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext"; 

// FEAT: Image imports exactly as per your files list
import offers1 from "../assets/offers-1.webp"; 
import offers2 from "../assets/offers-2.jpg"; 
import offers3 from "../assets/offers-3.jpg"; 
import offers4 from "../assets/offers-4.jpg"; 

const SpecialOffer = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  // 1. Dynamic Offers Array matched with your explicit asset names
  const offersList = [
    {
      id: 101,
      name: "Lean & Green Salad Protein Bowl",
      category: "Fitness Fuel",
      price: 299,
      originalPrice: 420,
      rating: 4.9,
      calories: "340 Cal",
      image: offers1,
      desc: "Supercharge your day with raw fiber and high proteins. Loaded with organic quinoa, crunchy kale, roasted chickpeas, Hass avocado, and microgreens tossed in zesty lemon tahini dressing."
    },
    {
      id: 102,
      name: "Keto High-Protein Macro Box",
      category: "Weight Loss",
      price: 449,
      originalPrice: 599,
      rating: 5.0,
      calories: "490 Cal",
      image: offers2,
      desc: "Perfectly designed for low-carb fat burn. Premium grilled paneer/chicken skewers served alongside olive-tossed broccoli, zucchini ribbons, bell peppers, and a handful of activated pumpkin seeds."
    },
    {
      id: 103,
      name: "Guilt-Free Sourdough Cheat Pizza",
      category: "Healthy Cravings",
      price: 399,
      originalPrice: 549,
      rating: 4.8,
      calories: "620 Cal",
      image: offers3,
      desc: "Who says cheat meals can't be healthy? Enjoy our handmade 100% whole-wheat sourdough thin crust, topped with zero-sugar Italian marinara sauce, low-fat artisanal mozzarella, and garden-fresh veggies."
    },
    {
      id: 104,
      name: "Cold-Pressed Detox & Immunity Kit",
      category: "Fresh Elixirs",
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      calories: "120 Cal",
      image: offers4,
      desc: "A powerful combination of 3 cold-pressed boosters: Celery Detox Green, Skin-Glow Beetroot Active, and Vitamin C Citrus Shield. 100% raw, completely water-free, and no added sugar or preservatives."
    }
  ];

  // 2. Countdown Timer Logic (8 Hours standard remaining time)
  const [timeLeft, setTimeLeft] = useState(8 * 60 * 60); 

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-16 bg-[#F8FFF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles size={16} /> Exclusive Deals
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Today's <span className="text-green-600">Mega Savings</span> Offers
          </h2>
          
          {/* Universal Countdown Ticker */}
          <div className="flex items-center gap-2 mt-4 bg-orange-50 border border-orange-200/60 rounded-2xl p-2.5 max-w-xs mx-auto justify-center">
            <Clock size={16} className="text-orange-600 " />
            <span className="text-gray-600 font-medium text-xs sm:text-sm">Offers Expire In:</span>
            <span className="font-mono text-base sm:text-lg font-bold text-orange-600 tracking-wider">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Tabless Responsive Layout: Stacked on Mobile, 2-Columns Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offersList.map((offer) => {
            // Cart Context Integration per individual card
            const cartItem = cart.find((i) => i.id === offer.id);
            const itemQuantity = cartItem ? cartItem.quantity : 0;

            return (
              <div 
                key={offer.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-green-100/40 flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image Portion */}
                <div className="relative w-full sm:w-44 md:w-52 h-52 sm:h-auto min-h-[220px] flex-shrink-0 bg-gray-50">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-xl shadow flex items-center gap-1">
                    <Flame size={12} fill="currentColor" />
                    {offer.id === 102 ? "BESTSELLER" : "HOT DEAL"}
                  </div>
                </div>

                {/* Content & Descriptions */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                      {offer.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mt-1 leading-snug">
                      {offer.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {offer.desc}
                    </p>
                    <div className="flex items-center gap-2.5 mt-3 text-[11px] sm:text-xs text-gray-600 font-semibold">
                      <span>🔥 {offer.calories}</span>
                      <span>•</span>
                      <span className="text-yellow-500">⭐ {offer.rating.toFixed(1)} Rating</span>
                    </div>
                  </div>

                  {/* Pricing and Isolated Cart Buttons */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-green-700">
                        ₹{offer.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs sm:text-sm">
                        ₹{offer.originalPrice}
                      </span>
                    </div>

                    {/* Interactive Increment/Decrement Syncing */}
                    {itemQuantity > 0 ? (
                      <div className="flex items-center justify-between bg-emerald-900 text-white w-28 px-2 py-1.5 rounded-xl shadow-sm">
                        <button
                          onClick={() => removeFromCart(offer.id)}
                          className="font-black hover:text-emerald-300 px-2 text-sm transition-transform active:scale-75"
                        >
                          —
                        </button>
                        <span className="font-bold text-xs select-none">{itemQuantity}</span>
                        <button
                          onClick={() => addToCart(offer)}
                          className="font-black hover:text-emerald-300 px-2 text-sm transition-transform active:scale-75"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(offer)}
                        className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-green-100 transition-all duration-300 active:scale-95 text-xs sm:text-sm"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;