import React from "react";
import styled from "styled-components";
import html5Icon from "../img/htmlIcon.svg";
import css3Icon from "../img/cssIcon.svg";
import jsIcon from "../img/jsIcon.svg";
import nodeIcon from "../img/nodejsIcon.svg";
// import pythonIcon from "../img/pythonIcon.svg";
import reactIcon from "../img/reactIcon.svg";
import gitIcon from "../img/gitIcon.svg";
import devices from "../utils/devices";
import Zoom from "react-reveal/Zoom";

const SkillStyled = styled.div`
  height: 100vh;
  padding-top: 15rem;

  @media ${devices.large} {
    padding-top: 8rem;
    height: 50vh;
  }

  @media ${devices.mobile} {
    height: auto;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.mobile} {
      margin-bottom: 5vh;
      font-size: 2rem;
    }

    .lineStyle {
      background-color: rgb(45, 57, 82);
      height: 1px;
      position: relative;
      margin-left: 2rem;
      margin-right: 2rem;
      width: 20%;
    }
  }

  .firstSet,
  .secondSet {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4rem;
  }

  .iconDiv {
    img {
      width: 10rem;
      height: 10rem;

      @media ${devices.mobile} {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

const skillsA = [
  { icon: html5Icon, altText: "html5 icon" },
  { icon: css3Icon, altText: "css3 icon" },
  { icon: jsIcon, altText: "javascript icon" },
  { icon: reactIcon, altText: "react icon" },
];
const skillsB = [
  { icon: nodeIcon, altText: "node icon" },
  // { icon: pythonIcon, altText: "python icon" },
  { icon: gitIcon, altText: "git icon" },
];

const Skills = () => {
  return (
    <Zoom>
      <SkillStyled id="skills">
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
