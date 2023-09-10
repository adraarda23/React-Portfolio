// Projects.js

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.css";
import tempImage from "../../images/download.png";

function Projects() {
  const projectData = [
    {
      title: "Hafize Ana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "/case-study/hafize-ana", // Projeye yönlendiren link
    },
    {
      title: "Başka Bir Proje",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "/case-study/other-project", // Projeye yönlendiren link
    },
    // İhtiyacınıza göre diğer projeleri buraya ekleyin
  ];

  return (
    <div className="projects">
      <div className="projects-title">
        <h1>PROJECTS</h1>
        <p>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="projects-body">
        {projectData.map((project, index) => (
          <div className="project__inner-body" key={index}>
            <div className="project__inner-body-left">
              <img
                className="project-image"
                src={tempImage}
                alt="projectImage"
              />
            </div>
            <div className="project__inner-body-right">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="case-study-btn">
              <Link to={project.link}>Case Study</Link>
              </div>
               
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
