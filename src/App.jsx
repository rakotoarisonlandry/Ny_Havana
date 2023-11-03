import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Form from "./Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulaire" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
