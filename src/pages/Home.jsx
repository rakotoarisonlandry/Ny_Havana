import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import Typography from "@mui/material/Typography";
import little from "../img/Group 6.svg";
import ImageComponent from "../components/ImageComponent";
import { Link } from "react-router-dom";
import iconify from "../img/Inconify.svg";
import HomeComponent from "../components/HomeComponent";


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
    fontWeight: 700,
    fontSize: "53px",
  };
  return (
    <>
      <img src={little} alt="little avatar" className="absolute" />
      <div className=" mt-28 ml-10 flex ">
        <div className="w-[50%] space-y-7 ">
          <Typography
            variant="h2"
            className="text-gradient "
            style={customStyle}
          >
            Compagnie Malgache D’assurance et de Reassurance.
          </Typography>
          <Typography variant="body1" className="text-base text-[#AE9F9F]">
            “...Bien assuré,lendemain sécurisé.“
          </Typography>
          <div className="flex space-x-4 pt-10">
            <Link
              to=""
              className="pt-4 pb-4 pl-9 pr-9 flex select-none  space-x-3  rounded-xl text-[#fff]  font-bold bg-gradient-to-r from-[#D4145A] to-[#FBB03B]"
            >
              <p>Lire la suite</p>
              <img src={iconify} alt="inconify" className="w-5 pt-1" />
            </Link>
            <Link
              to=""
              className="text-[#FBB03B] font-semibold select-none rounded-xl border-[1px] border-[#FBB03B] pt-4 pb-4 pl-9 pr-9"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
        <div>
          <ImageComponent />
        </div>
      </div>
      <div><HomeComponent/></div>
    </>
  );
}

export default Home;
