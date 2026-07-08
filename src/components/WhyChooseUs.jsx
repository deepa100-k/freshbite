import React from "react";
import whyUs from "../assets/why-us.jpg";
import {
  Leaf,
  Truck,
  ChefHat,
  ShieldCheck,
} from "lucide-react";

// Icon components mapped to a lookup object for seamless dynamic rendering
const iconMap = {
  leaf: Leaf,
  truck: Truck,
  chefHat: ChefHat,
  shieldCheck: ShieldCheck,
};

const features = [
  {
    iconKey: "leaf",
    title: "100% Organic",
    desc: "Fresh ingredients sourced directly from trusted farms.",
  },
  {
    iconKey: "truck",
    title: "Fast Delivery",
    desc: "Fresh meals delivered to your doorstep in minutes.",
  },
  {
    iconKey: "chefHat",
    title: "Expert Chefs",
    desc: "Prepared by experienced chefs with healthy recipes.",
  },
  {
    iconKey: "shieldCheck",
    title: "Safe Packaging",
    desc: "Eco-friendly and hygienic packaging for every order.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-[#F8FFF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">

            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              Eat Healthy,
              <span className="text-green-600"> Live Better</span>
            </h2>

            <p className="text-gray-500 mt-5 leading-7 max-w-xl mx-auto lg:mx-0">
              We prepare nutritious meals using fresh organic ingredients,
              helping you stay healthy without compromising on taste.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => {
                // Dynamically extract the correct Lucide component based on key string
                const IconComponent = iconMap[item.iconKey] || Leaf;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center lg:text-left flex flex-col items-center lg:items-start"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 shrink-0">
                      <IconComponent
                        className="text-green-600"
                        size={28}
                      />
                    </div>

                    <h3 className="font-bold text-lg text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2 leading-6">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Image */}
          <div className="order-2 lg:order-1 mt-0 lg:mt-10">
            <img
              src={whyUs}
              alt="Healthy Food"
              className="w-full h-72 sm:h-96 lg:h-[450px] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;