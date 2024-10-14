import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Button } from 'react-bootstrap';

const Header = ({ children }) => {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-wraper" id="home">
      {children} 
      <div className="main-info">
        <h1>Backend Developer</h1>
        <div className="typed-container">
          <Typewriter
            className="typed-text"
            words={["SQL / NoSQL Databases", "Java Spring", ".NET Framework", "Python / Java / C#", "Junior Developer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

//  <Button variant="primary" type="submit" onClick={handleScrollToContact}>
 //   Contact Me
 // </Button>