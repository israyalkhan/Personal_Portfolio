import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo4.png";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

import {
  AiOutlineProject,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
  AiOutlineFilePdf
} from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [scrollValue, updatescrollValue] = useState(60);

  function scrollHandler() {
    // console.log(window.scrollY);
    if (scrollValue < window.scrollY) {
      updatescrollValue(window.scrollY);
      updateNavbar(true);
    } else {
      updatescrollValue(window.scrollY);
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h1 className="text-center mt-3">Israyal</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <Link className="ok" to="/" >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <Link2 className="ok" to="about" spy={true} smooth={true} duration={4000}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Link2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <Link2 className="ok" to="project" spy={true} smooth={true} duration={5000} >
                  <AiOutlineProject style={{ marginBottom: "2px" }} /> Projects
                </Link2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <Link2 className="ok" to="contact" spy={true} smooth={true} duration={5000} >
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Hire Me!
                </Link2>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link onClick={() => updateExpanded(false)}>
                <Link className="ok" to="/resume" >
                  <AiOutlineFilePdf style={{ marginBottom: "2px" }} /> Resume
                </Link>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Priyank032"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
