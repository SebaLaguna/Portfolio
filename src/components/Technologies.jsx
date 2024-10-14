import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: "React JS", imgSrc: "/public/assets/react.png" },
    { name: "Java", imgSrc: "/public/assets/java.png" },
    { name: "C#", imgSrc: "/public/assets/csharp.png" },
    { name: ".NET", imgSrc: "/public/assets/dotnet.png" },
    { name: "Python", imgSrc: "/public/assets/python.png" },
    { name: "React Vite", imgSrc: "/public/assets/vite.png" },
    { name: "Spring Boot", imgSrc: "/public/assets/spring.png" },
    { name: "MongoDB", imgSrc: "/public/assets/mongodb.png" },
    { name: "SQL", imgSrc: "/public/assets/sql.png" },
    { name: "MySQL", imgSrc: "/public/assets/mysql.png" },
    { name: "Visual Studio", imgSrc: "/public/assets/visualstudio.png" }
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
