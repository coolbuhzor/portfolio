import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavStyled, Logo, Button } from "./Styled";

const Navigation = ({ darkMode, setDarkMode }) => {
  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <NavStyled>
      <div className="logoDiv">
        <AnchorLink href="#home" className="linkStyle">
          <Logo>Chibuzor</Logo>
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
          <Button
            aria-label="switch-theme"
            darkMode={darkMode}
            onClick={onClick}
          >
            {darkMode ? (
              <i className="fas fa-sun "></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </Button>
        </div>
      </div>
    </NavStyled>
  );
};

export default Navigation;
