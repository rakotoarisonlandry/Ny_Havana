import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
          });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add ">
      <div className="content mt-24">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="Menu mt-24">
        <div className="items">
          <h1>Publish</h1>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])} 
          />
          <label htmlFor="file" className=""> Upload Image</label>
          
        </div>
        <div className="items">
          <h1>Category</h1>
          <div>
            <input
              type="radio"
              checked={cat === "ResponsabiliteCivile"}
              name="cat"
              value="ResponsabiliteCivile"
              id="ResponsabiliteCivile"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art"> Assurances de Responsabilite civile</label>
          </div>
          <div>
            <input
              type="radio"
              checked={cat === "Biens"}
              name="cat"
              value="Biens"
              id="Biens"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Assurance des Biens</label>
          </div>
          <div>
            <input
              type="radio"
              checked={cat === "Transport"}
              name="cat"
              value="Transport"
              id="Transport"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Assurance Maritimes & Transport</label>
          </div>
          <div>
            <input
              type="radio"
              checked={cat === "Personnes"}
              name="cat"
              value="Personnes"
              id="Personnes"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Assurance des Personnes</label>
          </div>
          <div>
            <input
              type="radio"
              checked={cat === "RisquesSpeciaux"}
              name="cat"
              value="RisquesSpeciaux"
              id="RisquesSpeciaux"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Assurance Risques Speciaux</label>
          </div>
          <div>
            <input
              type="radio"
              checked={cat === "SurMesure"}
              name="cat"
              value="SurMesure"
              id="SurMesure"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="">Assurance “Sur Mesure“</label>
          </div>
        </div>
        <div className="button flex space-x-10">
            <button
              onClick={handleClick}
              className="pt-4 pb-4 pl-9 pr-9 flex select-none  space-x-3  rounded-xl text-[#fff]  font-bold bg-gradient-to-r from-[#D4145A] to-[#FBB03B]"
            >
              Publish
            </button>
          </div>
      </div>
    </div>
  );
}

export default Write;
