import React from "react";
//Navbar component
const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-gray-500 flex justify-around items-center p-3 pt-2">
        <div to={"/"}>
          <h1 className="text-4xl text-white">Logo</h1>
        </div>
        <div className="hidden md:flex gap-4">
          <div to={"/login"}>
            <h1>Login</h1>
          </div>
          <div to={"/signup"}>
            <h1>Signup</h1>
          </div>
          <div to={"/dashboard"}>
            <h1>Dashboard</h1>
          </div>
          <div to={"/details/:1"}>
            <h1>Details</h1>
          </div>
        </div>
        <button className="bg-blue-700 px-5 py-3 rounded-2xl text-white">
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
