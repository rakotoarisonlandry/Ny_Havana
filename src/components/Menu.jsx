import React from "react";
import imageOne from "../img/Rectangle 4.svg";
import imageTwo from "../img/Rectangle 1.svg";
import yoga from "../img/Rectangle 4.svg";
import { Link } from "react-router-dom";

function Menu() {
  const posts = [
    {
      id: 1,
      title1: "Titre1",
      SubTitle: "Soutitre1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: imageOne,
    },
    {
      id: 2,
      title1: "Titre2",
      SubTitle: "Soutitre2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: imageTwo,
    },
    {
      id: 3,
      title1: "Titre3",
      SubTitle: "Soutitre3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: yoga,
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={posts.id}>
          <div className="flex gap-1 items-center ">
            <div className="w-2 h-2 rounded-full bg-[#DF4051]"></div>
            <div className="w-3 h-3 rounded-full bg-[#F9A83C]"></div>
            <h2 className="text-[#F9A83C] text-[30px] font-bold">
              {post.title1}
            </h2>
          </div>
          <Link to="/">
            <h3 className="text-[#807182] text-[20px]  font-semibold">
              {post.SubTitle}
            </h3>
          </Link>
          <Link to={`/post/${post.id}`}>
            <img src={post.img} className="w-[1800px] object-cover" alt="" />
          </Link>
          <p className="text-white ">{post.desc}</p>
          <Link
            to={`/post/${posts.id}`}
            className="text-[#FBB03B] mt-1 text-center font-semibold select-none rounded-xl border-[1px] border-[#FBB03B] pt-4 pb-4 pl-9 pr-9"
          >
            Voir plus
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
