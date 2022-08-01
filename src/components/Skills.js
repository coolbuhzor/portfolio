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
  { icon: html5Icon, altText: "html5 icon", id: 1 },
  { icon: css3Icon, altText: "css3 icon", id: 2 },
  { icon: jsIcon, altText: "javascript icon", id: 3 },
  { icon: reactIcon, altText: "react icon", id: 4 },
];
const skillsB = [
  { icon: nodeIcon, altText: "node icon", id: 1 },
  { icon: bootstrap, altText: "Bootstrap icon", id: 2 },
  { icon: gitIcon, altText: "git icon", id: 3 },
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
          {skillsA.map((item) => (
            <div className="iconDiv" key={item.id}>
              <img src={item.icon} alt={item.altText} />
            </div>
          ))}
        </div>
        <div className="secondSet">
          {skillsB.map((item) => (
            <div className="iconDiv" key={item.id}>
              <img src={item.icon} alt={item.altText} />
            </div>
          ))}
        </div>
      </SkillStyled>
    </Zoom>
  );
};

export default Skills;
