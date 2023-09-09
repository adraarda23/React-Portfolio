import React from "react";
import "../Styles/About.css";

function About() {
  return (
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
            <p>
              I'm a <b>Frontend Web Developer</b> building the Front-end of
              Websites and Web Applications.
            </p>
            <br />
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in <b>Web Development</b> so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my <a href="https://www.linkedin.com/in/ardaaydınkılınç/">LinkedIn</a> where I post useful content related to Web Development
              and Programming I'm open to <b>Job</b> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to <b>contact</b> me.
            </p>
          </div>
          <div className="about-right">
            <h3>My Skills</h3>
            <div className="skill-boxes">
              <div className="skills"><h6>HTML</h6></div>
              <div className="skills"><h6>CSS</h6></div>
              <div className="skills"><h6>JavaScript</h6></div>
              <div className="skills"><h6>React</h6></div>
              <div className="skills"><h6>Git</h6></div>
              <div className="skills"><h6>GitHub</h6></div>
              <div className="skills"><h6>Responsive Designs</h6></div>
              <div className="skills"><h6>Python</h6></div>
              <div className="skills"><h6>SQL Basics</h6></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
