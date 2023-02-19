import React from 'react'
import "./Procss.css";
import ProjectCards from "./ProjectCards";
import { Link } from "react-router-dom";
import demo1 from "../../Assets/school.png"
import demo2 from "../../Assets/hotel.png"

const Project = () => {
  return (
    <div className='container'>
      <h1 className="project-heading mt-3" id="project">
        Personal <strong className="purple">Projects</strong>
      </h1>
      <div className='card-project'>
        <ul class="cards">
          <li>
            <ProjectCards name="School Management Software" stack="React Js, Node Js, Express Js, MongoDb" demo="#" github="#" image={demo1} />
          </li>
          <li>
            <ProjectCards name="Alumni Tracking System" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image={demo2} />
          </li>
          <li>
            <ProjectCards name="Hotel Website" stack="React js" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          {/* <li>
            <ProjectCards name="Ecommerce for College Campus" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg"/>
          </li> */}
        </ul>
      </div>
      <div className='container text-center text-warning more'>
        <Link to="/projects" >View more  {`->`}</Link>
      </div>
    </div>
  )
}
export default Project;