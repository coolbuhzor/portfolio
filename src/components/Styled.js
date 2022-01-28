import devices from "../utils/devices";
import styled from "styled-components";

// navigation css
export const NavStyled = styled.div`
  padding-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0b0a1d;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 8rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;

  @media ${devices.mobile} {
    position: static;
    padding-right: 2rem;
    padding-left: 2rem;
    justify-content: none;
    z-index: none;
    margin: none;
    width: 100%;
  }

  .logoDiv {
    background: #0b0a1d;
    width: 13rem;
    height: 13rem;
    // margin-top: 3.5rem;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
      background: #0b0a1d;
    }
  }

  .linkDiv {
    display: flex;
    background: #0b0a1d;
    width: 32%;
    margin-right: 30px;

    @media ${devices.large} {
      width: 45%;
    }
    @media ${devices.mobile} {
      width: 35%;
    }

    .divStyle {
      background: #0b0a1d;
    }

    .navLink {
      margin-left: 5rem;
      background: #0b0a1d;

      @media ${devices.tablet} {
        margin-right: 2rem;
        margin-left: 1rem;
      }
      @media ${devices.mobile} {
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }

    .mobile {
      @media ${devices.mobile} {
        display: none;
      }
    }
  }

  .linkStyle {
    color: white;
    text-decoration: none;
    background: #0b0a1d;
  }
`;
export const Logo = styled.div`
  background: #53b2ac;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 7px;
`;
export const Button = styled.button`
  border: none;
  background: #53b2ac;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  color: ${(props) => (props.darkMode ? "#fff" : "#080a16")};

  i {
    font-size: 2rem;
  }
`;

// top section
export const TopStyled = styled.div`
  display: flex;
  // padding-top: 12rem;
  height: 100vh;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  @media ${devices.large} {
    padding-top: 20rem;
    flex-direction: column;
    align-items: center;
    justify-content: none;
    height: auto;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    padding-top: 20rem;
    align-items: center;
    justify-content: none;
    height: auto;
  }

  @media ${devices.mobile} {
    padding-top: 5rem;
  }

  @media ${devices.small} {
    width: 85%;
  }
  .left-section {
    h1 {
      font-weight: 900;
      font-size: 5rem;
      color: ${(props) => (props.darkMode ? "#fff" : "#080a16")};
      @media ${devices.mobile} {
        font-weight: 700;
        font-size: 3rem;
      }
      @media ${devices.small} {
        padding: 10px 0;
      }
    }
    .titleDiv {
      display: flex;
      align-items: center;
      h3 {
        color: #a0aec0;

        @media ${devices.mobile} {
          font-size: 1.5rem;
        }
      }
      input {
        width: 0.1rem;
        height: 0.1rem;
      }
    }

    .hello {
      color: #38b2ac;
      @media ${devices.mobile} {
        font-size: 1.2rem;
      }
    }

    button {
      margin-top: 3rem;
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border-style: none;
      cursor: pointer;
      background: #38b2ac;
      margin-bottom: 3rem;

      :hover {
        background: #a0aec0;
      }
    }

    img {
      max-width: 3rem;
      height: 3rem;
      margin-right: 2rem;
    }
    svg {
      width: 3rem;
      height: 3rem;
      fill: #38b2ac;
      margin-right: 2rem;
      cursor: pointer;

      :hover {
        fill: #a0aec0;
      }
    }
  }

  .right-section {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 1rem;
    background: #2d3748;
    width: 35%;
    height: 37vh;

    @media ${devices.large} {
      width: 90%;
      height: auto;
      margin-top: 5rem;
    }

    @media ${devices.tablet} {
      width: 90%;
      height: auto;
      margin-top: 5rem;
    }

    .textDiv {
      margin-top: 5rem;
      margin-bottom: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;

      @media ${devices.mobile} {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        margin-left: 1rem;
        margin-right: none;
      }
    }
    pre,
    b,
    span {
      color: white;
      padding-bottom: 1rem;
      font-size: 1.6rem;
      background: #2d3748;

      @media ${devices.mobile} {
        font-size: 1.4rem;
      }
    }
  }
`;

