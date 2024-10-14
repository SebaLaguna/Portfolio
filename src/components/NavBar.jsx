import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home"); // Estado para manejar el enlace activo

  const handleLinkClick = (link) => {
    setActiveLink(link); // Actualiza el enlace activo al hacer clic
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} id="hamburguer-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["#home", "#about", "#services", "#technologies", "#portfolio", "#contact"].map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className={`nav-link ${activeLink === link ? 'active' : ''}`} 
                  aria-current={activeLink === link ? "page" : undefined}
                  href={link}
                  onClick={() => handleLinkClick(link)} 
                >
                  {link.substring(1).charAt(0).toUpperCase() + link.substring(2)} 
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
