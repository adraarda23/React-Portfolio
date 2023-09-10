import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/CaseStudy.css";
import tempImage from "../../images/download.png";

function CaseStudy() {
  const { projectId } = useParams();

  const projectData = {
    "hafize-ana": {
      title: "Hafize Ana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "https://github.com/adraarda23/btu-sks-telegram-bot/tree/main",
      tools: ["Python", "SQL Basics"],
      image: "https://picsum.photos/400/300", // Resim yolunu ekledik
    },
    "other-project": {
      title: "Başka Bir Proje",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non id pariatur quis cumque praesentium aperiam fugit quisquam adipisci eum nihil, maxime illo eligendi esse quaerat! Dolorem aspernatur facere enim.",
      link: "https://github.com/example/project",
      tools: ["React", "Node.js"],
      image: "path/to/other-project-image.png", // Resim yolunu ekledik
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return <div>Proje bulunamadı.</div>;
  }

  return (
    <div className="main-case-study">
      <div className="case-study-title">
        <h1>{project.title}</h1>
        <p>
          This page contains the case study of {project.title} Website which
          includes the Project Overview, Tools Used and Live Links to the
          official product.
        </p>
            <button className="case-study-btn mt-4 responsive-btn">
                
          <a href={project.link}>GitHub Link</a>
            </button>
      </div>
      <div className="case-study-body">
          <img src={project.image || tempImage} alt={project.title} /> {/* Resmi dinamik olarak alıyoruz */}
          <div className="case-study-description">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>
          <div className="case-study-tools-used">
            <h3>Tools Used</h3>
            <ul className="list-unstyled tools-used">
              {project.tools.map((tool, index) => (
                <li className="tools-box" key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="case-study-see-live">
            <h3>See Live</h3>
            <div className="case-study-see-live-links">
              <button className="case-study-btn m-3 responsive-btn"><a href="">Live Link</a></button>
              <button className="case-study-btn m-3 responsive-btn"><a href="">Go Back</a></button>
              
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default CaseStudy;
