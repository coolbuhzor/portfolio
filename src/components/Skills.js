import React from "react";
import html5Icon from "../img/htmlIcon.svg";
import css3Icon from "../img/cssIcon.svg";
import jsIcon from "../img/jsIcon.svg";
import nodeIcon from "../img/nodejsIcon.svg";
import reactIcon from "../img/reactIcon.svg";
import gitIcon from "../img/gitIcon.svg";
import Zoom from "react-reveal/Zoom";
import bootstrap from "../img/bootstrapIcon.svg";
import { SkillStyled } from "./Styled";

const skillsA = [
  { icon: html5Icon, altText: "html5 icon" },
  { icon: css3Icon, altText: "css3 icon" },
  { icon: jsIcon, altText: "javascript icon" },
  { icon: reactIcon, altText: "react icon" },
];
const skillsB = [
  { icon: nodeIcon, altText: "node icon" },
  { icon: bootstrap, altText: "Bootstrap icon" },
  { icon: gitIcon, altText: "git icon" },
];

const Skills = ({ darkMode }) => {
  return (
    <Zoom>
      <SkillStyled darkMode={darkMode} id="skills">
        <h1>
          <div className="lineStyle"></div>
          My Skillsets
          <div className="lineStyle"></div>
        </h1>
        <div className="firstSet">
          {skillsA.map(({ icon, altText }) => (
            <div className="iconDiv">
              <img src={icon} alt={altText} />
            </div>
          ))}
        </div>
        <div className="secondSet">
          {skillsB.map(({ icon, altText }) => (
            <div className="iconDiv">
              <img src={icon} alt={altText} />
            </div>
          ))}
        </div>
      </SkillStyled>
    </Zoom>
  );
};

export default Skills;
