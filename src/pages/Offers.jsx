import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { offersData } from "../data/offersData";

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [scratchedIds, setScratchedIds] = useState([]);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleScratch = (id) => {
    if (!scratchedIds.includes(id)) {
      setScratchedIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-stone-900 font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Real Platform Header Layout */}
        <header className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-800 text-[11px] font-bold uppercase tracking-wider">Live Rewards Hub</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
            Exclusive Deals
          </h1>
          <p className="mt-3 text-stone-500 text-sm sm:text-base leading-relaxed">
            Claim tailored premium vouchers, scratch mystery boxes, and apply verified credentials during checkout to maximize your health budget.
          </p>
        </header>

        {/* Dynamic Neo-Brutalism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => {
            const isLocked = offer.isScratchable && !scratchedIds.includes(offer.id);

            return (
              <div
                key={offer.id}
                className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header Block */}
                <div className={`bg-gradient-to-br ${offer.bgClass} p-6 text-white relative overflow-hidden`}>
                  {/* Background mesh accents */}
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/10 backdrop-blur-md text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md border border-white/10">
                      {offer.tagline}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      {offer.expiry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black tracking-tight mb-1">{offer.title}</h2>
                </div>

                {/* Main Interaction Window */}
                <div className="p-6 flex-1 flex flex-col justify-between relative min-h-[200px]">
                  
                  {/* Scratch Overlay Layer for Gamification */}
                  {offer.isScratchable && isLocked ? (
                    <div 
                      onClick={() => handleScratch(offer.id)}
                      className="absolute inset-0 bg-stone-800 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 cursor-pointer group-hover:bg-stone-850 transition-colors z-10"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl mb-3 animate-bounce">
                        🎁
                      </div>
                      <h3 className="text-white font-bold text-sm tracking-wide">Tap to Scratch Card</h3>
                      <p className="text-stone-400 text-[11px] mt-1 max-w-[180px]">Reveal your custom unlocked weekend promo asset</p>
                    </div>
                  ) : null}

                  {/* Coupon Details */}
                  <div className="space-y-3">
                    <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {offer.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-stone-400 text-[11px] font-bold uppercase tracking-wider bg-stone-50 px-2.5 py-1 rounded-md">
                      <span>Min Order: ₹{offer.minOrder}</span>
                    </div>
                  </div>

                  {/* Functional Action System */}
                  <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-4 mt-6">
                    <div className="bg-stone-50 border border-dashed border-stone-300 rounded-xl px-4 py-2.5 flex-1 text-center font-mono font-bold text-xs sm:text-sm tracking-widest text-stone-800 select-all">
                      {offer.code}
                    </div>
                    
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      disabled={isLocked}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 whitespace-nowrap shadow-sm ${
                        copiedCode === offer.code
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-stone-900 text-white hover:bg-emerald-800 active:scale-95 disabled:opacity-50"
                    }`}
                  >
                    {copiedCode === offer.code ? "Copied! ✓" : "Copy Code"}
                  </button>
                </div>

              </div>
            </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;