import React from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <ParticlesComponent id="tsparticles" />
    </>  
  );
}

export default App;
