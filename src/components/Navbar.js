import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          De<span className="primary"> Fi</span>
          <br />
          La<span className="primary">dy</span>
        </h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Fonctionnalités</a>
          </li>
          <li>
            <a href="/">Rentabilité</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="btn-group">
          <button className="btn">Connect ton Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "purple" }} />
          ) : (
            <FaBars size={20} style={{ color: "purple" }} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
