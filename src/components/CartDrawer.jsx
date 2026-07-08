import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // 1. Import for proceed to checkout

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, addToCart, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  // Real-world Calculations with proper number forcing
  const baseTotal = Number(cartTotal) || 0;
  const deliveryFee = baseTotal > 500 || baseTotal === 0 ? 0 : 40;
  const taxesAndCharges = Math.round(baseTotal * 0.05); // 5% GST/Packing
  const grandTotal = baseTotal + deliveryFee + taxesAndCharges;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black tracking-tight text-stone-900">Your Basket</h2>
              <p className="text-stone-400 text-[11px] font-medium mt-0.5">Review your fresh items</p>
            </div>
            <button onClick={onClose} className="text-stone-400 hover:text-stone-600 text-sm font-bold">✕</button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-stone-400">
                <p className="text-4xl mb-3">🛒</p>
                <p className="text-xs font-semibold text-stone-700">Your basket is empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm">{item.name}</h4>
                    <p className="text-xs text-orange-500 font-semibold mt-0.5">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-xl">
                    <button onClick={() => removeFromCart(item.id)} className="font-bold">-</button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="font-bold">+</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Real Invoice Breakdowns */}
          {cart.length > 0 && (
            <div className="border-t border-stone-100 p-6 bg-stone-50 space-y-4">
              <div className="space-y-2 border-b border-stone-200/60 pb-3 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span className="text-stone-800 font-semibold">₹{baseTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold text-[10px] uppercase">Free</span>
                  ) : (
                    <span className="text-stone-800 font-semibold">₹{deliveryFee}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span>Govt Taxes & Packing</span>
                  <span className="text-stone-800 font-semibold">₹{taxesAndCharges}</span>
                </div>
              </div>

              <div className="flex justify-between text-stone-900 font-black text-lg">
                <span>To Pay</span>
                <span className="text-orange-500">₹{grandTotal}</span>
              </div>

              {baseTotal < 500 && (
                <div className="bg-orange-50 border border-orange-100 p-2.5 rounded-lg text-center text-[10px] text-orange-700 font-medium">
                  Add <b>₹{500 - baseTotal}</b> more to unlock <b>FREE DELIVERY</b>!
                </div>
              )}

              <button className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all">
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;