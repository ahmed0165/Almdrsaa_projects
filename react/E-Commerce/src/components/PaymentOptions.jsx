import React from "react";

const PaymentOptions = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className="space-y-4">
        <div>
          <input type="radio" id="bank" name="payment" className="mr-2" />
          <label htmlFor="bank">Bank</label>
        </div>
        <div>
          <input type="radio" id="cod" name="payment" className="mr-2" />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <button className="w-full bg-red-500 text-white py-2 rounded-md">
          Apply Coupon
        </button>
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4">
        Place Order
      </button>
    </div>
  );
};

export default PaymentOptions;
