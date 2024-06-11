import React from "react";
import BillingDetails from "../components/BillingDetails";
import OrderSummary from "../components/OrderSummary";
import PaymentOptions from "../components/PaymentOptions";
import Breadcrumb from "../components/Breadcrumb";

const CheckoutPage = () => {
  return (
    <div className="container mx-auto my-8 max-w-screen-lg">
      <Breadcrumb />
      <div className="flex">
        <BillingDetails />
        <div className="ml-8">
          <OrderSummary />
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
