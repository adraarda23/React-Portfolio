import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.css";
import PageTransition from "../Animation/PageTransitions";
import { motion } from "framer-motion";
import tempImage from "../../images/my-portfolio.png";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const iconVariants = {
  start: { x: 0 },
  end: { x: 5 }, 
};

const iconTransition = {
  duration: 0.5,
  repeat: Infinity, 
  repeatType: "reverse", 
};

function Projects() {
  const projectData = [
    {
      title: "Own Portfolio",
      description:
      "This project was my first step into web development. I applied all of my current skills to build this portfolio website.",
      link: "/case-study/own-portfolio", // Projeye yönlendiren link
    },

  ];

  return (
    <PageTransition>
      <div className="projects">
        <div className="projects-title">
          <h1>PROJECTS</h1>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <div className="mouse">
          <div className="scroll-effect">
          </div>
        </div>
        <div className="projects-body">
          {projectData.map((project, index) => (
            <motion.div
              className={`project__inner-body`}
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <div className={`project__inner-body-left`}>
                <img
                  className="project-image"
                  src={tempImage}
                  alt='<a href="http://www.freepik.com">Designed by zlatko_plamenov / Freepik</a>'
                />
              </div>
              <div className={`project__inner-body-right`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="case-study-btn mt-4">
                  <Link to={project.link}>Case Study</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <button
            className="home-btn mb-4">
            <Link to="/contact">Send Message
            <motion.span
              style={{ fontSize: "medium", marginLeft: "5px" , display:"inline-block",color:"#000" }}
              variants={iconVariants}
              transition={iconTransition}
              animate="end" 
            >
              <KeyboardDoubleArrowRightIcon />
            </motion.span>
            </Link>
          </button>
      </div>

    </PageTransition>
  );
}

export default Projects;
