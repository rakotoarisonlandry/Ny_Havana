import React, { useContext, useEffect, useState } from "react";
import ImageSigle from "../img/Rectangle 2.svg";
import ellipse from "../img/Ellipse 2.svg";
import Iconedit from "../img/editIcon.svg";
import Icondelete from "../img/DeleteIcon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContexte } from "../context/AuthContext";

function SinglePage() {
  const [post, setPost] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContexte);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [postId]);

  const handlDelete =async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} className="w-[80%] h-[26%]" alt="" />
        <div className="user">
          {post.userImg &&  <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Iconedit} className="w-7" alt="" />
              </Link>
              <img onClick={handlDelete} src={Icondelete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
}

export default SinglePage;
