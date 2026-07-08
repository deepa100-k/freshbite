import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Local Images Import from src/assets/
import cleanLab1 from "../assets/cleanlabs-1.jpg";
import cleanLab2 from "../assets/cleanlabs-2.webp";
import cleanLab3 from "../assets/cleanlabs-3.jpg";

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const pillars = [
        {
            icon: "🌱",
            title: "100% Organic Sourcing",
            desc: "Every single leaf, microgreen, and seed is harvested from verified eco-friendly local farms with zero chemical sprays."
        },
        {
            icon: "📊",
            title: "Macro-Tracked Ecosystem",
            desc: "We don't just cook; we engineer meals. Every dish comes with precise protein, fat, and clean carb breakdowns."
        },
        {
            icon: "🌍",
            title: "Eco-Conscious Logistics",
            desc: "Our delivery footprints are monitored, and we pack 100% of our orders in plastic-free, plant-based biodegradable boxes."
        }
    ];

    const stats = [
        { value: "50K+", label: "Clean Meals Served" },
        { value: "120+", label: "Certified Farmers" },
        { value: "4.8★", label: "Average App Rating" }
    ];

    const faqs = [
        {
            q: "How do you track the macro-nutrients in meals?",
            a: "Our team of certified nutritionists weigh every raw ingredient before preparation. The exact calorie and macro breakdown is then calculated and printed transparently on your meal box label."
        },
        {
            q: "Is your kitchen completely organic and certified?",
            a: "Yes, all our partner kitchens follow standard ISO health protocols and source components strictly from certified sustainable organic farms."
        },
        {
            q: "Can I schedule recurring daily health subscriptions?",
            a: "Absolutely! You can use our subscription tab to customize a 7-day or 30-day recurring diet plan delivered automatically to your doorstep."
        }
    ];

    return (
        <div className="bg-[#FAFAFA] min-h-screen text-stone-900 font-sans antialiased">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Core Hero Brand Story Banner */}
                <section className="max-w-3xl mx-auto text-center mb-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
                        Our Manifesto
                    </span>
                    <h1 className="text-4xl font-black tracking-tight text-stone-900 sm:text-6xl mt-4 leading-[1.1]">
                        We are redefining what conscious eating feels like.
                    </h1>
                    <p className="mt-6 text-stone-500 text-base sm:text-lg leading-relaxed">
                        Started in a small micro-kitchen, our vision was transparent: clean, nutrition-dense food shouldn't be a luxury or boring compromise. We bridge the gap between premium culinary craftsmanship and deep, biological wellness.
                    </p>
                </section>

                {/* Real-Time Live Milestone Counter Ticker */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto bg-stone-900 text-white p-8 rounded-3xl mb-24 shadow-xl shadow-stone-900/10 text-center relative overflow-hidden">
                    <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-emerald-700/20 rounded-full blur-2xl" />
                    {stats.map((stat, idx) => (
                        <div key={idx} className="space-y-1 relative z-10">
                            <p className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">{stat.value}</p>
                            <p className="text-stone-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </section>

                {/* Behind The Scenes Visual Grid - Fixed with Imported Assets */}
                <section className="mb-24">
                    <div className="text-center max-w-md mx-auto mb-10">
                        <h2 className="text-2xl font-extrabold tracking-tight">Inside Our Clean Labs</h2>
                        <p className="text-stone-400 text-xs mt-1">Take a look at where the health magic is packed daily under high hygienic standards.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* First Local Image */}
                        <div className="h-64 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                            <img
                                src={cleanLab1}
                                alt="Kitchen Prep"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>

                        {/* Second Local Image */}
                        <div className="h-64 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                            <img
                                src={cleanLab2}
                                alt="Fresh Greens"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>

                        {/* Third Local Image */}
                        <div className="h-64 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm sm:col-span-2 md:col-span-1">
                            <img
                                src={cleanLab3}
                                alt="Plating Bowls"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* Brand Core Pillars Grid Canvas */}
                <section className="mb-24">
                    <div className="text-center max-w-md mx-auto mb-12">
                        <h2 className="text-2xl font-extrabold tracking-tight">Our Core Anchors</h2>
                        <p className="text-stone-400 text-xs mt-1">The three operational uncompromised rules behind every delivery run.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-stone-200/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-xl mb-6 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-lg font-bold text-stone-900 tracking-tight">{pillar.title}</h3>
                                <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive FAQ Dropdowns */}
                <section className="max-w-3xl mx-auto mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-extrabold tracking-tight">Got Questions?</h2>
                        <p className="text-stone-400 text-xs mt-1">Transparent answers about our macro-tracking systems and sourcing methods.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div key={idx} className="bg-white border border-stone-200 rounded-xl overflow-hidden transition-all duration-200 shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center text-stone-800 hover:bg-stone-50/50"
                                    >
                                        <span>{faq.q}</span>
                                        <span className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-600" : "text-stone-400"}`}>
                                            ▼
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-500 leading-relaxed bg-white border-t border-stone-100">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default About;