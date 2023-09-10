import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import "./Styles/NavBar.css";
import MainLogo from "../images/main.png";
import { useState, useEffect } from "react";

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
  console.log(activeLink);

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

  return (
    <nav className="mainNavbar">
      <Navbar expand="lg" className="bg-dark text-light">
        <Container>
          <Navbar.Brand href="/">
            <img src={MainLogo} className="mainLogo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler-icon"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto NavBar">
              <NavLink
                className="navLink navlink-home"
                to="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </NavLink>
              <NavLink
                className="navLink navlink-about"
                to="/about"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </NavLink>
              <NavLink
                className="navLink navlink-project"
                to="/projects"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Projects
              </NavLink>
              <NavLink
                className="navLink navlink-contact"
                to="/contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;