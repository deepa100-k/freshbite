import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ChefHat, Bike, Home, ShoppingBag } from "lucide-react";

const OrderStatus = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Fake Live Tracking Simulation: Har 5-6 second baad status agle step par badhega
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(2), 5000);  // Food Being Prepared
    const timer2 = setTimeout(() => setCurrentStep(3), 11000); // Out for Delivery
    const timer3 = setTimeout(() => setCurrentStep(4), 18000); // Delivered

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const steps = [
    { id: 1, title: "Order Confirmed", desc: "Your order has been received by FreshBite", icon: <CheckCircle size={24} /> },
    { id: 2, title: "Cooking & Preparing", desc: "Our chef is preparing your delicious meal", icon: <ChefHat size={24} /> },
    { id: 3, title: "Out for Delivery", desc: "Our delivery partner is on the way to your home", icon: <Bike size={24} /> },
    { id: 4, title: "Delivered", desc: "Enjoy your fresh and healthy food!", icon: <Home size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F8FFF6] py-12 px-4 flex flex-col items-center justify-center">
      <div className="bg-white p-6 sm:p-10 rounded-[32px] shadow-xl w-full max-w-lg border border-green-50 text-center">
        
        {/* Animated Header */}
        <div className="mb-8">
          <div className="inline-block p-4 bg-green-100 rounded-full text-green-600 mb-4 animate-pulse">
            <ShoppingBag size={36} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Live Order Tracking</h2>
          <p className="text-gray-400 text-sm mt-1">Order ID: <span className="text-green-600 font-bold">#FOD-2026</span></p>
        </div>

        {/* Live Stepper Design */}
        <div className="relative text-left space-y-8 before:absolute before:bottom-2 before:top-2 before:left-[23px] before:w-0.5 before:bg-gray-100">
          {steps.map((step) => {
            const isCompleted = currentStep >= step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div key={step.id} className="flex items-start gap-4 relative z-10">
                {/* Circle Icon Badge */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isCompleted 
                    ? "bg-green-600 text-white shadow-md shadow-green-200" 
                    : "bg-gray-100 text-gray-400"
                } ${isCurrent ? "animate-bounce ring-4 ring-green-100" : ""}`}>
                  {step.icon}
                </div>

                {/* Text Details */}
                <div className="flex-1 pt-1">
                  <h3 className={`font-black text-base transition-colors ${isCompleted ? "text-gray-900" : "text-gray-400"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs mt-0.5 transition-colors ${isCompleted ? "text-gray-500" : "text-gray-300"}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-10 w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-md transition-transform active:scale-95"
        >
          Go Back to Home
        </button>

      </div>
    </div>
  );
};

export default OrderStatus;