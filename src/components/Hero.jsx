import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook import kiya
import heroFood from "../assets/hero-food.webp";

const Hero = () => {
  const navigate = useNavigate(); // Navigation instance crate kiya

  return (
    <section className="bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">

            <span className="hidden lg:inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Fast Delivery in 30 Minutes
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-4">
              Delicious Food
              <span className="text-orange-500"> Delivered </span>
              To Your Door
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7 max-w-xl mx-auto lg:mx-0">
              Discover the best restaurants, amazing dishes, and lightning-fast
              delivery right at your doorstep.
            </p>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex gap-4 mt-6">
              <button 
                onClick={() => navigate("/menu")} // Dynamic redirect to menu page
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-colors"
              >
                Order Now
              </button>

              <button 
                onClick={() => navigate("/menu")} // Dynamic redirect to menu page
                className="border border-gray-300 px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all"
              >
                View Menu
              </button>
            </div>

          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 flex justify-center">
            <img
              src={heroFood}
              alt="Delicious Food"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            />
          </div>

          {/* Mobile Buttons */}
          <div className="order-3 flex flex-col gap-4 lg:hidden">
            <button 
              onClick={() => navigate("/menu")} // Mobile dynamic target
              className="bg-orange-500 text-white px-8 py-4 rounded-full"
            >
              Order Now
            </button>

            <button 
              onClick={() => navigate("/menu")} // Mobile dynamic target
              className="border border-gray-300 px-8 py-4 rounded-full"
            >
              View Menu
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;