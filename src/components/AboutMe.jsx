import React from "react";
import profilePic from "../assets/perfil.png";

const AboutMe = () => {
  return (
    <div className="section about-me-container text-center" id="about">
      <h2 className="text-orange">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={profilePic} alt="Profile" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="mt-3">
            Hello! I am a passionate backend developer focused on creating
            efficient and scalable solutions. I have experience working with
            technologies such as Java Spring, .NET Framework, Databases like MongoDB. My goal is have my first job in the develompent area.
          </p>
          <p>
            I love collaborating on interesting projects, and I am always open
            to new opportunities for work and learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
