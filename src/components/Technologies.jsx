import React from 'react';
import ReactJS from "../../public/assets/react.png";
import Java from "../../public/assets/java.png";
import CSharp from "../../public/assets/csharp.png";
import DotNet from "../../public/assets/dotnet.png";
import Python from "../../public/assets/python.png";
import Vite from "../../public/assets/vite.png";
import SpringBoot from "../../public/assets/spring.png";
import MongoDB from "../../public/assets/mongodb.png";
import SQL from "../../public/assets/sql.png";
import MySQL from "../../public/assets/mysql.png";
import VisualStudio from "../../public/assets/visualstudio.png";

const technologies = [
  { name: "React JS", imgSrc: ReactJS },
  { name: "Java", imgSrc: Java },
  { name: "C#", imgSrc: CSharp },
  { name: ".NET", imgSrc: DotNet },
  { name: "Python", imgSrc: Python },
  { name: "React Vite", imgSrc: Vite },
  { name: "Spring Boot", imgSrc: SpringBoot },
  { name: "MongoDB", imgSrc: MongoDB },
  { name: "SQL", imgSrc: SQL },
  { name: "MySQL", imgSrc: MySQL },
  { name: "Visual Studio", imgSrc: VisualStudio }
];

const Technologies = () => {
  return (
    <div className="technologies-container text-center" id="technologies">
      <h2 className="text-orange">Technologies</h2>
      <div className="icon-container">
        {technologies.map((tech, index) => (
          <div className="tech-icon" key={index}>
            <img src={tech.imgSrc} alt={tech.name} className="icon" />
            <span className="icon-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
