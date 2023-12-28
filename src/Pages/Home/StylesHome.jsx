import {styled} from "styled-components";
import { colorButton, colorButtonTxt} from "./KeyframHome"
import {NavLink} from "react-router-dom";

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 50px;
  @media screen and (orientation:landscape) {
    align-items: flex-start;
  }
`
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 320px;
  height: 300px;
  overflow: hidden;
  border-radius: 0 0 50% 50%;

  @media screen and (orientation:landscape) {
    align-items: flex-start;
    padding: 10px;

    .App-logo {
      left: 13.5%;
    }
  }
`
export const TitleHomePage = styled.h1`
  position: absolute;
  top: 50%;
  text-align: center;
  color: #d31515;
  font-weight: bold;
  font-size: 3em;
  @media (max-width: 720px) {
    font-size: 1.6em;
  }
  @media screen and (orientation:landscape) {
    font-size: 2em;
    top: 35%;
    left: 40%;
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
  transition: all .3s ease-in-out;
  background-color: #ffffff;
  position: absolute;
  top: 70%;

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
  @media screen and (orientation:landscape) {
    top: 60%;
    left: 50%;
  }
`


