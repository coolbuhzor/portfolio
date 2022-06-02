import React from "react";
import { AboutMeStyled } from "./Styled";
import buhzor from "../img/buhzor.webp";

const AboutMe = ({ darkMode }) => {
  return (
    <AboutMeStyled darkMode={darkMode} id="about-me">
      <h1>
        <div className="lineStyle"></div>
        About Me
        <div className="lineStyle"></div>
      </h1>
      <div className="aboutMeContainer">
        <div className="imgDiv">
          <div className="imageWrapper">
            <img src={buhzor} alt="my profile" />
          </div>
        </div>
        <p>
          Hi! I am Chibuzor, a passionate, creative and dedicated Software
          Engineer with a track record of developing unique user experiences
          that drive user interaction.
          <br></br>
          <br></br>I love solving problems with codes and building things that
          live on the internet. I develop exceptional websites and web apps that
          provide cool and pixel-perfect user interfaces.
          <br></br>
          <br></br>
          All this is to let you know that I'm pretty awesome at what I do. Feel
          free to reach out to me.
          <br></br>
          <br></br>
          When I am not Coding, I am most likely watching football, listening to
          music, seeing a movie, travelling or hanging out with friends and
          family.
        </p>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
