// UserDropdown.js
import React from "react";
import { FaUser, FaBox, FaTimes, FaStar, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserDropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FaUser className="mr-2" /> Manage My Account
          </Link>
          <Link
            to="/cart"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FaBox className="mr-2" /> My Order
          </Link>
          <a
            href="/cancellations"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FaTimes className="mr-2" /> My Cancellations
          </a>
          <a
            href="/reviews"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FaStar className="mr-2" /> My Reviews
          </a>
          <a
            href="/login"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
