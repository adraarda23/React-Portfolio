import React from "react";
import "../Styles/About.css";
import PageTransition from "../Animation/PageTransitions";
import {motion} from "framer-motion";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from "react-router-dom";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "Responsive Designs",
  "Python",
  "SQL Basics",
];

const iconVariants = {
  start: { x: 0 },
  end: { x: 5 }, 
};

const iconTransition = {
  duration: 0.5,
  repeat: Infinity, 
  repeatType: "reverse", 
};

const fadeInAnimationVariants = {
  initial:{
    opacity:0,
  },
  animate: (index)=>({
    opacity:1,
    transition:{
      delay:0.2 * index
    }
  })
}

function About() {
  return (
    <PageTransition>
      <div className="about">
        <div className="inner-about">
          <div className="about-title">
            <h1>About Me</h1>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="about-body">
            <div className="about-left">
              <h3>Get to know me!</h3>
              <div className="about-p">
              <p>
                I'm a <b>FullStack Web Developer</b> building the 
                Websites and Web Applications.
              </p>
              <br />
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in <b>Web Development</b> so it can help
                other people of the Dev Community. Feel free to Connect or
                Follow me on my{" "}
                <a href="https://www.linkedin.com/in/ardaaydınkılınç/">
                  LinkedIn
                </a>{" "}
                where I post useful content related to Web Development and
                Programming. I'm open to <b>Job</b> opportunities where I can
                contribute, learn, and grow. If you have a good opportunity that
                matches my skills and experience, then don't hesitate to{" "}
                <b>contact</b> me.
              </p>
              </div>
              <motion.button
            className="home-btn mt-3 mb-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.5 } }}
          >
            <Link to="/projects">My Projects
            <motion.span
              style={{ fontSize: "medium", marginLeft: "5px" , display:"inline-block",color:"#000" }}
              variants={iconVariants}
              transition={iconTransition}
              animate="end" 
            >
              <KeyboardDoubleArrowRightIcon />
            </motion.span>
            </Link>
          </motion.button>
            </div>
            <div className="about-right">
              <h3>My Skills</h3>
              <div className="skill-boxes">
                {skills.map((skill, index) => (
                  <motion.div className="skills"
                   key={index}
                   variants={fadeInAnimationVariants}
                   initial="initial"
                   custom={index}
                   whileInView="animate"
                   viewport={{
                    once: true,
                  }}
                   >
                    <h6>{skill}</h6>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}

export default About;
