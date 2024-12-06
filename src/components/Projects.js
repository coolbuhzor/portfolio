import React from "react";
import { GithubIcon, LinkIcon } from "./Icon";
import { ProjectStyled } from "./Styled";
// import gitHubImg from "../img/github-finder.webp";
// import naicom from "../img/naicom.webp";
import credo from "../img/credo.png";
import flipeet from "../img/flipeet-raise.png";
import faveremit from "../img/fave-remit.png";
import smartCard from "../img/smart-card.png";

// import ilaundry from "../img/ilaundry.webp";

const projects = [
  {
    title: "Credo",
    subHeading: "Streamlining Your Business Operations",
    description:
      "Credo is a fintech application designed to help businesses run as smoothly as possible. It facilitates seamless payment processing, efficient product sales, and hassle-free settlements, ensuring your business operations are smooth and effortless. With Credo, managing your finances and transactions has never been easier.",
    languages: ["React", "Redux", "Node", "Styled Components", "Bootstrap"],
    webLink: "https://www.credocentral.com/",
    githubLink: "#",
    image: credo,
    altText: "Credo project screenshot",
    ownership: "Credo",
    id: 1,
  },
  {
    title: "My smart card",
    subHeading: "More Than Just a Smart Business Card",
    description:
      "My Smart Card revolutionizes the way you manage and share your contact information. This smart business card seamlessly transmits your contact details, social media profiles, and business information to any smartphone in seconds. Designed for efficiency and connectivity, My Smart Card helps you make lasting impressions and build professional relationships effortlessly. Whether you're networking at an event or meeting a potential client, My Smart Card ensures that your information is always at your fingertips, ready to be shared with a simple tap.",
    languages: ["React", "Redux Tool Kit", "Node", "tailwind css"],
    webLink: "https://mysmartcard.co/",
    githubLink: "#",
    image: smartCard,
    altText: "mySmartCard project screenshot",
    ownership: "MY Smart Card",
    id: 2,
  },
  {
    title: "Flipeet Raise",
    subHeading: "A Platform for Empowering Fundraising Campaigns",
    description:
      "Flipeet Raise is an innovative web application designed to simplify and amplify the fundraising process. Flipeet Raise enables individuals and organizations to create and manage fundraising campaigns with ease. Users can share their stories, set fundraising goals, and connect with potential donors through a user-friendly interface. The platform supports secure transactions and provides tools for campaign promotion and progress tracking. Flipeet Raise is dedicated to helping people bring their projects, causes, and dreams to life through the power of community support.",
    languages: ["React", "Redux"],
    webLink: "https://raise.flipeet.io/",
    githubLink: "#",
    image: flipeet,
    altText: "FLipeet Landing page Image",
    ownership: "Flipeet",
    id: 3,
  },
  {
    title: "Faveremit ",
    subHeading: "Fast and Reliable Gift Card Trading",
    description:
      "Faveremit is a web app designed for the swift and dependable buying and selling of unused gift cards for cash at competitive rates. Experience seamless transactions and get the best value for your gift cards effortlessly. With Faveremit, you can turn your unused gift cards into cash quickly and securely or purchase gift cards at attractive prices.",
    languages: ["React", "Redux tool kit", "tailwind css"],
    webLink: "https://faveremitwebportal.vercel.app/",
    githubLink: "#",
    image: faveremit,
    altText: "Ilaundry Landing page Image",
    ownership: "Faveremit",
    id: 4,
  },
];

const Projects = ({ darkMode }) => {
  return (
    <ProjectStyled darkMode={darkMode} id="projects">
      <h1>
        <div className="lineStyle"></div>
        Projects I've Worked On
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
            id,
            subHeading,
          }) => (
            <div className="projectContainer" key={id}>
              <div className="textDiv">
                <h4>Featured Project</h4>
                <div>
                  <a href={webLink} target="_blank" rel="noopener noreferrer">
                    <h3>{title}</h3>
                  </a>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "light",
                      color: "#ccc",
                    }}
                  >
                    {subHeading}
                  </p>
                </div>

                <div className="descriptionDiv">
                  <p>{description}</p>
                </div>
                <div className="techDiv">
                  {languages.map((items) => (
                    <h4 key={items}> {items}</h4>
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
