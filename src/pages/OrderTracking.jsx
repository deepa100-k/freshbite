import React, { useState, useEffect } from "react";
import { CheckCircle2, Utensils, Bike, Home, Clock } from "lucide-react";

const OrderTracking = () => {
  // Simulating live step progress (1 to 4)
  const [currentStep, setCurrentStep] = useState(2);

  // Auto increment steps for representation demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < 4 ? prev + 1 : 1));
    }, 15000); // changes status every 15 seconds for preview
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: 1, title: "Order Confirmed", desc: "Kitchen has accepted your meal request", icon: CheckCircle2 },
    { id: 2, title: "Cooking & Preparing", desc: "Our chef is compiling your fresh organic ingredients", icon: Utensils },
    { id: 3, title: "Out for Delivery", desc: "Valet rider is rushing towards your address", icon: Bike },
    { id: 4, title: "Delivered", desc: "Enjoy your healthy guilt-free warm food!", icon: Home },
  ];

  return (
    <div className="min-h-screen bg-[#F8FFF6] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-xl border border-green-50 p-6 sm:p-10">
        
        {/* Top Header Card */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Order Status</p>
            <h1 className="text-2xl font-black text-gray-900 mt-0.5">Order ID: #FOD-2026</h1>
          </div>
          <div className="bg-orange-50 border border-orange-100 text-orange-600 px-4 py-2 rounded-2xl flex items-center gap-2 font-semibold text-sm">
            <Clock size={16} className="animate-pulse" /> Estimated Delivery: 25 Mins
          </div>
        </div>

        {/* Dynamic Vertical Tracker Timeline */}
        <div className="mt-10 relative pl-4 sm:pl-8 space-y-10">
          {/* Timeline Backbone Line Connecting Steps */}
          <div className="absolute left-[29px] sm:left-[45px] top-3 bottom-3 w-1 bg-gray-100 -z-0">
            <div 
              className="w-full bg-green-500 transition-all duration-1000" 
              style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {steps.map((step) => {
            const IconComponent = step.icon;
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <div key={step.id} className="relative flex items-start gap-4 sm:gap-6 z-10">
                {/* Icon Wrapper Circle */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  isCompleted ? "bg-green-600 border-green-100 text-white" : 
                  isActive ? "bg-white border-green-600 text-green-600 scale-110 shadow-lg shadow-green-100" : 
                  "bg-white border-gray-100 text-gray-300"
                }`}>
                  <IconComponent size={18} />
                </div>

                {/* Tracking Text Content */}
                <div>
                  <h3 className={`font-bold text-base sm:text-lg transition-colors ${isActive ? 'text-green-600' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support Quick Call */}
        <div className="mt-12 p-4 bg-gray-50/80 rounded-2xl text-center text-xs sm:text-sm text-gray-500 font-medium">
          Need quick changes or rider instructions? Call Support: <span className="text-green-600 font-bold cursor-pointer">+91 9999-XXXXXX</span>
        </div>

      </div>
    </div>
  );
};

export default OrderTracking;