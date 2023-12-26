import React from 'react';

import '../../assets/styles/home.css';
import {ContainerHome, ContainerLogo, EnterButton, LinkAccueil, TitleHomePage} from "./StylesHome"
import TextArc from "../../Components/D3TextArc/TextArc";
import logo from "../../logo1.png";



function Home() {
  // State (état, données)
  // Comportement
  // affichage (render)
  return (
    <ContainerHome id="Home">
        <ContainerLogo id='logo'>
            <TextArc />
            <img src={logo} className="App-logo" alt="logo" />
        </ContainerLogo>
        <TitleHomePage id="title-logo">Apprendre le français pour s'intégrer</TitleHomePage>
        <EnterButton id="buttonAccueils">
            <LinkAccueil to={`/homePage`} >
               ENTRER
            </LinkAccueil>
        </EnterButton>
    </ContainerHome>
  );
}

export default Home;
