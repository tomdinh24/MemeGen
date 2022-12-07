import React from "react";
import "./styles/styles.css";

import Navbar from "./components/Navbar.js";
import Meme from "./components/Meme.js"

export default function App() {
  return (
    <div className="container">
      <Navbar/>
      <Meme/>

    </div>
  );
}

