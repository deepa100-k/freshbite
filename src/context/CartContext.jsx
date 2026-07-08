import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. CHNAGE: Shuruat mein browser ke LocalStorage se data check karega taaki reload par kuch na hate
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("freshbite_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. CHANGE: Jab bhi cart state badlegi, automatic browser storage me save ho jayega
  useEffect(() => {
    localStorage.setItem("freshbite_cart", JSON.stringify(cart));
  }, [cart]);

  // 1. Add Item to Cart (Same as yours)
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // 2. Remove / Decrease Item Quantity (Same as yours)
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === id);
      if (!existingItem) return prevCart;
      
      if (existingItem.quantity === 1) {
        return prevCart.filter((i) => i.id !== id);
      }
      return prevCart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const clearCart = () => setCart([]);

  // 4. Calculate Total Items Count (Same as yours)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // 5. Calculate Total Base Price dynamically (Same as yours)
  const cartTotal = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);