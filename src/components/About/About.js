import React from "react";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="container-fluid about-section" id="about">
      {/* <Particle /> */}
      <div className="container" >
        <div className="row" style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I'M</strong>
          </h1>
          <div style={{ paddingTop: "20px", paddingBottom: "50px", paddingLeft: "-150px", textAlign: "left", alignItem: "left" }} className="about-img center-block col-md-5">
            <img src={laptopImg} alt="about" style={{ width: "370px", height: "370px" }} className="img-fluid about-image" />
          </div>
          <div className="col-md-7" style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }} >
            <Aboutcard />
          </div>
        </div>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </div>
  );
}

export default About;
