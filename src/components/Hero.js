import React from "react";

import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* /* Left Side */}
        <div className="left">
          <p>Achetez & Vendez de la Cryptomonaie 24h/24h </p>
          <h1> Investissez en apprenant sur le monde de la Cryptomonnaie </h1>
          <p>
            Le premier site reservé aux filles qui investissent dans la
            Cryptomonaie !
          </p>
          <p className="purple">
            Achetez, Vendez, sur une centaine de plateforme d'échange de
            Cryptomonnaie
          </p>
          <div className="input-container">
            <input type="email" placeholder="Entrez votre  email" />
            <button className="btn">en savoir plus</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
