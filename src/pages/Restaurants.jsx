import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom"; // 1. Link tag import kiya
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { restaurantsData } from "../data/restaurantsData";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  // Compute performance optimization filter
  const filteredRestaurants = useMemo(() => {
    let list = restaurantsData;

    if (vegOnly) {
      list = list.filter(res => res.isVeg);
    }

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      list = list.filter(res => 
        res.name.toLowerCase().includes(query) || 
        res.cuisine.toLowerCase().includes(query)
      );
    }

    return list;
  }, [searchQuery, vegOnly]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-stone-900 font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Elite Dynamic Header Toolbar */}
        <header className="mb-12 border-b border-stone-200/60 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Partner Restaurants
            </h1>
            <p className="mt-2 text-base text-stone-500 max-w-md">
              Discover certified clean kitchens cooking organic, macro-tracked fresh food near your location.
            </p>
          </div>

          {/* Luxury Integrated Action Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:max-w-md">
            {/* Pure Veg Toggle Pill */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide border transition-all ${
                vegOnly 
                  ? "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm" 
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${vegOnly ? "bg-emerald-500" : "bg-stone-300"}`} />
              Pure Veg Only 🟢
            </button>

            {/* Micro Search Input */}
            <div className="relative flex-1 group">
              <input
                type="text"
                placeholder="Search kitchen or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder-stone-400 shadow-sm"
              />
              <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-400">
                🔍
              </span>
            </div>
          </div>
        </header>

        {/* Clean Premium Grid System */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((res) => (
              
              /* 2. Pure card markup ko Link tag ke andar wrap kiya dynamic URL path ke sath */
              <Link 
                to={`/restaurant/${res.id}`} 
                key={res.id} 
                className="block cursor-pointer"
              >
                <article
                  className="group bg-white rounded-2xl h-full overflow-hidden border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Aspect Box Canvas */}
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                      <img
                        src={res.image}
                        alt={res.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.error(`Failed to load image at: ${res.image}`);
                          e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80";
                        }}
                      />
                      
                      {/* Upper Status Tag Badge */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-stone-900/90 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                          {res.tag}
                        </span>
                        {res.isVeg && (
                          <span className="bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-md shadow-sm">
                            Veg
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description Window */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-stone-900 tracking-tight transition-colors group-hover:text-emerald-800">
                        {res.name}
                      </h2>
                      <p className="text-stone-400 text-xs mt-1.5 font-medium tracking-wide">
                        {res.cuisine}
                      </p>
                    </div>
                  </div>

                  {/* Swiggy/Zomato Grade Metrics Footprint */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-bold text-stone-600">
                      {/* Star Rating Section */}
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-white ${
                        res.rating >= 4.5 ? "bg-emerald-600" : "bg-amber-500"
                      }`}>
                        <span>★</span>
                        <span className="text-[11px] font-extrabold">{res.rating}</span>
                      </div>

                      {/* Time Metric */}
                      <div className="flex items-center gap-1 text-stone-500 font-medium">
                        🕒 <span>{res.deliveryTime}</span>
                      </div>

                      {/* Budget Metric */}
                      <div className="text-stone-800 font-extrabold">
                        ₹{res.costForTwo} <span className="text-stone-400 font-medium text-[11px]">for two</span>
                      </div>
                    </div>
                  </div>

                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex flex-col items-center justify-center p-6">
            <span className="text-4xl mb-3">🏪</span>
            <p className="text-stone-800 font-semibold text-base">No kitchen matching filters</p>
            <p className="text-stone-400 text-xs mt-1">Try resetting the "Pure Veg Only" switch or update search keywords.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;