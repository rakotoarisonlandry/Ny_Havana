import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex top-1 select-none text-[#fff] pl-7 space-x-2">
      <Link to="/" className="w-16 flex space-x-3 pt-3 pb-3  items-center">
        <img src={logo} alt="NyHavana" className="w-8" />
        <h2 className="text-2xl font-bold">Ny Havana</h2>
      </Link>
      <ul className="flex items-center text-center text-[17px] space-x-16 pt-2 pl-[740px]">
        <Link to="/" className="pt-6">
          <li className="font-bold text-[#80a072] pb-3">Accueil</li>
          <div className="w-2 h-2 bg-[#80a072] ml-5  rounded-full relative"></div>
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contacts</Link>
        <Link
          to="/login"
          className="text-[#FBB03B] font-semibold select-none rounded-xl border-[1px] border-[#FBB03B] pt-2 pb-2 pl-9 pr-9"
        >
          Login
        </Link>
      </ul>
    </div>
  );
}

export default Header;
