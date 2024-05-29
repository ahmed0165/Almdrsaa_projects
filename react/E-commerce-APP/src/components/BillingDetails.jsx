import React from "react";

const BillingDetails = () => {
  return (
    <div className="flex flex-col w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First Name*"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Street Address*"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Apartment, floor, etc. (optional)"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Town/City*"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Phone Number*"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email Address*"
          className="w-full px-4 py-2 border rounded-md"
        />
        <div className="flex items-center">
          <input type="checkbox" id="save-info" className="mr-2" />
          <label htmlFor="save-info">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
