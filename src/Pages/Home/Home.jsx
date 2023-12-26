import React, { useEffect, useState } from 'react';

import '../../assets/styles/home.css';
import {ContainerHome, ContainerLogo, EnterButton, LinkAccueil, TitleHomePage} from "./StylesHome"
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
    }, 4000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setIsButtonDisplayed(true);
    }, 8000);
  }, []);
  // affichage (render)
  return (
    <ContainerHome id="Home">
        <ContainerLogo id='logo'>
            <TextArc />
            <img src={logo} className="App-logo" alt="logo" />
        </ContainerLogo>
        <TitleHomePage id="title-logo">
          {isDisplayed &&
            <>
              <TypeWritter text="Apprendre le français pour s'intégrer" delay={100}></TypeWritter>
            </>
          }
        </TitleHomePage>

        {isButtonDisplayed &&
          <>
            <EnterButton id="buttonAccueils">
              <LinkAccueil to={`/homePage`} >
                ENTRER
              </LinkAccueil>
            </EnterButton>
          </>
        }
    </ContainerHome>
  );
}

export default Home;
