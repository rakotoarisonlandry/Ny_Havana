import React from "react";
import RecommendIcon from "@mui/icons-material/Recommend";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
function ContactComponent() {
  const Contacts = [
    {
      id: 1,
      icon: <RecommendIcon style={{ color:"#c3e9ff"}}/> ,
      title: "ACT02 Immeuble NY HAVANA ",
      email: "act02@nyhavana.mg",
      adresse: "Antananarivo 101 -zone 67ha",
      num: "+261 34 07 220 30 / +261 32 02 008 10",
    },
    {
      id: 2,
      icon: <VolunteerActivismIcon style={{color:"#80a072"}}/>,
      title: "ACT II",
      email: "nyhavana_actii@moov.mg",
      adresse: "Antananarivo 101 -Ankorondrano",
      num: "+261 34 07 220 31 / +261 32 04 710 70",
    },
    {
      id: 3,
      icon: <HandshakeIcon style={{color:"#f8a53d"}}/>,
      title: "ACT III",
      email: "nyhavana_actii@moov.mg",
      adresse: "Antananarivo 101 -Ambatomena",
      num: "+261 34 07 220 36 / +261 32 02 134 55",
    },
    {
      id: 4,
      icon: <AddIcCallRoundedIcon style={{color:"#e54e5e"}}/>,
      title: "AC INDEPENDANCE",
      email: "ac.independance@nyhavana.mg",
      adresse: "Antananarivo 101-Av de l'Indépendance",
      num: "+261 34 07 220 36 / +261 32 02 134 55",
    },
    {
      id: 5,
      icon: <AnimationRoundedIcon style={{color:"#80a072"}}/>,
      title: "AC AMBOSITRA",
      email: "ac.ambositra@nyhavana.mg",
      adresse: "306 Ambositra-Andrefatsena",
      num: "+261 34 07 220 51 / +261 32 05 008 29",
    },
    {
      id: 6,
      icon: <CampaignRoundedIcon style={{color:"#f8a53d"}}/>,
      title: "AC ANTALAHA",
      email: "ac.antalaha@nyhavana.mg",
      adresse: "206 Antalaha-BP de paris",
      num: "+261 34 07 220 42 / +261 32 05 008 54",
    },
    {
      id: 7,
      icon: <ShoppingCartRoundedIcon  style={{color: "#c62734"}}/>,
      title: "AC ANTSIRABE",
      email: "ac.antsirabe@nyhavana.mg",
      adresse: "110 Antsirabe -Av jean Ralaimongo",
      num: "+261 34 07 220 39 / +261 32 05 008 33",
    },
    {
      id: 8,
      icon: <AssistantPhotoRoundedIcon />,
      title: "AC ANTSIRANANA",
      email: "ac.diego@nyhavana.mg",
      adresse: "201 Antsiranana - Av Lally Tollendal",
      num: "+261 34 07 220 40",
    },
  ];

  return (
    <div className="flex flex-wrap  backdrop-filter backdrop-blur-sm z-2">
      {Contacts.map((contact) => (
        <div
          key={contact.id}
          className="border border-zinc-700 text-white  m-3 pt-5 pb-5 pl-7 pr-7"
        >
          {/* Ajoutez votre icône ici avec la balise <img> */}
          {/* <img src={contact.icon} className="rounded-full" alt="" /> */}
          {contact.icon}
          <h2 className="font-bold ">{contact.title}</h2>
          <p className="opacity-50 text-[15px]">{contact.email}</p>
          <p className="opacity-50 text-[15px]">{contact.adresse}</p>
          <p className="opacity-40 text-[15px]">{contact.num}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactComponent;
