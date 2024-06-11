import { Link } from "react-router-dom";
import loginPage from "../assets/loginPage.jpg";
import Login from "./Login";
import Footer from "../components/Footer";
import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <p className="bg-black text-white p-2 text-center text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="underline underline-offset-1 mx-1">ShopNow</span>{" "}
        <span className="absolute right-20">English</span>
      </p>
      <Header />
      <div className=" border border-1 border-neutral-950 opacity-10"></div>
      <Outlet />
      {/* <footer className="  bg-black text-white  p-10 ">
        <div className=" grid grid-cols-5 mx-auto  max-w-screen-lg">
          <ul className="flex flex-col  gap-2">
            <li className="text-xl font-bold">Execlusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>Enter your email</li>
          </ul>
          <ul className="flex flex-col  gap-2 ">
            <li className="text-xl ">Support</li>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
          <ul className="flex flex-col  gap-2">
            <li className="text-xl ">Account</li>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
          <ul className="flex flex-col  gap-2">
            <li className="text-xl ">Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-xl ">Download App</li>
            <li>Save $3 with App New User Only</li>
            <li>Get 10% off your first order</li>
            <li>Enter your email</li>
          </ul>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
};
export default Layout;
