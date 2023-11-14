import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  console.log(value)
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="items">
          <h1>Publish</h1>
          <span>
            <b>Status :</b>Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label htmlFor="file"> Upload Image</label>
          <div className="button">
            <button>Save As Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="items">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art"> Art</label>
          <input type="radio" name="cat" value="Science" id="Science" />
          <label htmlFor=""> Science </label>
        </div>
      </div>
    </div>
  );
}

export default Write;
