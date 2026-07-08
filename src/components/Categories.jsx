import React from "react";
import { useNavigate } from "react-router-dom";

const salad = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400";
const bowl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
const smoothie = "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400";
const fruits = "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400";
const wrap = "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=400";
const soup = "https://images.unsplash.com/photo-1547592165-e1d17f57655c?w=400";

const categories = [
  { id: 1, name: "Salads", image: salad }, // Fixed: foodData category list ke saath matching ki
  { id: 2, name: "Bowls", image: bowl },
  { id: 3, name: "Drinks", image: smoothie },
  { id: 4, name: "Fruits", image: fruits },
  { id: 5, name: "Wraps", image: wrap },  // Fixed: Extra space removed
  { id: 6, name: "Soups", image: soup },
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