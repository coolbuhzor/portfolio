import React from "react";
import styled from "styled-components";
import profileImg from "../img/buhzor.jpg";
import devices from "../utils/devices";

const AboutMeStyled = styled.div`
  padding-top: 10rem;
  height: 100vh;
  display: block;
  margin: auto;

  @media ${devices.large} {
    height: auto;
    width: 90%;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.darkMode ? "#fff" : "#080a16")};

    @media ${devices.mobile} {
      font-size: 2rem;
      margin-bottom: 5vh;
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

  .aboutMeContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 7rem;
    align-items: center;

    @media ${devices.tablet} {
      flex-direction: column;
      justify-content: none;
      align-items: center;
      padding-left: 0rem;
    }

    .imgDiv {
      width: 30%;
      height: 38rem;
      border-radius: 1rem;
      border-width: 5px;
      box-shadow: 8px 7px 6px -4px #0b0a1d;
      border-image: initial;
      overflow: hidden;
      margin: 0px;

      img {
        max-width: 100%;
        max-height: 100%;
        transition-delay: 500ms;
        object-fit: cover;
        object-position: center center;
      }

      @media ${devices.tablet} {
        width: 90%;
        height: 55rem;
      }

      @media ${devices.mobile} {
        height: 45rem;
      }
    }
    p {
      width: 50%;
      text-align: left;
      font-size: 1.8rem;
      color: ${(props) => (props.darkMode ? "#a0aec0" : "#080a16")};

      @media ${devices.tablet} {
        width: 90%;
        margin-top: 2rem;
      }
    }
  }
`;

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
            <img src={profileImg} alt="my profile" />
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
