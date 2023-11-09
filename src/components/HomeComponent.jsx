import React from "react";
import { Link } from "react-router-dom";
import imageOne from "../img/Rectangle 2.svg";
import imageTwo from "../img/Rectangle 1.svg";
import yoga from "../img/Rectangle 4.svg";

function HomeComponent() {
  const posts = [
    {
      id: 1,
      title1: "Titre1",
      SubTitle: "Soutitre1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni maxime quia similique iste explicabo aliquid ullam aut magnam error, hic consequatur ad placeat accusantium quibusdam veritatis nulla est ex!",
      img: imageOne,
    },
    {
      id: 2,
      title1: "Titre2",
      SubTitle: "Soutitre2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni maxime quia similique iste explicabo aliquid ullam aut magnam error, hic consequatur ad placeat accusantium quibusdam veritatis nulla est ex!",
      img: imageTwo,
    },
    {
      id: 3,
      title1: "Titre3",
      SubTitle: "Soutitre3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni maxime quia similique iste explicabo aliquid ullam aut magnam error, hic consequatur ad placeat accusantium quibusdam veritatis nulla est ex!",
      img: yoga,
    },
  ];
  return (
    <div className="home p-20 w-full flex items-center justify-center">
      <div className="posts mt-[20%]  flex-col w-[100%] ">
        {posts.map((post) => (
          <div key={post.id} className="flex mb-[20%] post flex  ">
            <div>
              <img src={post.img} className="w-[1800px] object-cover" alt="" />
            </div>
            <div className="desc ml-24 mr-16">
              <Link to={`/post/${post.id}`}>
                <div className="flex gap-1 items-center ">
                  <div className="w-2 h-2 rounded-full bg-[#DF4051]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F9A83C]"></div>
                  <h2 className="text-[#F9A83C] text-[30px] font-bold">
                    {post.title1}
                  </h2>
                </div>
                <h3 className="text-[#807182] text-[20px]  font-semibold">
                  {post.SubTitle}
                </h3>
              </Link>
              <p className="text-white ">{post.desc}</p>
              <div className="mt-16">
                <Link
                  to=""
                  className="text-[#FBB03B] mt-16 font-semibold select-none rounded-xl border-[1px] border-[#FBB03B] pt-4 pb-4 pl-9 pr-9"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeComponent;
