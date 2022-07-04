import React from "react";

import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Fonctionnalités from "./components/Fonctionnalités.js";
import Signup from "./components/Signup.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Fonctionnalités />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
