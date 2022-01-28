import React from "react";
import { GithubIcon, LinkIcon } from "./Icon";
import { ProjectStyled } from "./Styled";

const projects = [
  {
    title: "Credo",
    description:
      "Currently, in development, Credo is a fintech application that helps businesses run as smoothly as possible. Credo helps process payments, sell products, and post directly on social media accounts.",
    languages: ["React", "Redux", "Node", "Styled Components", "Bootstrap"],
    webLink: "https://credo.nugitech.com/",
    githubLink: "https://github.com/nugitech/credo-frontend",
    image:
      "https://drive.google.com/uc?export=view&id=1Val-_KCk6ESiNGwdCdmux9gtep3e203s",
    altText: "Credo project screenshot",
    ownership: "Credo",
  },
  {
    title: "Nimdee",
    description:
      "Nimdee is a learning platform that provides parents and teachers with resources and materials to teach kids in a fun and engaging way",
    languages: ["React", "Redux", "PHP"],
    webLink: "https://nimdee.com/",
    githubLink: "https://github.com/9ijakidArchitect/NimdeeReact.git",
    image:
      "https://drive.google.com/uc?export=view&id=18lvN85eiGoIRM8UDIP84nSBaZeBfBTG7",
    altText: "Nimdee project screenshot",
    ownership: "Nimdee Learning Games",
  },
  {
    title: "Github Finder",
    description:
      "GitHub Finder is an application that allows you to search for Github users, their details, and their contributions without requiring them to sign up or log in ",
    languages: ["React", "context api", "Styled Components"],
    webLink: "https://git-hub-finda.netlify.app",
    githubLink: "https://github.com/LABS-EU3/quality_hub_frontend/",
    image:
      "https://drive.google.com/uc?export=view&id=1mdRP5iZaLoCAolxAWh6aTFA7sftEJtlc",
    altText: "Github finda project screenshot",
    ownership: "Personal Project",
  },
  {
    title: "Unical Portal",
    description:
      "Currently, in development, Unical Portal is an application that will facilitate payments, accommodation booking, results checking, and other school related activities.",
    languages: ["React", "Redux", "Styled Components", "Node js"],
    webLink: "https://www.unical.nugitech.com/",
    githubLink: "https://github.com/nugitech/unical-frontend",
    image:
      "https://drive.google.com/uc?export=view&id=1aYKK4WQVq5s1PNU1seRpE88bEhVmfU0G",
    altText: "Unical project screenshot",
    ownership: "Nugi Technologies",
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
