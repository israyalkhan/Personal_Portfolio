import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" class="card">
      <img src={props.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">{props.name}</h3>
            <span class="card__status"><b>Stack :</b>{props.stack}</span>
          </div>
        </div>
        <div class="card__description">
          <div className='row'>
            <div className='col-6'>
              <a href={props.demo} class="btn btn-warning ">Demo <CgWebsite /></a>
            </div>
            <div className='col-6'>
              <a href={props.github} class="btn btn-warning">Github <BsGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
export default ProjectCards;
