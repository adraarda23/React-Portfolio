import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Styles/NavBar.css";
import MainLogo from "../images/main.png";

function NavBar() {
  return (
    <nav className="mainNavbar">
      <Navbar expand="lg" className="bg-dark text-light">
        <Container>
          <Navbar.Brand href="/">
            <img src={MainLogo} className="mainLogo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler-icon" style={{ filter: 'brightness(0) invert(1)' }}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto NavBar">
              <NavLink className="navLink" to="/">
                Home
              </NavLink>
              <NavLink className="navLink" to="/about">
                About
              </NavLink>
              <NavLink className="navLink" to="/projects">
                Projects
              </NavLink>
              <NavLink className="navLink" to="/contact">
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
