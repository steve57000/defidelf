import React, { useEffect, useState } from 'react';

import '../../assets/styles/home.css';
import {ContainerHome, ContainerLogo, LinkAccueil, TitleHomePage} from "./StylesHome"
import TextArc from "../../Components/D3TextArc/TextArc";
import logo from "../../logo1.png";

import TypeWritter from "../../Components/TypeWritter/TypeWritter";

function Home() {
  // State (état, données)
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isButtonDisplayed, setIsButtonDisplayed] = useState(false);
  // Comportement
  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 5000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setIsButtonDisplayed(true);
    }, 10000);
  }, []);
  // affichage (render)
  return (
    <ContainerHome id="Home">
        <LinkAccueil to={`/homePage`} >À propos !</LinkAccueil>
        <h2 style={{marginTop: "40px"}}>Bienvenue sur la page d'accueil</h2>
    </ContainerHome>
  );
}

export default Home;
