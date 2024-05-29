// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 border-r">
      <h3 className="text-lg font-bold mb-4">Manage My Account</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/my-account/profile" className="text-red-500">
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/my-account/address">Address Book</Link>
        </li>
        <li>
          <Link to="/my-account/payment-options">My Payment Options</Link>
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-8 mb-4">My Orders</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/my-account/returns">My Returns</Link>
        </li>
        <li>
          <Link to="/my-account/cancellations">My Cancellations</Link>
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-8 mb-4">My Wishlist</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/my-account/wishlist">My Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
