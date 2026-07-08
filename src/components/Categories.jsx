import React from "react";
import { useNavigate } from "react-router-dom";
import avocado from "../assets/Avocado-Toast.jpg";
import bowl from "../assets/Buddha-Bowl.jpg";
import fruits from "../assets/Fruit-Bowl.webp";
import smoothie from "../assets/Green-Smoothie.jpg";
import protein from "../assets/CreamySpinachSoupcard-10.avif"; 
import salad from "../assets/Salad-Bowl.jpg";

const categories = [
  { id: 1, name: "Fresh Salads", image: salad },
  { id: 2, name: "Buddha Bowl", image: bowl },
  { id: 3, name: "Green Smoothie", image: smoothie },
  { id: 4, name: "Fruit Bowl", image: fruits },
  { id: 5, name: " Wraps", image: avocado },
  { id: 6, name: "Soups", image: protein }, 
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-[#F8FFF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Categories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Explore Healthy Categories
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Fresh, organic and nutritious meals made with premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/menu?type=${encodeURIComponent(item.name)}`)}
              className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-green-100 group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-center mt-5 font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;