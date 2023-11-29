import React from "react";
import ContactComponent from "../components/ContactComponent";
import Tilt from "react-parallax-tilt";
function Contact() {
  return (
    <div>
      <h1 className="text-center text-[30px] font-semibold">Contact Us</h1>
      <p className="text-center text-[18px]">
        On vous suit tres reconnaissons de partager votre idées avec nous
      </p>
      <div className="flex w-[100%] p-10 ">
        <div className="h-[30rem] w-[30rem] absolute rounded-full bg-gradient-to-r from-[#D4145A] to-[#FBB03B] left-[-200px] top-[50%] animate-pulse"></div>
        <Tilt>
          <form className="space-y-3 md:space-y-6 text-white w-[200%] h-[100%] justify-center  pt-10 pb-10 pl-5 pr-5 rounded-2xl shadow-5xl border border-r-0 border-t-0  backdrop-filter backdrop-blur-sm  relative z-2 ">
            <h2 className="tracking-wide">Submiter une requette</h2>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                request to*
              </label>
              <input
                type="text"
                required=""
                className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
              />
            </div>
            <div>
              <label htmlFor="">Nom complet</label>
              <input
                type="text"
                placeholder="Veuillez entrer votre Nom complet"
                className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Votre adresse E-mail*
              </label>
              <input
                type="email"
                className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
                placeholder="Veuillez entrer votre e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="">Sujet*</label>
              <input
                type="text"
                required=""
                className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
              />
            </div>
            <label htmlFor="">Description*</label>
          </form>
        </Tilt>

        <div>
          <ContactComponent />
        </div>
      </div>
    </div>
  );
}

export default Contact;
