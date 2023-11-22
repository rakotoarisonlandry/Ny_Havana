import React from "react";
import { Link } from "react-router-dom";
function HeaderBlog() {
  return (
    <>
      <div className="links flex mt-5 space-x-11 text-[16px] pl-11 text-[#fff] ">
        <Link
          to="/blog/?cat=ResponsabiliteCivile"
          className="font-bold text-[#F9A73D]"
        >
          Assurances de Responabilite civile
        </Link>
        <Link to="/blog/?cat=Biens">Assurance des Biens</Link>
        <Link to="/blog/?cat=Transport">Assurance Maritimes & Transport</Link>
        <Link to="/blog/?cat=Pesronnes">Assurance des Personnes</Link>
        <Link to="/blog/?cat=RisquesSpeciaux">Assurance Risques Speciaux </Link>
      </div>
      <div className="flex mt-5 space-x-11 text-[16px] pl-11 text-[#fff]  ">
        <Link to="/blog/?cat=SurMesure">Assurance “Sur Mesure“</Link>
      </div>
    </>
  );
}

export default HeaderBlog;
