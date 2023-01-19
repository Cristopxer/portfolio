import "../Navbar/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../../Assets/Images/logo.png";
import navIcon1 from "../../Assets/Images/nav-icon1.svg";
import navIcon2 from "../../Assets/Images/nav-icon2.svg";

function NavBarComponent() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/crisdev/" target="blank">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/Cristopxer" target="blank">
              <img src={navIcon2} alt="" className="git_image" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1R3IjmwIhtEVGEFHu4I6WdqMyXyfGBHhz/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Download CV</button>
          </a>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
