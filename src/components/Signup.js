import React from "react";
import "./Signup.css";
import Woman from "../assets/women.jpg";
const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* gauche  */}
        <div className="gauche">
          <img src={Woman} alt="" />
        </div>
        {/* drtoite */}
        <div className="right">
          <h2> Generez des revenus passifs avec vos cryptos</h2>
          <p>
            {" "}
            Augmentez vos avoirs en crypto, avec le minage de liquidités, la
            DEFI mining, le stacking !{" "}
          </p>
          <div className="input-container">
            <input type="email" placeholder="Entrez votre email" />
            <button className="btn"> En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
