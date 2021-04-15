import React, { useState } from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import styled from "styled-components";

const Projects = () => {
  const [projectSet, setProjectSet] = useState([
    {
      id: 1,
      title: "봉사활동을 함",
      url: "https://www.naver.com/",
      image:
        "https://user-images.githubusercontent.com/54468963/114719974-8ea5df80-9d72-11eb-9ab0-1565077bdc38.jpg",
      uselang: "장소: !@#$",
      projectintro: "봉사활동 소개",
      text: ["- 내용1","- 내용2", "- 내용3", "- 내용4"]
    },
    {
      id: 2,
      title: "기부활동을 함",
      url: "https://www.naver.com",
      image:
        "https://user-images.githubusercontent.com/54468963/114720815-4f2bc300-9d73-11eb-8d28-050738b20ae8.jpg",
      uselang: "장소: 어디",
      projectintro: "기부활동 소개",
      text: ["- 내용"]
    },
  ]);
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title">Projects</div>
        {projectSet.map(project => {
          return (
            <div
              className={`projects__list-${project.id} project`}
              key={project.id}
            >
              <a className="project__link" target="_blank" href={project.url}>
                <img
                  className="project__img"
                  src={project.image}
                  alt={`${project.title}_image`}
                />
              </a>
              <div className="project__info">
                <h2>{project.title}</h2>
                <h3>{project.projectintro}</h3>
                {project.text.map(text => {
                  return ( <span className="introlist" key={text}>{text}</span> );
                })}
                <span className="uselang">{project.uselang}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
