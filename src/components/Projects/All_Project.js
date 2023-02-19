import React from 'react'
import "./Procss.css";
import ProjectCards from "./ProjectCards";
import { Link } from "react-router-dom";

const All_Project = () => {
  return (
    <div>
      <h1 className="project-heading " id="project">
        Personal <strong className="purple">Projects</strong>
      </h1>
      <div className='card-project'>
        <ul class="cards">
          <li>
            <ProjectCards name="School Management Software" stack="React Js, Node Js, Express Js, MongoDb" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Company" stack="React Js, Node Js, Express Js, MongoDb" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Hotel Website" stack="React js" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Dictionary App" stack="React js" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Google clone" stack="React js" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Alumni Tracking System" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Ecommerce for College Campus" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Online Examination Syetem" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Online Course  Website" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
          <li>
            <ProjectCards name="Company Static Website" stack="Html, Css, Js, Php, Mysql" demo="#" github="#" image="https://i.imgur.com/oYiTqum.jpg" />
          </li>
        </ul>
      </div>
      <div className='container text-center text-warning more'>
        <Link to="/" >{`<-`} Back to Home  </Link>
      </div>
    </div>
  )
}
export default All_Project;