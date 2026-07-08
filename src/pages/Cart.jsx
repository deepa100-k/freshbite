import React, { useMemo } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
    const { cart, addToCart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    // Billing calculations
    const billingSummary = useMemo(() => {
        const itemTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const deliveryFee = itemTotal > 0 ? (itemTotal > 499 ? 0 : 40) : 0;
        const platformFee = itemTotal > 0 ? 5 : 0;
        const gstAndTaxes = Math.round(itemTotal * 0.05);
        const grandTotal = itemTotal + deliveryFee + platformFee + gstAndTaxes;

        return { itemTotal, deliveryFee, platformFee, gstAndTaxes, grandTotal };
    }, [cart]);

    // FIX: Yeh function ab user ke saare cart calculations/state ko save karke checkout page par le jayega
    const handleProceedToCheckout = () => {
        navigate("/checkout", { state: { billingSummary } });
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen text-stone-900 antialiased font-sans flex flex-col justify-between">
            <Navbar />

            <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex flex-col justify-center">
                <h1 className="text-3xl font-black tracking-tight text-stone-800 mb-8">
                    Secure Checkout 🛒
                </h1>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                        {/* Left Side: Items Card */}
                        <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200/60 shadow-sm p-6 space-y-6">
                            <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                                <h2 className="font-extrabold text-lg text-stone-800">Review Items</h2>
                                <button
                                    onClick={clearCart}
                                    className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors bg-red-50 px-3 py-1 rounded-lg"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="divide-y divide-stone-100">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs select-none">{item.isVeg ? "🟢" : "🔴"}</span>
                                            <div>
                                                <h3 className="font-bold text-stone-900 text-sm sm:text-base">{item.name}</h3>
                                                <p className="text-xs text-stone-400 mt-0.5">₹{item.price} each</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center justify-between bg-orange-500 text-white w-24 px-2 py-1 rounded-xl shadow-sm">
                                                <button onClick={() => removeFromCart(item.id)} className="font-black px-1">—</button>
                                                <span className="text-xs font-bold">{item.quantity}</span>
                                                <button onClick={() => addToCart(item)} className="font-black px-1">+</button>
                                            </div>
                                            <span className="font-extrabold text-stone-800 text-sm sm:text-base w-16 text-right">
                                                ₹{item.price * item.quantity}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Bill Receipt Card */}
                        <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm p-6 sticky top-6">
                            <h2 className="font-extrabold text-lg text-stone-800 border-b border-stone-100 pb-4 mb-4">
                                Bill Summary
                            </h2>

                            <div className="space-y-3 text-sm font-medium text-stone-600">
                                <div className="flex justify-between">
                                    <span>Item Total</span>
                                    <span className="text-stone-900 font-bold">₹{billingSummary.itemTotal}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Delivery Partner Fee</span>
                                    <span className={billingSummary.deliveryFee === 0 ? "text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded" : "text-stone-900 font-bold"}>
                                        {billingSummary.deliveryFee === 0 ? "FREE" : `₹${billingSummary.deliveryFee}`}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Platform Fee</span>
                                    <span className="text-stone-900 font-bold">₹{billingSummary.platformFee}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>GST & Taxes (5%)</span>
                                    <span className="text-stone-900 font-bold">₹{billingSummary.gstAndTaxes}</span>
                                </div>

                                <div className="border-t border-stone-100 my-4 pt-4 flex justify-between text-base font-black text-stone-900">
                                    <span>To Pay</span>
                                    <span className="text-orange-500 text-lg">₹{billingSummary.grandTotal}</span>
                                </div>
                            </div>

                            {/* UPDATED: Calling our verified checkout redirection handler */}
                            {/* Purane button ki jagah ise lagayein */}
<button
    onClick={() => {
        console.log("Checkout button clicked!"); // Check karne ke liye ki function call ho raha hai ya nahi
        
        if (billingSummary.grandTotal > 0) {
            // Safe Native Navigation JSON wrapper ke saath data transfer ke liye
            localStorage.setItem("latest_bill", JSON.stringify(billingSummary));
            window.location.href = "/checkout";
        } else {
            // Agar total 0 hai tab bhi navigate ho jaye fallback ke saath
            window.location.href = "/checkout";
        }
    }}
    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center shadow-md transition-transform active:scale-95 mt-6 block relative z-50"
>
    Proceed to Checkout
</button>
                        </div>

                    </div>
                ) : (
                    /* Empty Cart Layout */
                    <div className="text-center py-20 bg-white rounded-2xl border border-stone-200/60 shadow-sm p-8 max-w-md mx-auto">
                        <span className="text-5xl block mb-4">🛒💨</span>
                        <h2 className="text-lg font-extrabold text-stone-800">Your Cart is Empty</h2>
                        <p className="text-xs text-stone-400 mt-2 max-w-xs mx-auto leading-relaxed">
                            Looks like you haven't added anything to your cart yet. Go ahead and explore top cuisines!
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-6 bg-orange-500 hover:bg-stone-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-colors shadow-sm"
                        >
                            See Near Kitchens
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;