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

  return (
    <>
      <div className="w-full pt-32 pl-7 flex">
        <div className="w-[50%]">
          <Typography variant="h2" className="text-[90px]">
            Compagnie Malgache D’assurance et de Reassurance.
          </Typography>
          <Typography variant="body1" className="text-base">
            “...Bien Assuré, lendemain sécurisé.“
          </Typography>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
