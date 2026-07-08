import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { featuredMeals } from "../data/featuredMeals";
import { useCart } from "../context/CartContext"; // FEAT: Cart Context connected

const FeaturedMeals = () => {
  const { cart, addToCart, removeFromCart } = useCart(); // Destructured cart actions

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Featured Meals
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
            Healthy Meals You'll Love
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Freshly prepared meals made with premium organic ingredients.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredMeals.map((meal) => {
            // Check if this specific meal already exists in the context cart array
            const cartItem = cart.find((i) => i.id === meal.id);
            const itemQuantity = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={meal.id}
                className="bg-[#F8FFF6] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />

                  {/* <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow text-gray-600 hover:bg-red-500 hover:text-white transition duration-200">
                    <Heart size={18} />
                  </button> */}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                        {meal.name}
                      </h3>

                      <div className="flex items-center gap-1 text-yellow-500 shrink-0 mt-1">
                        <Star size={16} fill="currentColor" />
                        <span className="text-gray-700 text-sm font-medium">
                          {meal.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-500 mb-5 text-sm">
                      🔥 {meal.calories}
                    </p>
                  </div>

                  {/* Pricing & Interactive Dynamic Actions */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-2xl font-bold text-green-700">
                      ₹{meal.price}
                    </span>

                    {itemQuantity > 0 ? (
                      // Dynamic Quantity Control Block if item is already added
                      <div className="flex items-center justify-between bg-emerald-900 text-white w-24 px-2 py-1.5 rounded-full shadow-sm">
                        <button
                          onClick={() => removeFromCart(meal.id)}
                          className="font-bold text-sm hover:text-emerald-300 active:scale-75 transition-all px-1"
                        >
                          —
                        </button>
                        <span className="font-bold text-xs select-none">{itemQuantity}</span>
                        <button
                          onClick={() => addToCart(meal)}
                          className="font-bold text-sm hover:text-emerald-300 active:scale-75 transition-all px-1"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      // Standard Shopping Cart Call To Action Button
                      <button
                        onClick={() => addToCart(meal)}
                        className="bg-green-700 hover:bg-green-800 text-white p-3 rounded-full transition active:scale-95 shadow-sm"
                        title="Add item to cart"
                      >
                        <ShoppingCart size={18} />
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

export default FeaturedMeals;