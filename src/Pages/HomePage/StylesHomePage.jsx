import { styled } from "styled-components";
// import { NavLink } from "react-router-dom";
export const ContainerHome = styled.div`
  width: 98vw;
  height: 100vh;
  padding: 10% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: relative;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    align-items: flex-start;
    padding-top: 20px;
  }
  p{
    font-size: 120%;
  }
  .TxtBlue{
    color: blue;
    font-weight: bold;
  }
`
export const TitleHomePage = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

// export const ButtonUsers = styled(NavLink)`
//   width: 200px;
//   height: 50px;
//   display: inline-block;
//   background-color: black;
//   border-radius: 25px;
//   text-align: center;
//   line-height: 50px;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.37);
//   text-decoration: none;
//   color: #FF6060;
//   transition: all .3s ease-in-out;
//   &&:hover{
//     background-color: #FF6060;
//     color: white;
//     transform: scale(1.2);
//     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.37);
//   }
// `

