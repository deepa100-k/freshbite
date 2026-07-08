import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { CreditCard, Truck, ShoppingBag, CheckCircle, X, Globe } from "lucide-react";

const Checkout = () => {
    // Context se data nikal liya (Jo reload hone par bhi ab zero nahi hoga)
    const { cart, cartTotal, clearCart } = useCart(); 
    const navigate = useNavigate();

    // Context ke cartTotal ke basis par live charges calculate kiye
    const subtotal = cartTotal;
    const deliveryCharge = subtotal > 0 ? 40 : 0; // Agar cart me items hain toh 40 Rs, nahi toh 0
    const platformFee = subtotal > 0 ? 5 : 0;     // 5 Rs fixed platform fee
    const gstAndTaxes = Math.round(subtotal * 0.05); // 5% GST & Taxes
    const totalAmount = subtotal + deliveryCharge + platformFee + gstAndTaxes; // Grand Total Amount

    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [formData, setFormData] = useState({ name: "", phone: "", address: "", city: "" });
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    // Payment Modal ki States
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedApp, setSelectedApp] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form Submit Hone Par Function
    const handlePlaceOrderSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.address) {
            alert("Please fill all details!");
            return;
        }

        if (subtotal === 0) {
            alert("Your cart is empty! Add some delicious food first.");
            return;
        }

        if (paymentMethod === "upi") {
            // Agar online payment select kiya hai, toh Secure Payment Modal khulega
            setShowPaymentModal(true);
        } else {
            // Agar Cash on Delivery hai, toh direct order confirm hoga
            processFinalOrder();
        }
    };

    // Order Success Function
    const processFinalOrder = () => {
        clearCart(); // Cart ko empty karega
        setOrderPlaced(true);
    };

    // Fake Online Payment Simulator (GPay, PhonePe, Paytm click karne par)
    const handleOnlinePaymentPay = (appName) => {
        setSelectedApp(appName);
        setIsProcessing(true);
        
        // 2.5 second ka realistic buffer network delay
        setTimeout(() => {
            setIsProcessing(false);
            setShowPaymentModal(false);
            processFinalOrder();
        }, 2500);
    };

    // Agar Order successfully confirm ho gaya hai, toh Order Placed screen dikhao
    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-[#F8FFF6] flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl max-w-md border border-green-100 flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                        <CheckCircle size={44} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">Order Placed!</h2>
                    <p className="text-gray-500 mt-3 text-sm md:text-base">
                        Your delicious healthy meal is on its way. Use your Order ID <span className="font-bold text-green-600">#FOD-2026</span> to track it.
                    </p>
                    
                    <button
                        onClick={() => navigate("/order-status")} 
                        className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold w-full py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
                    >
                        Track Your Order Live
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FFF6] py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Delivery Details Form */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-md border border-gray-100">
                    <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2 mb-6">
                        <Truck className="text-green-600" /> Delivery Details
                    </h2>

                    <form onSubmit={handlePlaceOrderSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Full Name</label>
                            <input type="text" name="name" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Phone Number</label>
                                <input type="tel" name="phone" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="98765xxxxx" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">City</label>
                                <input type="text" name="city" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="Delhi" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Complete Address</label>
                            <textarea name="address" rows="3" required onChange={handleInputChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="House No, Street Name, Landmark..."></textarea>
                        </div>

                        {/* Payment Method Selector */}
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2 mt-8 mb-4">
                            <CreditCard className="text-green-600" /> Payment Mode
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div
                                onClick={() => setPaymentMethod("cod")}
                                className={`border rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-green-600 bg-green-50/50 shadow-sm' : 'border-gray-200'}`}
                            >
                                <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-green-600" />
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Cash On Delivery (COD)</p>
                                    <p className="text-gray-400 text-xs">Pay cash when food arrives</p>
                                </div>
                            </div>

                            <div
                                onClick={() => setPaymentMethod("upi")}
                                className={`border rounded-2xl p-4 flex items-center gap-3 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-green-600 bg-green-50/50 shadow-sm' : 'border-gray-200'}`}
                            >
                                <input type="radio" checked={paymentMethod === 'upi'} readOnly className="accent-green-600" />
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Online UPI / Paytm / Cards</p>
                                    <p className="text-gray-400 text-xs">Pay via UPI Apps or Cards</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg mt-8 text-base transition-transform active:scale-95">
                            {paymentMethod === 'upi' ? "Proceed to Online Payment" : `Confirm & Place Order (₹${totalAmount})`}
                        </button>
                    </form>
                </div>

                {/* Right Column: Live Bill Breakdown Card */}
                <div className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-md border border-gray-100 h-fit sticky top-6">
                    <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-4">
                        <ShoppingBag className="text-green-600" /> Final Bill
                    </h2>
                    <div className="space-y-3 text-sm font-medium text-gray-600">
                        <div className="flex justify-between"><span>Items Subtotal</span><span className="text-gray-900 font-bold">₹{subtotal}</span></div>
                        <div className="flex justify-between"><span>Delivery Fee</span><span className="text-gray-900 font-bold">₹{deliveryCharge}</span></div>
                        <div className="flex justify-between"><span>Platform Fee</span><span className="text-gray-900 font-bold">₹{platformFee}</span></div>
                        <div className="flex justify-between"><span>GST & Taxes (5%)</span><span className="text-gray-900 font-bold">₹{gstAndTaxes}</span></div>
                        <hr className="border-gray-100" />
                        <div className="flex justify-between text-base font-black text-gray-900"><span>Grand Total</span><span className="text-green-600">₹{totalAmount}</span></div>
                    </div>
                </div>
            </div>

            {/* Secure Payment Gateway Modal */}
            {showPaymentModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative p-6">
                        
                        {/* Cancel Button */}
                        {!isProcessing && (
                            <button onClick={() => setShowPaymentModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                                <X size={20} />
                            </button>
                        )}

                        {isProcessing ? (
                            /* Loader Screen (Jab processing true ho) */
                            <div className="py-12 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                                <h3 className="text-xl font-extrabold text-gray-800">Processing via {selectedApp}...</h3>
                                <p className="text-xs text-gray-400 mt-2">Do not refresh or press back button.</p>
                                <p className="text-sm text-green-600 font-bold mt-4">Amount: ₹{totalAmount}</p>
                            </div>
                        ) : (
                            /* Payment Options Gateway Screen */
                            <div>
                                <div className="text-center pb-4 mb-6 border-b border-gray-100">
                                    <h3 className="text-lg font-black text-gray-800">Secure Payment Gateway</h3>
                                    <p className="text-xs text-gray-400 mt-1">Choose an option to pay <span className="font-bold text-gray-700">₹{totalAmount}</span></p>
                                </div>

                                {/* UPI Section */}
                                <div className="mb-6">
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Pay via UPI Apps</p>
                                    <div className="space-y-2.5">
                                        <button type="button" onClick={() => handleOnlinePaymentPay("Google Pay")} className="w-full flex items-center justify-between border border-gray-200 hover:border-green-500 hover:bg-green-50/20 p-3.5 rounded-xl transition-all active:scale-98">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">🔵</span>
                                                <span className="font-bold text-sm text-gray-700">Google Pay (GPay)</span>
                                            </div>
                                            <span className="text-xs text-gray-400 font-bold">Secure Link</span>
                                        </button>

                                        <button type="button" onClick={() => handleOnlinePaymentPay("PhonePe")} className="w-full flex items-center justify-between border border-gray-200 hover:border-green-500 hover:bg-green-50/20 p-3.5 rounded-xl transition-all active:scale-98">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">🟣</span>
                                                <span className="font-bold text-sm text-gray-700">PhonePe</span>
                                            </div>
                                            <span className="text-xs text-green-600 bg-green-50 font-bold px-2 py-0.5 rounded">Fast Pay</span>
                                        </button>

                                        <button type="button" onClick={() => handleOnlinePaymentPay("Paytm")} className="w-full flex items-center justify-between border border-gray-200 hover:border-green-500 hover:bg-green-50/20 p-3.5 rounded-xl transition-all active:scale-98">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">🔹</span>
                                                <span className="font-bold text-sm text-gray-700">Paytm UPI / Wallet</span>
                                            </div>
                                            <span className="text-xs text-gray-400 font-bold">Instant</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Cards Section */}
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">Credit / Debit Cards</p>
                                    <button type="button" onClick={() => handleOnlinePaymentPay("Card")} className="w-full flex items-center gap-3 border border-gray-200 hover:border-green-500 hover:bg-green-50/20 p-3.5 rounded-xl transition-all text-left">
                                        <CreditCard size={18} className="text-gray-500" />
                                        <div>
                                            <p className="font-bold text-sm text-gray-700">Credit or Debit Card</p>
                                            <p className="text-[10px] text-gray-400">Visa, Mastercard, RuPay supported</p>
                                        </div>
                                    </button>
                                </div>

                                <div className="text-center text-[10px] text-gray-400 mt-6 border-t border-gray-50 pt-4">
                                    🔒 128-Bit Secured Encryption SSL Connection
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;