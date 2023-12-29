import {styled} from "styled-components";
import { colorButton, colorButtonTxt} from "./KeyframHome"
import {NavLink} from "react-router-dom";

export const ContainerHome = styled.div`
  width: 98vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: relative;
  padding-top: 50px;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    align-items: flex-start;
    padding-top: 20px;
  }
`
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 320px;
  overflow-y: hidden;
  border-radius: 0 0 50% 50%;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    align-items: flex-start;

    .App-logo {
      left: 17.7%;
    }
  }
`
export const TitleHomePage = styled.h1`
  position: absolute;
  top: 45%;
  text-align: center;
  color: #d31515;
  font-weight: bold;
  font-size: 3em;
  @media (max-width: 720px) {
    font-size: 1.6em;
  }
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    font-size: 2em;
    top: 35%;
    left: 40%;
  }
`

export const EnterButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: #5b5a5a;
`


export const LinkAccueil = styled(NavLink)`
  position: absolute;
  width: 180px;
  height: 50px;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7));
  transition: all .4s ease-in;
  background-color: #ffffff;
  top: 70%;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    top: 60%;
    left: 50%;
  }
  &:active {
    transform: scale(1.2);
    //width: 250px;
    //height: 60px;
    filter: drop-shadow(-8px 7px 3px rgba(0, 0, 0, 0.7));
    animation: ${colorButton} .4s ease-in;
    background-color: #940303;
    border-radius: 25px;
  }

  &:focus {
    //transform: scale(1.2);
    width: 250px;
    height: 60px;
    filter: drop-shadow(-8px 7px 3px rgba(0, 0, 0, 0.4));
    animation: ${colorButton} .4s ease-in;
    background-color: #940303;
    border-radius: 25px;
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
    //width: 250px;
    //height: 60px;
    filter: drop-shadow(-8px 7px 3px rgba(0, 0, 0, 0.7));
    animation: ${colorButton} .4s ease-in;
    background-color: #940303;
    border-radius: 25px;
  }

  &:active > ${EnterButton} {
    animation: ${colorButtonTxt} .3s ease-in;
    color: white;
    letter-spacing: 2px;
    filter: drop-shadow(-2px 1px 1px rgba(0, 0, 0, 1));

  &:focus > ${EnterButton} {
    animation: ${colorButtonTxt} .3s ease-in;
    color: white;
    letter-spacing: 2px;
    filter: drop-shadow(-2px 1px 1px rgba(0, 0, 0, 1));

  &:hover > ${EnterButton}  {
    animation: ${colorButtonTxt} .3s ease-in;
    color: white;
    letter-spacing: 4px;
    filter: drop-shadow(-2px 1px 1px rgba(0, 0, 0, 1));
  }

`

