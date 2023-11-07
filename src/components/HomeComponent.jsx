import React from "react";
import avatar from "../img/Avatar.svg";
import Groupe2 from "../img/Shape.svg";
import ellipse from "../img/Ellipse 2.svg";
function HomeComponent() {
  return (
    <div>
      <img src={avatar} alt="" className="absolute top-32 pl-12" />
      <img src={ellipse} alt="" className="absolute bottom-6 pr-56" />
      <img src={Groupe2} alt="" className="absolute top-20 pr-12 w-28" />
    </div>
  );
}

export default HomeComponent;
