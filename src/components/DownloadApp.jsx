import React from "react";
import { Play, Apple } from "lucide-react";
import appMockup from "../assets/app-mockup.webp";

// FEAT: Dynamic configuration object for easy updates and cleaner code
const APP_DATA = {
  badge: "Mobile App",
  titleHtml: (
    <>
      Healthy Food
      <br />
      At Your Fingertips
    </>
  ),
  description: "Order fresh meals, track your delivery, and discover healthy recipes—all from our mobile app.",
  storeButtons: [
    {
      id: "google-play",
      text: "Google Play",
      icon: Play,
      url: "https://play.google.com/store", // Change to your actual app link
      className: "bg-white text-green-600 px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition duration-300",
    },
    {
      id: "apple-store",
      text: "App Store",
      icon: Apple,
      url: "https://www.apple.com/app-store", // Change to your actual app link
      className: "bg-black text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition duration-300",
    }
  ]
};

const DownloadApp = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-600 to-green-400 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="uppercase tracking-widest font-semibold">
              {APP_DATA.badge}
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              {APP_DATA.titleHtml}
            </h2>

            <p className="mt-6 text-green-100 leading-8 max-w-lg mx-auto lg:mx-0">
              {APP_DATA.description}
            </p>

            {/* Mobile Image */}
            <div className="flex justify-center mt-8 lg:hidden">
              <img
                src={appMockup}
                alt="Mobile App"
                className="w-64 sm:w-72 drop-shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Dynamic Buttons Implementation */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              {APP_DATA.storeButtons.map((btn) => {
                const IconComponent = btn.icon;
                return (
                  <button
                    key={btn.id}
                    onClick={() => window.open(btn.url, "_blank", "noopener,noreferrer")}
                    className={btn.className}
                    title={`Download from ${btn.text}`}
                  >
                    <IconComponent size={22} fill={btn.id === "google-play" ? "currentColor" : "none"} />
                    {btn.text}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex justify-center">
            <img
              src={appMockup}
              alt="Mobile App"
              className="w-72 lg:w-96 drop-shadow-2xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;