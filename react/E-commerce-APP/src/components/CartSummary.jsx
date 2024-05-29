import React from "react";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ subtotal, shipping, total }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md w-full lg:w-1/3 mt-8 lg:mt-0">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping}</span>
      </div>
      <div className="flex justify-between font-bold text-xl">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md w-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
