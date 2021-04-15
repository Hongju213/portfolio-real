import React, { useState } from "react";
import "../css/skills.css";
import "../css/Tablet/tablet_skills.css";
import "../css/Moblie/moblie_skills.css";

const Skills = () => {
  const [skillset, setSkillset] = useState([
    {
      id: 1,
      title: "HTML",
      level: "DEFENSIVE PROGRAMMING AND DEBUGGING"
    },
    {
      id: 2,
      title: "CSS",
      level: "CRYPTOCURRENCY AND BLOCKCHAIN TECHNOLOGY EXPLAINED"
    },
    {
      id: 3,
      title: "JavaScript",
      level: "RAISING CAPITAL: CREDIT TECH, COIN OFFERINGS, AND CROWDFUNDING"
    },
    {
      id: 4,
      title: "React",
      level: "COMPUTER PROGRAMMING FOR EVERYONE"
    },
    {
      id: 5,
      title: "NodeJS",
      level: "LEARN TO CODE FOR THE WEB"
    },
    {
      id: 6,
      title: "MongoDB",
      level: "EXPLORING EVERYDAY CHEMISTRY"
    },
    {
      id: 7,
      title: "C",
      level: "TEACHING PRIMARY SCIENCE: PHYSICS"
    },
    {
      id: 8,
      title: "SQL",
      level: "PRECALCULUS: THE MATHEMATICS OF NUMBERS, FUNCTIONS AND EQUATIONS"
    }
  ]);

  return (
    <div className="sks">
      <div className="sks__container">
        <div className="sks__title">Skills</div>
        <div className="sks__set">
          {skillset.map(skill => {
            return (
              <div className={`sks__${skill.title} sk`} key={skill.id}>
                <div className="sk__hoverbox"><span className="sk__level">{skill.level}</span></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
