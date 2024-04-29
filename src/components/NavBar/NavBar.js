import React, { useState, Link } from "react";
import "./NavBar.css";

function NavBar() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  return (
    <div>
      <nav className="nav">
        {/* <img src="./public/logo.png" width="50px" /> */}
        <div className="nav_title">
          <h1 className="nav-brand">Build</h1>
        </div>
        <ul className={active}>
          <li className="nav-item">
            <button>About us</button>
          </li>
          <li className="nav-item">
            <button>btn</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">btn</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">btn</button>
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
