import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
  WhatsappIcon,
} from "./Icon";
import { ContactStyled } from "./Styled";

const ContactMe = ({ darkMode }) => {
  return (
    <ContactStyled darkMode={darkMode} id="contact-me">
      <h1>
        <div className="lineStyle"></div>
        Get In Touch
        <div className="lineStyle"></div>
      </h1>
      <div>
        <p>
          Growing your team or have a project you want to collaborate on or you
          just want to chat, you can connect with me on any of my social media
          links and I will respond to you ASAP.
        </p>
      </div>
      <div>
        <a href="mailto:coolbuhzor@gmail.com">
          <MailIcon />
        </a>
        <a
          href="https://github.com/coolbuhzor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="http://linkedin.com/in/chibuzor-okafor-023677107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/coolbuhzor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />

          <a
            href="whatsapp://send?phone=+2348064136593"
            target="_blank rel=noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
        </a>
      </div>
    </ContactStyled>
  );
};

export default ContactMe;
