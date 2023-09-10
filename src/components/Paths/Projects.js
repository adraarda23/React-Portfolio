import React from "react";
import "../Styles/Projects.css";
import tempImage from "../../images/download.png";

function Projects() {
  //Resim yoksa default resim koyar
  const projectData = [
    {
      title: "Hafize Ana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "https://github.com/adraarda23/btu-sks-telegram-bot/tree/main",
      image: "URL_BURAYA", 
    },
    {
      title: "Başka Bir Proje",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "https://github.com/example/project",
      
    },
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
                src={project.image || tempImage}
                alt="projectImage"
              />
            </div>
            <div className="project__inner-body-right">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="case-study-btn">
                <a href={project.link}>Case Study</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
