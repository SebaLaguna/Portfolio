import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: "React JS", imgSrc: "/src/components/images/react.png" },
    { name: "Java", imgSrc: "/src/components/images/java.png" },
    { name: "C#", imgSrc: "/src/components/images/csharp.png" },
    { name: ".NET", imgSrc: "/src/components/images/dotnet.png" },
    { name: "Python", imgSrc: "/src/components/images/python.png" },
    { name: "React Vite", imgSrc: "/src/components/images/vite.png" },
    { name: "Spring Boot", imgSrc: "/src/components/images/spring.png" },
    { name: "MongoDB", imgSrc: "/src/components/images/mongodb.png" },
    { name: "SQL", imgSrc: "/src/components/images/sql.png" },
    { name: "MySQL", imgSrc: "/src/components/images/mysql.png" },
    { name: "Visual Studio", imgSrc: "/src/components/images/visualstudio.png" }
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
