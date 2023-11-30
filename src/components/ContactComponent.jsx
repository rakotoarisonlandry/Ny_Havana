import React from 'react';

function ContactComponent() {
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
    <div className='flex flex-wrap p-7 backdrop-filter backdrop-blur-sm z-2'>
      {Contacts.map((contact) => (
        <div key={contact.id} className="border m-2">
          {/* Ajoutez votre icône ici avec la balise <img> */}
          <h1>{contact.title}</h1>
          <p>{contact.email}</p>
          <p>{contact.num}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactComponent;
