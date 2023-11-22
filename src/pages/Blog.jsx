import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import imageOne from "../img/Rectangle 2.svg";
import imageTwo from "../img/Rectangle 1.svg";
import yoga from "../img/Rectangle 4.svg";
import axios from "axios";
import HeaderBlog from "../components/HeaderBlog";
function HomeComponent() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  // // console.log(location)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${cat}`);
        console.log(res);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <>
      <HeaderBlog />
      <div className="home  pt-20 w-full flex items-center justify-center">
        <div className="posts mt-[1%] items-center justify-center flex-col w-[100%] ">
          {posts.map((post) => (
            <div key={post.id} className="flex mb-[20%]  post flex">
              <div>
                <Link to={`/post/${post.id}`}>
                  <img
                    src={post.img}
                    className="w-[1800px] object-cover"
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc ml-24 mr-16 w-full">
                <Link to="/blog">
                  <div className="flex gap-1 items-center ">
                    <div className="w-2 h-2 rounded-full bg-[#DF4051]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F9A83C]"></div>
                    <h2 className="text-[#F9A83C] text-[30px] font-bold">
                      {post.title}
                    </h2>
                  </div>
                </Link>
                <p className="text-white ">{post.desc}</p>
                <div className="mt-16">
                  <Link
                    to={`/post/${post.id}`}
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
    </>
  );
}

export default HomeComponent;
