import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { foodData, MENU_CATEGORIES } from "../data/foodData"; // Make sure MENU_CATEGORIES includes "Fruits"
import { useCart } from "../context/CartContext"; 

// Utility Function: Added 'Fruits' into round-robin layout sequence for 'All' tab
const generateInterleavedData = (rawItems, maxPerCategory = 9) => {
  // FEAT: Included "Fruits" here so they interleave on the default dashboard view
  const categories = ["Salads", "Bowls", "Drinks", "Soups", "Wraps", "Fruits"];
  const matrix = categories.map(cat => 
    rawItems.filter(item => item.category === cat).slice(0, maxPerCategory)
  );

  const interleaved = [];
  for (let i = 0; i < maxPerCategory; i++) {
    matrix.forEach(bucket => {
      if (bucket[i]) interleaved.push(bucket[i]);
    });
  }
  return interleaved;
};

const Menu = () => {
  const [searchParams] = useSearchParams(); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const { cart, addToCart, removeFromCart } = useCart(); 

  // CONNECTIVITY JADU: Catching navigation filters sent via Home layout cards
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      if (typeParam.includes("Salad")) setSelectedCategory("Salads");
      else if (typeParam.includes("Bowl") && !typeParam.includes("Fruit")) setSelectedCategory("Bowls");
      else if (typeParam.includes("Fruit")) setSelectedCategory("Fruits"); // FEAT: Direct redirect for Fruit Bowl mapping
      else if (typeParam.includes("Smoothie") || typeParam.includes("Shake")) setSelectedCategory("Drinks");
      else if (typeParam.includes("Toast") || typeParam.includes("Wraps")) setSelectedCategory("Wraps");
      else if (typeParam.includes("Soup")) setSelectedCategory("Soups");
      else setSelectedCategory("All");
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredAndSortedData = useMemo(() => {
    let items = selectedCategory === "All" 
      ? generateInterleavedData(foodData, 9) 
      : foodData.filter(item => item.category === selectedCategory);

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      items = items.filter(item => item.name.toLowerCase().includes(query));
    }

    if (sortOption === "lowToHigh") {
      return [...items].sort((a, b) => a.price - b.price);
    }
    if (sortOption === "highToLow") {
      return [...items].sort((a, b) => b.price - a.price);
    }

    return items;
  }, [selectedCategory, searchQuery, sortOption]);

  const displayedData = useMemo(() => {
    return filteredAndSortedData.slice(0, visibleCount);
  }, [filteredAndSortedData, visibleCount]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-stone-900 font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Modern Minimalist Header Section */}
        <header className="mb-12 border-b border-stone-200/60 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
              Our Green Menu
            </h1>
            <p className="mt-2 text-base text-stone-500 max-w-md">
              Clean, nutrient-dense, and freshly prepared organic meals delivered straight to your plate.
            </p>
          </div>
          
          {/* Professional Integrated Search Bar */}
          <div className="relative w-full md:max-w-xs group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-emerald-600 transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(9); }}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm placeholder-stone-400 shadow-sm"
            />
          </div>
        </header>

        {/* Dynamic Filter Controls Layout */}
        <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 border-b border-stone-100 pb-6">
          
          {/* Premium Category Switchers */}
          <nav className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setVisibleCount(9); }}
                  className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-900 text-white shadow-sm shadow-emerald-900/10 scale-[1.02]"
                      : "bg-white text-stone-600 border border-stone-200/80 hover:border-stone-300 hover:text-stone-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          {/* Interactive Sorting Action Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 mr-2">Sort by:</span>
            
            <button
              onClick={() => setSortOption("default")}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                sortOption === "default"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              Recommended
            </button>

            <button
              onClick={() => setSortOption(sortOption === "lowToHigh" ? "default" : "lowToHigh")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                sortOption === "lowToHigh"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              Price: Low to High
            </button>

            <button
              onClick={() => setSortOption(sortOption === "highToLow" ? "default" : "highToLow")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                sortOption === "highToLow"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
              }`}
            >
              Price: High to Low
            </button>
          </div>
        </section>

        {/* Content Render Layer */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-200/50 overflow-hidden p-0 animate-pulse flex flex-col justify-between h-[360px]">
                <div>
                  <div className="bg-stone-200 aspect-video w-full" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-stone-200 rounded w-1/4" />
                    <div className="h-5 bg-stone-200 rounded w-3/4" />
                    <div className="h-3 bg-stone-200 rounded w-full" />
                  </div>
                </div>
                <div className="p-6 pt-0 flex justify-between items-center">
                  <div className="h-6 bg-stone-200 rounded w-1/5" />
                  <div className="h-8 bg-stone-200 rounded-xl w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : displayedData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {displayedData.map((item) => {
              const cartItem = cart.find(i => i.id === item.id);
              const itemQuantity = cartItem ? cartItem.quantity : 0;
              
              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/50 hover:shadow-xl hover:shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="backdrop-blur-md bg-white/80 text-stone-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-white/40">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-lg font-bold text-stone-900 tracking-tight transition-colors group-hover:text-emerald-800 line-clamp-1">
                        {item.name}
                      </h2>
                      <p className="text-stone-400 text-xs mt-1.5 leading-relaxed">
                        100% organic harvest featuring raw microgreens, vibrant local seasonal herbs, and essential house macros.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                      <span className="font-black text-xl text-stone-900">
                        ₹{item.price}
                      </span>
                      
                      {itemQuantity > 0 ? (
                        <div className="flex items-center justify-between bg-emerald-900 text-white w-24 px-2 py-1.5 rounded-xl shadow-sm border border-emerald-950">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="font-bold text-sm hover:text-emerald-300 active:scale-75 transition-all px-1"
                          >
                            —
                          </button>
                          <span className="font-bold text-xs select-none">{itemQuantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="font-bold text-sm hover:text-emerald-300 active:scale-75 transition-all px-1"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-stone-900 text-white hover:bg-emerald-800 active:scale-95 px-5 py-2 rounded-xl transition-all font-bold text-xs tracking-wide shadow-sm"
                        >
                          Add to order
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 rounded-2xl bg-white border border-stone-200/60 shadow-sm flex flex-col items-center justify-center p-6">
            <span className="text-4xl mb-3">🥦</span>
            <p className="text-stone-800 font-semibold text-base">No wellness items found</p>
            <p className="text-stone-400 text-xs mt-1">We couldn't find matches for "{searchQuery}". Try modifying your filters.</p>
          </div>
        )}

        {!isLoading && filteredAndSortedData.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="bg-white text-stone-800 border border-stone-300 hover:border-stone-400 hover:bg-stone-50 active:scale-[0.98] font-bold px-8 py-3 rounded-xl shadow-sm transition-all text-sm"
            >
              Load More Items
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Menu;