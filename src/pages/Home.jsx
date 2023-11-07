import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const customStyle = {
    fontWeight: 700, // La valeur 800 correspond à "extrabold" en termes de poids de police
    fontSize: "53px", // Taille de police personnalisée
  };
  return (
    <>
      <div className="w-full mt-32 ml-12 flex ">
        <div className="w-[50%] space-y-7 ">
          <Typography variant="h2" className="text-gradient " style={customStyle}>
            Compagnie Malgache D’assurance et de Reassurance.
          </Typography>
          <Typography variant="body1" className="text-base text-[#AE9F9F]">
            “...Bien assuré,lendemain sécurisé.“
          </Typography>
          <div className="flex space-x-4">
            <button className="pt-1 pb-3 pl-7 pr-7 rounded-md text-[#fff]  font-bold bg-gradient-to-r from-[#D4145A] to-[#FBB03B]">Votre economie ici</button>
            <button className="text-[#fff] rounded-md border-[1px] border-[#FBB03B] pt-3 pb-3 pl-7 pr-7">Contact Us</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
