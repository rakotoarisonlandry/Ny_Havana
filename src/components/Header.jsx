import React, { useContext } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContexte } from "../context/AuthContext";
import AvatarInitials from "avatar-initials";

function Header() {
  const { currentUser, logout } = useContext(AuthContexte);

  const generateInitialsAvatar = (username) => {
    const initials = username.substring(0, 1).toUpperCase();
    return new AvatarInitials({
      initials,
      textColor: "#ffffff",
      bgColor: "#80a072",
      fontSize: 20,
    });
  };

  return (
    <div className="w-full flex top-0 select-none text-[#fff] pl-7 space-x-1 backdrop-filter backdrop-blur-sm fixed z-[100]">
      <Link to="/" className="w-16 flex space-x-3 pt-3 pb-3  items-center">
        <img src={logo} alt="NyHavana" className="w-8" />
        <h2 className="text-2xl font-bold">Ny Havana</h2>
      </Link>
      <ul className="flex items-center text-center text-[17px] space-x-16 pt-2 pl-[580px]">
        <Link to="/" className="pt-6">
          <li className="font-bold text-[#80a072] pb-3">Accueil</li>
          <div className="w-2 h-2 bg-[#80a072] ml-5  rounded-full relative"></div>
        </Link>
        <Link to="/blog">Blog</Link>
        {/* {currentUser ? (<span>username</span>) : (<Link to="/Contact">Contact</Link>)} */}
        {currentUser ? (
          <div className="flex space-x-12">
            <Link to="/write">Écrire</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        ) : (
          <Link to="/Contact">Contact</Link>
        )}
        {currentUser ? (
          <div className="flex space-x-8">
            <span
              onClick={logout}
              className="text-[#FBB03B] font-semibold select-none rounded-xl border-[1px] ml-0 border-[#FBB03B] pt-2 pb-2 pl-9 pr-9"
            >
              logout
            </span>
            <div className="w-8 h-8 rounded-full bg-[#80a072]  text-white flex items-center justify-center font-extrabold">
              {(currentUser?.username[0]).toUpperCase()}
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-[#FBB03B] font-semibold select-none rounded-xl border-[1px] ml-0 border-[#FBB03B] pt-2 pb-2 pl-9 pr-9"
          >
            Se connecter
          </Link>
        )}
      </ul>
    </div>
  );
}

export default Header;
