import React from 'react';

import '../../assets/styles/home.css';
import TextArc from "../../Components/D3TextArc/TextArc";
import logo from "../../logo1.png";


function Home() {
  // State (état, données)
  // Comportement
  // affichage (render)
  return (
    <div id="Home">
        <div id='logo' style={{ display: "flex", flexDirection: "column", alignItems:"center", position: "relative", width: "340px", height: "440px", overflow: "hidden"}}>
            <TextArc />
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 id="title-logo">Apprendre le français pour s'intégrer</h1>
    </div>
  );
}

export default Home;
