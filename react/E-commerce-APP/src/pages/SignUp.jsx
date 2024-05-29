import searchOutline from "../assets/search-outline.jpg";
import loginPage from "../assets/loginPage.jpg";
import iconGoogle from "../assets/Icon-Google.png";

const Login = () => {
  return (
    <section className="flex gap-36">
      <img className="" src={loginPage} alt="login" />
      <section className=" my-auto  flex flex-col gap-6">
        <h1 className=" text-3xl ">Log in to Exclusive</h1>
        <p className=" text-sm font-bold">Enter your details below</p>
        <input
          type="text"
          placeholder="name"
          className=" block border-b-2 border-gray-400"
        />
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

        <button className=" bg-[#DB4444] p-2 rounded-md  text-white w-full">
          Create Account
        </button>
        <div className=" p-2 rounded-md border border-slate-500 w-full flex gap-3">
          <img src={iconGoogle} alt="iconGoogle" />
          <span>Sign up with Google</span>
        </div>
        <div className="flex gap-2">
          <span className=" ">Already have account?</span>
          <button className=" text-red-600">Log in</button>
        </div>
      </section>
    </section>
  );
};

export default Login;
