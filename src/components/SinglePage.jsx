import React from "react";
import ImageSigle from "../img/Rectangle 2.svg";
import ellipse from "../img/Ellipse 2.svg";
import Iconedit from "../img/editIcon.svg";
import Icondelete from "../img/DeleteIcon.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";
function SinglePage() {
  return (
    <div className="single">
      <div className="content">
        <img src={ImageSigle} className="w-[80%] h-[26%]" alt="" />
        <div className="user">
          <img src={ellipse} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted to days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Iconedit} className="w-7" alt="" />
            </Link>
            <img src={Icondelete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit eos incidunt nulla eum saepe dolore sint ducimus molestias quibusdam error impedit, magni ratione illo amet modi iure! Praesentium, ipsam tempore?
          Nobis ullam nesciunt quod corrupti veritatis. Architecto dicta modi corporis repudiandae maiores aliquid quidem a error? Officiis ducimus repudiandae dolore laudantium nam corrupti labore, tempore blanditiis quisquam! Repudiandae, nihil quos.
          Repellendus id, mollitia commodi illo vitae odio inventore error harum tempora libero ullam necessitatibus accusantium est labore soluta in distinctio ea laborum sapiente magni eius fugiat quia vero ducimus. Error.
          Aliquid reiciendis natus modi vitae nobis amet saepe ad labore optio ducimus tenetur eaque fugiat, voluptatem voluptates iusto obcaecati. Beatae debitis incidunt sunt vel exercitationem ut officia corporis veniam delectus?
          Illo facere quia accusamus adipisci, eveniet corrupti? Laboriosam modi, iusto eaque impedit sit itaque obcaecati saepe suscipit? Tenetur commodi quia sint illo quis cum minima sit adipisci ullam a. Quae.
          Perspiciatis temporibus fugit suscipit earum aspernatur. Inventore voluptatibus numquam laborum nostrum! Quasi, dolore a? Ipsa animi non ut impedit obcaecati optio esse nostrum deserunt aspernatur aliquam quam, a cum ipsam!
          Consequatur odit laboriosam adipisci. Consequuntur, dolor, molestias adipisci eligendi vel aperiam optio deleniti perspiciatis pariatur, itaque vitae. Incidunt ullam quae minus repudiandae quis, fugit accusamus possimus corrupti, iste est eos!
          Ab veritatis rem numquam aut assumenda quos quod ea maiores est similique, nulla beatae deserunt! Consequatur nihil perferendis itaque aliquam quos culpa cupiditate unde debitis aspernatur? Optio expedita molestias eaque.
          Voluptatibus quas ex distinctio eligendi animi ab numquam iusto eaque! Quia, laborum deserunt? Voluptatibus, dignissimos expedita molestiae incidunt et hic omnis optio aspernatur, porro eligendi enim, aperiam voluptas consequatur eum!
        </p>
      </div>
      <Menu/>
    </div>
  );
}

export default SinglePage;
