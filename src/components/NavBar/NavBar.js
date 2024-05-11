import React, { useState } from "react";
import "./NavBar.css";
import NavigateButton from "../NavigateButton/NavigateButton";
function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      const elements = document.getElementsByClassName("nav-menu");
      elements[0].style.display = "block";
      setActive("nav-menu nav-active");
    } else {
      const elements = document.getElementsByClassName("nav-menu");
      elements[0].style.display = "none";
      setActive("nav-menu");
    }

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  return (
    <div>
      <nav className="nav">
        <img src="./logo.png" width="50px" alt="none" />
        <div className="nav_title">
          <h1 className="nav-brand">JOBMATCH</h1>
        </div>
        <ul className={active}>
          <li className="nav-item">
            <NavigateButton goTo="/" button="Home" />
          </li>
          <br />
          <li className="nav-item">
            <NavigateButton goTo="/StudentRegister" button="Studen Register" />
          </li>
          <br />
          <li className="nav-item">
            <NavigateButton goTo="/Register-App" button="App Login" />
          </li>
          <br />
          <li className="nav-item">
            <NavigateButton
              goTo="/InteractivePoster"
              button="Interactive Poster"
            />
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
