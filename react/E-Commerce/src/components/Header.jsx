import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchOutline from "../assets/search-outline.jpg";
import Cart from "../assets/Cart.png";
import Wishlist from "../assets/Wishlist.png";
import userIcon from "../assets/user.png"; // Ensure the path is correct
import UserDropdown from "./UserDropdown";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
const Header = () => {
  const { wishlistCount } = useAuth();
  const { cartCount } = useCart();

  const { isLoggedIn } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container mx-auto my-8 max-w-screen-lg flex align-middle justify-between">
      <span className="text-xl font-bold">Exclusive</span>
      <div className="flex gap-8 align-bottom">
        <Link to="/home" className="text-center">
          Home
        </Link>
        <Link to="/contact" className="text-center">
          Contact
        </Link>
        <Link to="/about" className="text-center">
          About
        </Link>
        <Link to="/profile" className="text-center">
          {isLoggedIn ? "Profile" : null}
        </Link>
        {!isLoggedIn ? (
          <Link to="/signup" className="text-center">
            SignUp
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-3 items-center">
        <label className="relative block bg-[#F4F4F5] w-64">
          <input
            className="placeholder:text-slate-400 block bg-[#F4F4F5] w-full rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
            placeholder="What are you looking for?"
            type="search"
            name="search"
          />
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 right-3 flex items-center pl-2">
            <img
              src={searchOutline}
              alt="search-icon"
              className="mix-blend-multiply"
            />
          </span>
        </label>
        <Link to="/wishlist" className="relative p-2">
          <img src={Wishlist} alt="Wishlist" />
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>
        <Link to="/cart" className="relative p-2">
          <img src={Cart} alt="Cart" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        {isLoggedIn && (
          <div className="relative">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img src={userIcon} alt="User" className="w-8 h-8 rounded-full" />
            </button>
            <UserDropdown
              isOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
