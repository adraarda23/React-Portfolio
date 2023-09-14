import React, { useEffect, useState } from "react";
import "./Styles/NavBar.css";
import MainLogo from "../images/main.png";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAnimation } from "framer-motion";

function useActiveLink() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const activeNavLink = document.querySelector(".navLink.active");
    if (activeNavLink) {
      setActiveLink(activeNavLink);
    } else {
      setActiveLink(null);
    }
  }, [location.pathname]);

  return activeLink;
}


function NavBar() {
  const activeLink = useActiveLink();
  const [LinkActive, setLinkActive] = useState(true);

  const handleMouseEnter = () => {
    if (activeLink) {
      activeLink.classList.remove("active");
    }
  };

  const handleMouseLeave = () => {
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5 } },
  };

  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start("visible");
      textControls.start("visible");
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLinkActive(false); 
    }, 1500); 
  }, []);

  return (
    <nav className="mainNavbar">
      <Navbar expand="lg" className="bg-dark text-light">
        <Container>
          <Navbar.Brand href="/">
            <motion.div
              className="mainLogo"
              variants={logoVariants}
              initial="hidden"
              animate={controls}
            >
              <img src={MainLogo} alt="Logo" />
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler-icon"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto NavBar">
              <NavLink
                className={`navLink navlink-home ${LinkActive ? 'home-timer-active' : ''}`}
                to="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.span
                  className="navText"
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  Home
                </motion.span>
              </NavLink>
              <NavLink
                className={`navLink navlink-about ${LinkActive ? 'home-timer-active' : ''}`}
                to="/about"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.span
                  className="navText"
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  About
                </motion.span>
              </NavLink>
              <NavLink
                className={`navLink navlink-project ${LinkActive ? 'home-timer-active' : ''}`}
                to="/projects"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.span
                  className="navText"
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  Projects
                </motion.span>
              </NavLink>
              <NavLink
                className={`navLink navlink-contact ${LinkActive ? 'home-timer-active' : ''}`}
                to="/contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.span
                  className="navText"
                  variants={textVariants}
                  initial="hidden"
                  animate={textControls}
                >
                  Contact
                </motion.span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
