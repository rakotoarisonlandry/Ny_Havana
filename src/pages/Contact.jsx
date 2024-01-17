import React, { useEffect, useState } from "react";
import ContactComponent from "../components/ContactComponent";
import "../index.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function Notification({ message, type ,onClose }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 6000); // Délai de 6 secondes

    return () => clearTimeout(timeoutId);
  }, [onClose]);


  return (
    <div
      className={`absolute top-0 left-0 right-0 p-4 text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}

function Contact() {
  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simuler une opération asynchrone (par exemple, appel API)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mettre à jour la notification
    setNotification({
      message: "Formulaire soumis avec succès !",
      type: "success",
    });
  };

  return (
    <div className="mt-32 relative">
      <h1 className="text-gradient text-center text-[30px] font-semibold">
        Contacter Nous
      </h1>
      <p className="text-center text-[18px] text-white opacity-40  ">
        On vous suit très reconnaissants de partager vos idées avec nous
      </p>
      <div className="flex justify-center flex-wrap w-[100%] p-10 relative">
        <Tilt>
          <form
            className="space-y-3 md:space-y-6 text-white w-[150%] h-[90%] justify-center  pt-10 pb-10 pl-5 pr-5 rounded-2xl shadow-5xl border border-r-0 border-t-0  backdrop-filter backdrop-blur-sm  relative z-2 "
            onSubmit={handleSubmit}
          >
            <div className="flex w-[250px] space-x-44">
              <h2 className="tracking-wide underline text-[#FBB03B] font-bold ">
                Soumettre une requête
              </h2>
              <p>*:obligatoire</p>
            </div>
            <div>
              <label htmlFor="">Nom complet*</label>
              <input
                type="text"
                placeholder="Veuillez entrer votre Nom complet"
                className="border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
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
                className="border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                placeholder="Veuillez entrer votre e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="">Sujet*</label>
              <input
                type="text"
                required=""
                placeholder="Quelle sujet voulez vous aborder ?"
                className="border  sm:text-sm rounded-lg  block w-full p-2.5 bg-transparent border-r-0 border-l-0 border-t-0 border-gray-600 placeholder-gray-400 text-white focus:outline-none "
              />
            </div>
            <label htmlFor="">Description*</label>

            <div className="block w-[200px]">
              <textarea
                required=""
                placeholder="Donner votre Suggestion"
                rows={3}
                className="pr-2 pl-2 bg-transparent border relative mb-7"
              />
            </div>
            <button
              className="w-full text-white bg-gradient-to-r from-[#D4145A] to-[#FBB03B] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="submit"
            >
              Se soumettre
            </button>
          </form>
        </Tilt>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={handleCloseNotification}
          />
        )}
        <div className="w-[59%] ml-48">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
}

export default Contact;
