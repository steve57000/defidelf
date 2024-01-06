import React, {useEffect, useState} from "react";

import { useLocation } from 'react-router-dom';

import Logo from "../../logo1.png";

import TextArc from "../../Components/D3TextArc/TextArc";
import TypeWritter from "../../Components/TypeWritter/TypeWritter";

import {TitleHomePage} from "../../Pages/Home/StylesHome";
import {
    ContainerHeader,
    ContainerImg,
    ContainerLogo,
    Nav,
    NavLi,
    NavUl,
    LinkAccueil,
    ContainerBurger,
    StyledBurgerOne,
    StyledBurgerThree,
    StyledBurgerTwo
} from "./HeaderStyle"


function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false)
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }
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
            <Nav>
              <NavUl $isOpen={burgerOpen} >
                  <NavLi>
                      <LinkAccueil  to="/" className={splitLocation[1] === '' ? 'active' : ''} >
                          <span>Accueil</span>
                      </LinkAccueil >
                  </NavLi>
                  <NavLi>
                      <LinkAccueil
                          to="/about"
                          className={splitLocation[1] === 'about' ? 'active' : ''}
                      >
                          <span>À propos</span>
                      </LinkAccueil >
                  </NavLi>
                  <NavLi>
                      <LinkAccueil  to="/contact" className={splitLocation[1] === 'contact' ? 'active' : ''}>
                          <span>Contact</span>
                      </LinkAccueil >
                  </NavLi>
              </NavUl>
                <ContainerBurger onClick={toggleBurger} >
                    <StyledBurgerOne $isOpen={burgerOpen} ></StyledBurgerOne>
                    <StyledBurgerTwo $isOpen={burgerOpen} ></StyledBurgerTwo>
                    <StyledBurgerThree $isOpen={burgerOpen} ></StyledBurgerThree>
                </ContainerBurger>
            </Nav>
        </ContainerHeader>
    )
}
export default Header
