import React from "react";
import styled from "styled-components";
import devices from "../utils/devices";
// import myLogo from "../img/my-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavStyled = styled.div`
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
const Logo = styled.div`
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
const Button = styled.button`
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
const Navigation = ({ darkMode, setDarkMode }) => {
  const onClick = () => {
    setDarkMode(!darkMode);
    console.log("clicked");
  };

  return (
    <NavStyled>
      <div className="logoDiv">
        <AnchorLink href="#home" className="linkStyle">
          <Logo>
            {/* <p>Lorem, ipsum.</p> */}
            Chibuzor
          </Logo>
          {/* <img src={myLogo} alt="my logo"/> */}
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
        <div className="navLink ">
          <AnchorLink href="#contact-me" className="linkStyle" to="/">
            Contact
          </AnchorLink>
        </div>
        <div className="navLink  ">
          <Button darkMode={darkMode} onClick={onClick}>
            {darkMode ? (
              <i class="fas fa-sun "></i>
            ) : (
              <i class="fas fa-moon"></i>
            )}
          </Button>
        </div>
      </div>
    </NavStyled>
  );
};

export default Navigation;
