import React from "react";
import homeLogo from "../../Assets/ban2.jpg";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Li from "../../Assets/linkedin.png";
import Li2 from "../../Assets/github.png";
import { Link } from "react-router-dom";
import pdf from "../../Assets/Priyank-Updated-resume.pdf";
import { Link as Link2 } from "react-scroll";
import { Nav as Nav2 } from "react-bootstrap";

function Home() {
  return (
    <section className="">
      <div className="home-section container-fluid " id="home">
        <Particle />
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading"> Hello !</h1>
              <h1 className="heading-name">I'M<strong className="main-name"> Priyank Agrawal</strong></h1>
              <div style={{ paddingLeft: 50, paddingRight: 50, textAlign: "left" }}>
                <Type style={{ color: "#000" }} />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <a href={pdf} download class="buttonHome3 mt-4">
                    Download Resume
                  </a>
                </div>
                {/* <div className="col-md-6">
                  <Nav2.Item>
                    <Nav2.Link>
                      <Link2 className="buttonHome" to="contact" spy={true} smooth={true} duration={4000}>
                        Hire Me
                      </Link2>
                    </Nav2.Link>
                  </Nav2.Item>
                </div> */}
              </div>
              <Link to="https://www.linkedin.com/in/priyank-agrawal-3773691a6">
                <img src={Li} alt="" className="img-fluid" style={{ maxHeight: "45px", margin: "7px 10px 7px 60px" }} />
              </Link>
              <Link to="https://github.com/Priyank032">
                <img src={Li2} alt="kokokokokkkok" className="img-fluid" style={{ maxHeight: "45px", margin: "7px 10px" }} />
              </Link>

            </div>

            <div className="col-md-5" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Contact />
    </section>
  );
}

export default Home;
