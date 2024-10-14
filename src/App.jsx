import React from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Header >
        <ParticlesComponent id="tsparticles" /> 
      </Header>
      <AboutMe/>
      <Services/>
      <Technologies/>
      <Portfolio/>
      <ContactMe/>

    </>  
  );
}

export default App;
