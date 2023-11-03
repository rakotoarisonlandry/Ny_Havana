import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"
import Header from "./Header";
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
        <Header/>
      </div>
    </>
  );
}

export default Home;
