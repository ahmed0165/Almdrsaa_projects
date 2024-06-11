import searchOutline from "../assets/search-outline.jpg";
import loginPage from "../assets/loginPage.jpg";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/home");
  };

  return (
    <section className="flex gap-36">
      <img className="" src={loginPage} alt="login" />
      <section className=" my-auto  flex flex-col gap-10">
        <h1 className=" text-3xl ">Log in to Exclusive</h1>
        <p className=" text-sm font-bold">Enter your details below</p>
        <input
          type="text"
          placeholder="Email or Phone Number"
          className=" block border-b-2 border-gray-400"
        />
        <input
          type="text"
          placeholder="Password"
          className=" block border-b-2 border-gray-400"
        />
        <div className="flex justify-between items-center">
          <button
            className=" bg-[#DB4444] p-2 rounded-md  text-white w-1/3"
            onClick={handleLogin}
          >
            log in{" "}
          </button>
          <span className=" text-red-600">Forget Password?</span>
        </div>
      </section>
    </section>
  );
};

export default Login;
