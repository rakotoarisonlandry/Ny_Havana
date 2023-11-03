import React from "react";
import logo from "./img/logo.png";
import LogoHome from "./img/carbon_home.svg";
function Header() {
  return (
    <div className="flex  text-[#fff] pl-9 space-x-[18px]">
      <div className="flex space-x-3 pt-3 items-center">
        <img src={logo} alt="NyHavana" className="w-9" />
        <h2>Ny Havana</h2>
      </div>
      <ul className=" flex items-center text-center text-[16px] space-x-11 pt-2 pl-[900px]">
        <li>
          <img src={LogoHome} alt="NyHavana" className="w-[24.5] h-[23.5]" />
        </li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

export default Header;
