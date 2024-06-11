import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.title === product.title
      );
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title));
  };

  const updateQuantity = (title, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
