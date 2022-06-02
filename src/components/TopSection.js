import React from "react";
import Typical from "react-typical";
import { TopStyled } from "./Styled";
import {
  MailIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsappIcon,
} from "./Icon";

const TopSection = ({ darkMode }) => {
  return (
    <TopStyled darkMode={darkMode} id="home">
      <div className="left-section">
        <h3 className="hello">Hello, I'm</h3>
        <h1>Okafor Chibuzor Victor</h1>
        <div className="titleDiv">
          <Typical
            loop={1}
            wrapper="h3"
            steps={[
              "A creative Front End Web Developer",
              1000,
              "A passionate Front End Web Developer",
              1000,
              "A creative and passionate Front End Web Developer",
              1000,
            ]}
          />
        </div>
        {/* https://drive.google.com/file/d/1uh6AZ6R29yvHUiPrgeN98rAXugIUTHyn/view?usp=sharing */}
        <a
          href="//drive.google.com/file/d/1uh6AZ6R29yvHUiPrgeN98rAXugIUTHyn/view?usp=sharing"
          target="_blank rel=noopener noreferrer"
        >
          <button>Download Resume</button>
        </a>
        <div>
          <a href="mailto:coolbuhzor@gmail.com">
            <MailIcon />
          </a>
          <a
            href="https://github.com/coolbuhzor"
            target="_blank rel=noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="http://linkedin.com/in/chibuzor-okafor-023677107"
            target="_blank rel=noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/coolbuhzor"
            target="_blank rel=noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="whatsapp://send?phone=+2348064136593"
            target="_blank rel=noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </TopStyled>
  );
};

export default TopSection;
