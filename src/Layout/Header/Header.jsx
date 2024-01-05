import React, {useEffect, useState} from "react";

import { useLocation } from 'react-router-dom';

import Logo from "../../logo1.png";

import TextArc from "../../Components/D3TextArc/TextArc";
import TypeWritter from "../../Components/TypeWritter/TypeWritter";

import {TitleHomePage} from "../../Pages/Home/StylesHome";
import {ContainerHeader, ContainerImg, ContainerLogo} from "./HeaderStyle"
import { LinkAccueil } from "./HeaderStyle"
function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
    // Comportement
    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 5000);
    }, []);
    return (
        <ContainerHeader>
            <ContainerLogo >
                <TextArc />
                <ContainerImg src={Logo} alt={""}></ContainerImg>
            </ContainerLogo>
            <TitleHomePage id="title-logo">
                {isDisplayed &&
                    <>
                        <TypeWritter text="Apprendre le français pour s'intégrer" delay={100} ></TypeWritter>
                    </>
                }
            </TitleHomePage>
            <nav style={{ position: "absolute", right: 0, display: "flex", flexDirection: "column"}} >
              <LinkAccueil  to="/" className={splitLocation[1] === '' ? 'active' : ''}>
                <span>Accueil</span>
              </LinkAccueil >
              <LinkAccueil
                to="/about"
                className={splitLocation[1] === 'about' ? 'active' : ''}
              >
                <span>À propos</span>
              </LinkAccueil >
              <LinkAccueil  to="/contact" className={splitLocation[1] === 'contact' ? 'active' : ''}>
                <span>Contact</span>
              </LinkAccueil >
            </nav>
        </ContainerHeader>
    )
}
export default Header
