import React, { useState } from "react";
import "./NavBar.css";

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
            <a href="/">Home</a>
          </li>
          <br />
          <li className="nav-item">
            <a href="/StudentRegister">Studen Register</a>
          </li>
          <br />
          <li className="nav-item">
            <a className="nav-link" href="/InteractivePoster">
              Interactive Poster
            </a>
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
