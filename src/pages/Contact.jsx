import React from "react";

function Contact() {
  const Contacts = [
    {
      // icon :,
      id: 1,
      title: "Lorem",
      email: "billing@templatemonster.com",
      num: "loremm ",
    },
    {
      // icon :,
      id: 2,
      title: "Lorem",
      email: "billing@templatemonster.com",
      num: "loremm ",
    },
    {
      // icon :,
      id: 3,
      title: "Lorem",
      email: "billing@templatemonster.com",
      num: "loremm ",
    },
    {
      // icon :,
      id: 4,
      title: "Lorem",
      email: "billing@templatemonster.com",
      num: "loremm ",
    },
  ];
  return (
    <div>
      <h1 className="text-center">Contact Us</h1>
      <p>On vous suit tres reconnaissons de partager votre idées avec nous</p>
      <div className="flex w-[90%]">
        <form className="space-y-4 md:space-y-6">
          <h2>Submiter une requette</h2>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              request to*
            </label>
            <input
              type="text"
              className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="">Nom complet</label>
            <input
              type="text"
              placeholder="Veuillez entrer votre Nom complet"
            />
          </div>
          <div>
            <label htmlFor="">Votre adresse E-mail*</label>
            <input
              type="email"
              placeholder="Veuillez entrer votre e-mail"
              required
            />
          </div>
          <div>
            <label htmlFor="">Sujet*</label>
            <input type="text" required />
          </div>
          <label htmlFor="">Description*</label>
        </form>
        <div>
          <div>
            {Contacts.map((contact) => {
              <div key={contact.id} className="border">
                <img src="" alt="" />
                <h1>{contact.title}</h1>
                <p>{contact.email}</p>
                <p>{contact.num}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
