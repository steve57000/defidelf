import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: relative;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    align-items: flex-start;
    padding-top: 20px;
  }
`
export const TitleHomePage = styled.h1`
  width: 80%;
  text-align: center;
  color: #d31515;
  font-weight: bold;
  font-size: 2em;
  @media (max-width: 720px) {
    width: 100%;
    font-size: 1.2em;
    margin-top: 0
  }
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    font-size: 1.7em;
  }
`

export const LinkAccueil = styled(NavLink)`
  position: absolute;
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  font-size: 110%;
  font-weight: bold;
  color: #344597;
  transition: all .3s ease-in;
  background: -moz-linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);
  background: -webkit-linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);
  background: linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);
  top: 2%;
  right: 0;
  @media screen and (min-width: 320px) and (max-width: 820px) and (orientation: landscape) {
    top: 60%;
    left: 50%;
  }

  &:hover {
    transform: scale(1.2);
    font-size: 110%;
    background: -moz-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#daead4",endColorstr="#acb3d5",GradientType=1);
    box-shadow: -6px 6px 5px rgb(127 122 122 / 42%);
    text-shadow: -2px 1px 2px rgba(162, 162, 162, 0.85);
    border-radius: 25px;
    color: #102394;
    letter-spacing: 4px;
  }
`

