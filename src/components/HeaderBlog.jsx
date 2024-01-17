import React from "react";
import { Link } from "react-router-dom";
function HeaderBlog() {
  return (
    <>
      <div className="links flex mt-24 space-x-11 text-[14px] pl-11 text-[#fff]">
        <Link
          to="/blog/?cat=ResponsabiliteCivile"
          className=" focus:font-bold focus:text-[#F9A73D]"
        >
          Assurances de Responsabilite civile
        </Link>
        <Link to="/blog/?cat=Biens" className=" focus:font-bold focus:text-[#F9A73D]" >Assurance des Biens</Link>
        <Link to="/blog/?cat=Transport" className=" focus:font-bold focus:text-[#F9A73D]" >Assurance Maritimes & Transport</Link>
        <Link to="/blog/?cat=Personnes" className=" focus:font-bold focus:text-[#F9A73D]">Assurance des Personnes</Link>
        <Link to="/blog/?cat=RisquesSpeciaux" className=" focus:font-bold focus:text-[#F9A73D]">Assurance Risques Speciaux </Link>
      </div>
      <div className="flex mt-5 space-x-11 text-[16px] pl-11 text-[#fff]  ">
        <Link to="/blog/?cat=SurMesure" className=" focus:font-bold focus:text-[#F9A73D]">Assurance “Sur Mesure“</Link>
      </div>
    </>
  );
}

export default HeaderBlog;
