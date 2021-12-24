import React from "react";
import styled from "styled-components";
import devices from "../utils/devices";
import myLogo from "../img/my-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavStyled = styled.div`
  padding-left: 5%;
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
    margin-top:3.5rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background: #0b0a1d
    }
  }

  .linkDiv {
    display: flex;
    background: #0b0a1d;

    .divStyle {
      background: #0b0a1d;
    }

    .navLink {
      margin-left: 5rem;
      background: #0b0a1d;

      @media ${devices.mobile} {
        margin-right: 1rem;
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

function Navigation() {
  return (
    <NavStyled>
      <div className="logoDiv">
        <AnchorLink href="#home" className="linkStyle">
          <img src={myLogo} alt="my logo"/>
        </AnchorLink>
      </div>
      <div className="linkDiv">
        <div className="divStyle mobile">
          <AnchorLink href="#about-me" className="linkStyle">
            About
          </AnchorLink>
        </div>
        <div className="navLink mobile">
          <AnchorLink href="#skills" className="linkStyle">
            Skills
          </AnchorLink>
        </div>
        <div className="navLink mobile">
          <AnchorLink href="#projects" className="linkStyle">
            Projects
          </AnchorLink>
        </div>
        <div className="navLink">
          <AnchorLink href="#contact-me" className="linkStyle" to="/">
            Contact
          </AnchorLink>
        </div>
      </div>
    </NavStyled>
  );
}

export default Navigation;
