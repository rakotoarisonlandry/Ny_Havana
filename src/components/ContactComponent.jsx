import React from 'react'

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
  )
}

export default ContactComponent