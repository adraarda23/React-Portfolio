import React from "react";
import "../Styles/Projects.css";
import tempImage from "../../images/download.png";

function Projects() {
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
        <div className="project__inner-body">
          <div className="project__inner-body-left">
            <img className="project-image" src={tempImage} alt="projectImage" />
          </div>
          <div className="project__inner-body-right">
            <h3>Hafize Ana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
              id pariatur quis cumque praesentium aperiam fugit quisquam
              adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem
              aspernatur facere enim.
            </p>
            <button className="case-study-btn">
              <a href="https://github.com/adraarda23/btu-sks-telegram-bot/tree/main">
                Case Study
              </a>
            </button>
          </div>
        </div>
        <div className="project__inner-body">
          <div className="project__inner-body-left">
            <img className="project-image" src={tempImage} alt="projectImage" />
          </div>
          <div className="project__inner-body-right">
            <h3>Hafize Ana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
              id pariatur quis cumque praesentium aperiam fugit quisquam
              adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem
              aspernatur facere enim.
            </p>
            <button className="case-study-btn">
              <a href="https://github.com/adraarda23/btu-sks-telegram-bot/tree/main">
                Case Study
              </a>
            </button>
          </div>
        </div>
        <div className="project__inner-body">
          <div className="project__inner-body-left">
            <img className="project-image" src={tempImage} alt="projectImage" />
          </div>
          <div className="project__inner-body-right">
            <h3>Hafize Ana</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
              id pariatur quis cumque praesentium aperiam fugit quisquam
              adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem
              aspernatur facere enim.
            </p>
            <button className="case-study-btn">
              <a href="https://github.com/adraarda23/btu-sks-telegram-bot/tree/main">
                Case Study
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
