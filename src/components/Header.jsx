import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  return (
    <div className ="header-wraper">
      <div className="main-info">
        <h1>web development and websites promotions</h1>
        <div className="typed-container">
          <Typewriter
            className="typed-text"
            words={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </div>
        <a href="#" className="btn-main-offer"> Contact Me</a>
      </div>
    </div>
  );
};

export default Header;

