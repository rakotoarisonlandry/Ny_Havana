import React from "react";
import ImageSigle from "../img/Rectangle 2.svg";
import ellipse from "../img/Ellipse 2.svg";
import Iconedit from "../img/editIcon.svg";
import Icondelete from "../img/DeleteIcon.svg";
function SinglePage() {
  return (
    <div className="single">
      <div className="content">
        <img src={ImageSigle} alt="" />
        <div className="user">
          <img src={ellipse} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted to days ago</p>
          </div>
          <div className="edit">
            <img src={Iconedit} alt="" />
            <img src={Icondelete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
}

export default SinglePage;
