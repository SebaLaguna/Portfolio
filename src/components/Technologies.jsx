import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: "React JS", imgSrc: "./images/react.png" },
    { name: "Java", imgSrc: "./images/java.png" },
    { name: "C#", imgSrc: "./images/csharp.png" },
    { name: ".NET", imgSrc: "./images/dotnet.png" },
    { name: "Python", imgSrc: "./images/python.png" },
    { name: "React Vite", imgSrc: "./images/vite.png" },
    { name: "Spring Boot", imgSrc: "./images/spring.png" },
    { name: "MongoDB", imgSrc: "./images/mongodb.png" },
    { name: "SQL", imgSrc: "./images/sql.png" },
    { name: "MySQL", imgSrc: "./images/mysql.png" },
    { name: "Visual Studio", imgSrc: "./images/visualstudio.png" }
  ];

  console.log("cargando foto ",technologies[0].imgSrc );
  return (
    <div className="technologies-container text-center" id='technologies'>
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
