import React from "react";
import { GithubIcon, LinkIcon } from "./Icon";
import { ProjectStyled } from "./Styled";
import gitHubImg from "../img/github-finder.webp";
import naicom from "../img/naicom.webp";
import credo from "../img/credo.web";
import flipeet from "../img/flipeet.webp";
import ilaundry from "../img/ilaundry.webp";

const projects = [
  {
    title: "Credo",
    description:
      "Currently, in development, Credo is a fintech application that helps businesses run as smoothly as possible. Credo helps process payments, sell products, and post directly on social media accounts.",
    languages: ["React", "Redux", "Node", "Styled Components", "Bootstrap"],
    webLink: "https://credo.nugitech.com/",
    githubLink: "#",
    image: credo,
    altText: "Credo project screenshot",
    ownership: "Credo",
  },
  {
    title: "NAICOM",
    description:
      "NAICOM web app ia a complaint management System built for NAICOM to effectively track & manage insurance complaints and issues.",
    languages: ["Next.js", "Redux Toolkit", "Styled Components", "Node js"],
    webLink: "https://naicom.nugitech.com/",
    githubLink: "#",
    image: naicom,
    altText: "Naicom project screenshot",
    ownership: "Nugi Technologies",
  },
  {
    title: "FLIPEET ",
    description:
      "Flipeet is an NFT Market place that is still in production. Flipeet allows users to connect their crypto wallet and trade Nfts. Flipeet is Designed to make NFT to NFT trading possible, and get you to call the shots on what you value",
    languages: ["React", "Redux"],
    webLink: "https://flipeet.io/",
    githubLink: "#",
    image: flipeet,
    altText: "FLipeet Landing page Image",
    ownership: "NUGI TECHNOLOGIES",
  },
  {
    title: "Ilaundry ",
    description:
      "Ilaundry is a web app still in production. Ilaundry  is used to track laundry services and their customers. Ilaundry is designed to make laundry services more efficient and easy to use.",
    languages: ["React", "Redux"],
    webLink: "https://ilaundry-web-app.netlify.app/",
    githubLink: "#",
    image: ilaundry,
    altText: "Ilaundry Landing page Image",
    ownership: "NUGI TECHNOLOGIES",
  },
  {
    title: "Github Finder",
    description:
      "GitHub Finder is an application that allows you to search for Github users, their details, and their contributions without requiring them to sign up or log in ",
    languages: ["React", "context api", "Styled Components"],
    webLink: "https://git-hub-finda.netlify.app",
    githubLink: "https://github.com/LABS-EU3/quality_hub_frontend/",
    image: gitHubImg,
    altText: "Github finda project screenshot",
    ownership: "Personal Project",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <ProjectStyled darkMode={darkMode} id="projects">
      <h1>
        <div className="lineStyle"></div>
        Projects I've Built
        <div className="lineStyle"></div>
      </h1>
      <>
        {projects.map(
          ({
            title,
            description,
            languages,
            webLink,
            githubLink,
            image,
            altText,
            ownership,
          }) => (
            <div className="projectContainer">
              <div className="textDiv">
                <h4>Featured Project</h4>
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                  <h3>{title}</h3>
                </a>
                <div className="descriptionDiv">
                  <p>{description}</p>
                </div>
                <div className="techDiv">
                  {languages.map((items) => (
                    <h4>{items}</h4>
                  ))}
                </div>
                <div>
                  <h4>
                    Ownership : <span>{ownership}</span>
                  </h4>
                </div>
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                  <LinkIcon />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
              </div>
              <div className="imgDiv">
                <img src={image} alt={altText} />
              </div>
            </div>
          )
        )}
      </>
    </ProjectStyled>
  );
};

export default Projects;
