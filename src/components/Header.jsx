import React from "react";
import logo from "../img/logo.png";
import LogoHome from "../img/carbon_home.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex  text-[#fff] pl-7 space-x-2">
      <div className="flex space-x-3 pt-3  items-center">
        <img src={logo} alt="NyHavana" className="w-8" />
        <h2 className="text-2xl font-bold">Ny Havana</h2>
      </div>
      <ul className=" flex items-center text-center text-[17px] space-x-16 pt-2 pl-[780px]">
        <Link to="/" className="pt-6">
          <li className="font-bold text-[#80a072] pb-3">Home</li>
          <div className="w-2 h-2 bg-[#80a072] ml-5  rounded-full relative"></div>
        </Link>
        <Link>Blog</Link>
        <Link>Contact Us</Link>
      </ul>
    </div>
  );
}

export default Header;
