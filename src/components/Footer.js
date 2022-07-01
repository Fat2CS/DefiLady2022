import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <h1>
          De <span className="primary">Fi</span>
        </h1>
      </div>
      <div className="footer">
        <div className="container">
          {/* <div className="col col-1"> */}
          <div className="col">
            <h5>A propos </h5>
            <span className="bar"></span>
            <a href="/">Contact Fr</a>
            <a href="/">FAQ</a>
            <a href="/">Information</a>
            <a href="/">Api</a>
          </div>

          <div className="col">
            <h5>Support</h5>
            <span className="bar"></span>
            <a href="/">Aide</a>
            <a href="/">Pro</a>
            <a href="/">Data</a>
            <a href="/">Api</a>
          </div>
          <div className="col">
            <h5>Réseaux sociaux</h5>
            <span className="bar"></span>
            <a href="/">
              <FaFacebook className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
            <a href="/">
              <FaLinkedin className="icon" />
            </a>
            <a href="/">
              <FaGithub className="icon" />
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
