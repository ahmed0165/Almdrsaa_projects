import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="mb-4 text-sm text-gray-600">
      <Link to="/account" className="hover:text-gray-800">
        Account
      </Link>{" "}
      /
      <Link to="/account" className="hover:text-gray-800">
        {" "}
        My Account
      </Link>{" "}
      /
      <Link to="/product" className="hover:text-gray-800">
        {" "}
        Product
      </Link>{" "}
      /
      <Link to="/cart" className="hover:text-gray-800">
        {" "}
        View Cart
      </Link>{" "}
      /<span className="text-gray-800"> Checkout</span>
    </nav>
  );
};

export default Breadcrumb;
