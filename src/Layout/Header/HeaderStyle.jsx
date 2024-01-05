import { styled } from "styled-components";
import { MoveLogoUp, SpinLogo, DropLogo } from "./HeaderKeyframe"
import {NavLink} from "react-router-dom";
export const ContainerHeader = styled.header`
  max-width: 1480px;
  width: 100vw;
  background: -moz-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(178, 218, 235, 1) 60%, rgba(172, 179, 213, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(178, 218, 235, 1) 60%, rgba(172, 179, 213, 1) 100%);
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(178, 218, 235, 1) 60%, rgba(172, 179, 213, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fffff",endColorstr="#acb3d5",GradientType=1);
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #979696;
  box-shadow: 0 1px 3px #434343;
  padding: 0 10px;
`

export const ContainerLogo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 0 0 50% 50%;
  width: 160px; height: 160px;
  overflow: hidden;
`
export const ContainerImg = styled.img`
  width: 80px;
  height: 80px;
  pointer-events: none;
  position: absolute;
  top: 28.8%;
  @media (prefers-reduced-motion: no-preference) {
      box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6);
      border-radius: 50%;
      filter: drop-shadow( 1px 0 0 #940303);
      animation: ${MoveLogoUp} 4.8s ease-in-out, ${SpinLogo}  10s  linear, ${DropLogo} infinite 20s 5000ms ease-in-out;
  }
`
export const LinkAccueil = styled(NavLink)`
  width: 180px;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  font-size: 110%;
  font-weight: bold;
  color: #344597;
  transition: all .5s ease-in-out;
  background: -moz-linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);
  background: -webkit-linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);
  background: linear-gradient(90deg, rgba(218, 234, 212, 0.5) 0%, rgba(178, 218, 235, 0.5) 50%, rgba(172, 179, 213, 0.5) 100%);

  &:hover {
    font-size: 110%;
    background: -moz-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#daead4",endColorstr="#acb3d5",GradientType=1);
    box-shadow: -6px 6px 5px rgb(127 122 122 / 42%);
    text-shadow: -2px 1px 2px rgba(162, 162, 162, 0.85);
    color: red;
    letter-spacing: 2px;
    justify-content: center;
  }
`
