import {styled} from "styled-components";
import { colorButton, colorButtonTxt} from "./KeyframHome"
import {NavLink} from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 340px;
  width: 100%;
  height: 450px;
  overflow: hidden;
`
export const TitleHomePage = styled.h1`
  width: 100%;
  position: absolute;
  top: 50%;
  text-align: center;
  color: #d31515;
  font-weight: bold;
  font-size: 3em;
  @media (max-width: 768px) {
    font-size: 1.7em;
  }
`
export const LinkAccueil = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #5b5a5a;
  font-weight: bold;
`
export const EnterButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7));
  transition: all .3s ease-in;
  background-color: #ececec;
  margin-top: 10%;
  @media (max-width: 768px){
    margin-top: 20%;
  }
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(-8px 7px 3px rgba(0, 0, 0, 0.7));
    animation: ${colorButton} .3s ease-in;
    background-color: #940303;
    border-radius: 25px;
  }

  &:focus {
    transform: scale(1.2);
    filter: drop-shadow(-8px 7px 3px rgba(0, 0, 0, 0.7));
    animation: ${colorButton} .3s ease-in;
    background-color: #940303;
    border-radius: 25px;
    outline: none;
  }

  &:hover > ${LinkAccueil} {
    animation: ${colorButtonTxt} .4s ease-in;
    color: white;
  }

  &:focus > ${LinkAccueil} {
    animation: ${colorButtonTxt} .4s ease-in;
    color: white;
  }
`


