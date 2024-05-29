import React from "react";

const OrderSummary = () => {
  return (
    <div className="flex flex-col w-full max-w-md ml-8">
      <h2 className="text-2xl font-bold mb-4">Your Order</h2>
      <ul className="space-y-4 mb-4">
        <li className="flex justify-between">
          <img
            src="path/to/lcd-monitor.jpg"
            alt="LCD Monitor"
            className="w-16 h-16 object-cover"
          />
          <span>LCD Monitor</span>
          <span>$650</span>
        </li>
        <li className="flex justify-between">
          <img
            src="path/to/h1-gamepad.jpg"
            alt="H1 Gamepad"
            className="w-16 h-16 object-cover"
          />
          <span>H1 Gamepad</span>
          <span>$1100</span>
        </li>
      </ul>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>$1750</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
