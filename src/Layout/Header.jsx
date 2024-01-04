import '../App.css';
// import Logo from '../logo.png'
import TextArc from "../Components/D3TextArc/TextArc";
import Logo from "../logo1.png";
import React, {useEffect, useState} from "react";
import TypeWritter from "../Components/TypeWritter/TypeWritter";
import {TitleHomePage} from "../Pages/Home/StylesHome";
function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    // Comportement
    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 5000);
    }, []);
    return (
        <header className="App-header">
            <div style={{ position: "relative", display: "flex", justifyContent: "center", borderRadius: "0 0 50% 50%", width: "160px", height: "160px", overflow: "hidden"}}>
                <TextArc />
                <img className="App-logo" src={Logo} alt={""}></img>
            </div>
            <TitleHomePage id="title-logo">
                {isDisplayed &&
                    <>
                        <TypeWritter text="Apprendre le français pour s'intégrer" delay={100} ></TypeWritter>
                    </>
                }
            </TitleHomePage>
            <div style={{width: "160px", border: "1px solid red"}}></div>
        </header>
    )
}
export default Header
