import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: "React JS", imgSrc: "/public/react.png" },
    { name: "Java", imgSrc: "/public/java.png" },
    { name: "C#", imgSrc: "/public/csharp.png" },
    { name: ".NET", imgSrc: "/public/dotnet.png" },
    { name: "Python", imgSrc: "/public/python.png" },
    { name: "React Vite", imgSrc: "/public/vite.png" },
    { name: "Spring Boot", imgSrc: "/public/spring.png" },
    { name: "MongoDB", imgSrc: "/public/mongodb.png" },
    { name: "SQL", imgSrc: "/public/sql.png" },
    { name: "MySQL", imgSrc: "/public/mysql.png" },
    { name: "Visual Studio", imgSrc: "/public/visualstudio.png" }
  ];

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