// About me section
export const AboutMeStyled = styled.div`
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

export const ProjectStyled = styled.div`
  // height: 100vh;
  padding: 15rem 0;

  @media ${devices.large} {
    height: auto;
  }
  @media ${devices.mobile} {
    padding-top: 5rem;
  }
  h1 {
    margin-bottom: 15vh;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.darkMode ? "#fff" : "#080a16")};

    @media ${devices.tablet} {
      font-size: 2.4rem;
    }

    @media ${devices.mobile} {
      margin-bottom: 5vh;
      font-size: 1.8rem;
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
  .projectContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;

    @media ${devices.large} {
      position: static;
      flex-direction: column-reverse;
      position: static;
      justify-content: none;
      /* display: none; */
    }

    @media ${devices.tablet} {
      flex-direction: column-reverse;
      position: static;
      justify-content: none;
    }

    .imgDiv {
      position: absolute;
      width: 50%;
      margin-left: 50%;

      img {
        max-width: 100%;
        border-radius: 0.5rem;
        /* box-shadow: -2px 0px 2px 1px #ffffff; */
        height: auto;
      }

      @media ${devices.large} {
        position: static;
        width: 80%;
        margin-left: 0%;
        margin-bottom: 2rem;
      }

      @media ${devices.tablet} {
        position: static;
        width: 90%;
        margin-left: 0%;
        margin-bottom: 2rem;
      }

      @media ${devices.mobile} {
        width: 90%;
      }
    }

    .textDiv {
      background: #2d3748;
      padding: 4rem;
      border-radius: 0.5rem;
      text-align: left;
      width: 60%;
      box-shadow: -2px 0px 1px 1px #2d3748;
      height: 40rem;

      @media ${devices.large} {
        width: 80%;
        height: auto;
        padding: 1rem;
      }

      @media ${devices.tablet} {
        width: 90%;
        height: auto;
        padding: 1rem;
      }
      @media ${devices.mobile} {
        width: 80%;
      }

      a {
        text-decoration: none;
      }
      h4 {
        background: #2d3748;
        color: #38b2ac;
        margin-bottom: 1rem;
      }
      h3 {
        color: white;
        background: #2d3748;
      }

      .techDiv {
        display: flex;
        flex-wrap: wrap;
        background: #2d3748;
        margin-bottom: 2rem;
        width: 70%;

        @media ${devices.large} {
          width: 90%;
        }

        @media ${devices.tablet} {
          width: 100%;
        }

        h4 {
          margin-right: 2.5rem;
          color: white;
        }
      }

      .techDiv2 {
        margin-top: 11rem;
        margin-bottom: 2rem;

        @media ${devices.tablet} {
          margin-top: 2rem;
        }
      }

      .techDiv3 {
        margin-top: 8rem;
        margin-bottom: 2rem;

        @media ${devices.tablet} {
          margin-top: 2rem;
        }
      }

      .descriptionDiv {
        margin-top: 4rem;
        width: 85%;
        margin-bottom: 4rem;

        @media ${devices.tablet} {
          width: 100%;
          margin-bottom: 2rem;
        }
        p {
          width: 90%;
          background: #2d3748;
          color: #a0aec0;
        }
      }
      a {
        background: #2d3748;
      }
      svg {
        width: 3rem;
        height: 3rem;
        fill: #38b2ac;
        margin-right: 2rem;
        background: #2d3748;
        cursor: pointer;

        :hover {
          fill: #a0aec0;
        }
      }
    }
  }
`;

// Skills section
export const SkillStyled = styled.div`
  height: 70vh;
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
    color: ${(props) => (props.darkMode ? "#fff" : "#080a16")};

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

// contact me
export const ContactStyled = styled.div`
  // margin-top: 370vh;
  height: 70vh;
  padding-top: 15rem;
  position: relative;

  @media ${devices.large} {
    margin-top: 0rem;
    padding-top: 3rem;
    position: static;
    height: auto;
  }
  @media ${devices.tablet} {
    position: static;
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
      margin-bottom: 3rem;
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

  p {
    width: 50%;
    text-align: center;
    margin-left: 25%;
    color: ${(props) => (props.darkMode ? "#a0aec0" : "#080a16")};
    font-size: 2rem;
    margin-bottom: 3rem;

    @media ${devices.mobile} {
      width: 90%;
      margin-left: 0%;
      padding: 1rem;
    }
  }
  button {
    margin-top: 8rem;
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    background: #38b2ac;
    margin-bottom: 3rem;
    font-size: 1.8rem;

    :hover {
      background: #a0aec0;
    }
  }
  svg {
    width: 4rem;
    height: 4rem;
    fill: #38b2ac;
    margin-right: 2rem;
    cursor: pointer;

    :hover {
      fill: #a0aec0;
    }
  }
`;
