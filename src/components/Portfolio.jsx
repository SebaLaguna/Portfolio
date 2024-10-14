import React, { useState } from "react";
import NavalBattle from "./images/batalla.png";
import Trello from "./images/trello.png";
const projects = [
  {
    id: 1,
    title: "Naval Battle",
    image:  NavalBattle,
    description:
      "This project consists of simulating the game Battleship using SOLID principles, utilizing the Telegram application for participants to play. This project is made in C#.",
    repoLink: "https://github.com/SebaLaguna/BatallaNavalCSharp", 
  },
  {
    id: 2,
    title: "Trello",
    image: Trello,
    description:
      "This project is built with React Vite and simulates the same functionality as the web application for organizing tasks known as Trello, where we can create, assign, schedule tasks, and much more.",
    repoLink: "https://github.com/Dwymg3/redsocialreact", 
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container text-center" id="portfolio">
      <h2 className="text-orange">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '80%', margin: 'auto' }}>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <a href={selectedProject.repoLink} className="btn-main-offer" target="_blank" rel="noopener noreferrer">
              Go to Repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
