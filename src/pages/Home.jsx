import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import Header from "../components/Header";
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
      <div>
        Home
      </div>
    </>
  );
}

export default Home;
