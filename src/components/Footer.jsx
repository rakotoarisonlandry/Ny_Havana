import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import LogoFacebook from "../img/ic_baseline-facebook.svg";
import LogoLinkedin from "../img/Linkenin.svg";

function Footer() {
  return (
    <div className="w-full">
      <footer>
        <div className=" mt-52 pl-8 pr-8 w-[95%] h-[1px] bg-[#AE9F9F] "></div>
        <div className="flex space-x-[75%]">
          <Link
            to="/"
            className="text-white flex space-x-3 pb-2 ml-8 pt-2  items-center"
          >
            <img src={logo} alt="NyHavana" className="w-8" />
            <h2 className="text-2xl font-bold">©Ny Havana</h2>
          </Link>
          <div className="flex space-x-3">
            <img src={LogoLinkedin} alt="linkedin" />
            <img src={LogoFacebook} alt="facebook" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
