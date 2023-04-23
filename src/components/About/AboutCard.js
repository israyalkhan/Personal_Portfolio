import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../Button";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Israyal Khan </span>
            from <span className="purple"> Gwalior, Madhya Pradesh, India.</span>
            <br />I'm chasing after Bachelor of Technology (BTech.) in Electronics & Communication Engineering in Institute of Technology and Management (ITM) Gwalior.
            {/* <br /> */}
            <br />
            <p style={{ textAlign: "justify", paddingTop: "15px" }}>
              I experienced passionate feelings for programming and coding and I have essentially gotten the hang of something, I think… 🤷‍♂️ I am halfway in works of art
              <i> <b className="purple"> AWS, Java, HTML, CSS and Javascript. </b></i>
              <br />
              <br />
              My field of Interest is <i><b className="purple">Front-end web Development</b></i>      Where I can apply my enthusiasm for creating products with <b className="purple"></b>
              <i><b className="purple">{" "}Modern Javascript Library and Frameworks</b></i>&nbsp; like
              <i> <b className="purple"> React.js </b></i>
            </p>
            {/* <div> */}
            {/* <a href="" download class="buttonHome2">Download Resume</a><br></br> */}
            <Button />
            {/* </div> */}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
