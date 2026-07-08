import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { foodData } from "../data/foodData"; 
import { restaurantsData } from "../data/restaurantsData";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { cart, addToCart, removeFromCart } = useCart();
  const [foodTypeFilter, setFoodTypeFilter] = useState("all");

  const currentRestaurant = useMemo(() => {
    return restaurantsData.find((res) => String(res.id) === String(id));
  }, [id]);

  const restaurantMenu = useMemo(() => {
    if (!currentRestaurant) return [];
    
    let filteredList = foodData.filter(item => String(item.restaurantId) === String(id));
    
    if (filteredList.length === 0) {
      const sliceStart = (Number(id) * 3) % (foodData.length - 6);
      filteredList = foodData.slice(sliceStart, sliceStart + 7);
    }

    if (foodTypeFilter === "veg") {
      return filteredList.filter(item => item.isVeg === true || item.name.toLowerCase().includes("veg"));
    }
    if (foodTypeFilter === "nonveg") {
      return filteredList.filter(item => item.isVeg === false || !item.name.toLowerCase().includes("veg"));
    }
    
    return filteredList;
  }, [id, currentRestaurant, foodTypeFilter]);

  if (!currentRestaurant) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-24">
          <p className="text-4xl mb-4">🏪❌</p>
          <h2 className="text-xl font-bold text-stone-800">Kitchen Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-stone-900 antialiased font-sans">
      <Navbar />

      {/* Hero Banner Section */}
      <section 
        className="relative py-20 px-6 lg:px-12 bg-cover bg-center text-white overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(28, 25, 23, 0.95) 40%, rgba(28, 25, 23, 0.6) 100%), url(${currentRestaurant.image})` 
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
            {currentRestaurant.tag || "Premium Partner"}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-4 tracking-tight">
            {currentRestaurant.name}
          </h1>
          <p className="text-stone-300 text-sm mt-3 max-w-xl flex flex-wrap items-center gap-3 font-medium">
            <span className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded text-xs">
              ★ {currentRestaurant.rating}
            </span>
            <span>•</span>
            <span className="text-white font-semibold">{currentRestaurant.cuisine}</span>
            <span>•</span>
            <span>🕒 {currentRestaurant.deliveryTime || "25-30 mins"}</span>
            <span>•</span>
            <span>₹{currentRestaurant.costForTwo} for two</span>
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Offers Section Box */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-stone-400 tracking-widest uppercase mb-4">Deals For You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-orange-100 bg-orange-50/50 p-4 rounded-xl flex items-center space-x-3">
              <span className="text-2xl">🉐</span>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">50% OFF up to ₹100</h4>
                <p className="text-[11px] text-stone-500">Use code WELCOME50 | Above ₹199</p>
              </div>
            </div>
            <div className="border border-emerald-100 bg-emerald-50/40 p-4 rounded-xl flex items-center space-x-3">
              <span className="text-2xl">🚴‍♂️</span>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Free Delivery Bonus</h4>
                <p className="text-[11px] text-stone-500">On all premium orders above ₹500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar Pills */}
        <div className="flex items-center space-x-3 border-b border-stone-200/60 pb-4 mb-8">
          <button 
            onClick={() => setFoodTypeFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${foodTypeFilter === "all" ? "bg-stone-900 border-stone-900 text-white" : "bg-white text-stone-600 hover:bg-stone-50"}`}
          >
            All Menu
          </button>
          <button 
            onClick={() => setFoodTypeFilter("veg")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center space-x-1.5 ${foodTypeFilter === "veg" ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white text-stone-600 hover:bg-stone-50"}`}
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block"></span>
            <span>Veg Only</span>
          </button>
          <button 
            onClick={() => setFoodTypeFilter("nonveg")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center space-x-1.5 ${foodTypeFilter === "nonveg" ? "bg-red-600 border-red-600 text-white" : "bg-white text-stone-600 hover:bg-stone-50"}`}
          >
            <span className="w-2 h-2 bg-red-400 rounded-full inline-block"></span>
            <span>Non-Veg</span>
          </button>
        </div>

        {/* Rich Detailed Menu Cards Loop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurantMenu.length > 0 ? (
            restaurantMenu.map((item) => {
              const cartItem = cart.find((i) => i.id === item.id);
              const itemQuantity = cartItem ? cartItem.quantity : 0;
              
              // Mocking extra dynamic item data agar aapke backend/data mein na ho
              const itemRating = item.rating || (4 + Math.random()).toFixed(1);
              const totalRatings = item.reviewsCount || Math.floor(Math.random() * 80) + 15;
              const calories = item.calories || Math.floor(Math.random() * 250) + 200;

              return (
                <div key={item.id} className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between relative group">
                  
                  {/* Top Extra Metadata Layer */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                    {Number(itemRating) >= 4.5 && (
                      <span className="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded font-black tracking-wider uppercase shadow-sm w-max">
                        ⭐ Bestseller
                      </span>
                    )}
                  </div>

                  <div>
                    {/* Food Image Area */}
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-stone-100 mb-4 relative">
                      <img 
                        src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60"} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute bottom-2 right-2 text-[10px] px-2 py-0.5 font-bold rounded-md shadow-md ${item.isVeg || item.name.toLowerCase().includes("veg") ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
                        {item.isVeg || item.name.toLowerCase().includes("veg") ? "🟢 VEG" : "🔴 NON-VEG"}
                      </span>
                    </div>

                    {/* Item Name & Rating Row */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-extrabold text-stone-900 text-base lg:text-lg group-hover:text-orange-500 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                    </div>

                    {/* Food Stars Rating & Calories Details */}
                    <div className="flex items-center space-x-2 mt-1 mb-2 text-xs font-semibold">
                      <span className="text-amber-500">★ {itemRating}</span>
                      <span className="text-stone-300">({totalRatings} orders)</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-400 font-medium">🔥 {calories} kcal</span>
                    </div>

                    {/* Food Description */}
                    <p className="text-xs text-stone-500 leading-relaxed font-normal line-clamp-2 mt-1">
                      {item.description || "Freshly prepared with handpicked premium ingredients, organic farm produce, and authentic herbs/spices."}
                    </p>

                    {/* Price Tag */}
                    <p className="text-stone-950 font-black text-lg mt-3">₹{item.price}</p>
                  </div>

                  {/* Add To Cart Controls Footer */}
                  <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-stone-400 tracking-wide uppercase">Customizable</span>
                    
                    {itemQuantity > 0 ? (
                      <div className="flex items-center justify-between bg-orange-500 text-white w-24 px-2 py-1.5 rounded-xl shadow-md">
                        <button onClick={() => removeFromCart(item.id)} className="font-black px-1 text-sm hover:text-orange-200 transition-colors">—</button>
                        <span className="text-xs font-bold select-none">{itemQuantity}</span>
                        <button onClick={() => addToCart(item)} className="font-black px-1 text-sm hover:text-orange-200 transition-colors">+</button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="bg-stone-900 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-orange-500 transition-colors shadow-sm tracking-wide"
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-stone-200/60 p-6">
              <p className="text-3xl mb-2">🍽️</p>
              <h4 className="text-sm font-bold text-stone-700">No Dishes Available</h4>
              <p className="text-xs text-stone-400 mt-1">Is category mein filhal koi item is kitchen mein active nahi hai.</p>
            </div>
          )}
        </div>

        {/* FSSAI licence section stamp */}
        <div className="mt-16 pt-6 border-t border-stone-200/60 bg-stone-100/50 p-4 rounded-xl flex items-center space-x-3 text-stone-400">
          <span className="text-xs bg-stone-300 text-stone-700 font-bold px-2 py-0.5 rounded">FSSAI Licence</span>
          <p className="text-[11px] font-medium tracking-wide">No. 23324009000124 • Merchant production monitored under strict food grade health laws.</p>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default RestaurantDetail;