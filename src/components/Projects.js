import React from "react";
import styled from "styled-components";
// import githubfinder from "../img/githubfinda.png";
import devices from "../utils/devices";
import credoImg from "../img/credo-img.png";
import nimdeeImg from "../img/nimdee.png";
import githubfinda from "../img/githubfinda.png";

const ProjectStyled = styled.div`
  // height: 100vh;
  padding: 15rem 0;
  border: 1px solid red;

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

const projects = [
  {
    title: "Credo",
    description:
      "Credo is a fintech application that is in development which helps to run businesses as smoothly as possible. Credo helps with selling of your products, payments and posting directly to you social media accounts.",
    languages: ["React", "Redux", "Node", "Styled Components", "Bootstrap"],
    webLink: "https://credo.nugitech.com/",
    githubLink: "https://github.com/nugitech/credo-frontend",
    image: credoImg,
    altText: "Credo project screenshot",
  },
  {
    title: "Nimdee",
    description: "Nimdee is a ",
    languages: ["React", "Redux", "PHP"],
    webLink: "https://nimdee.com/",
    githubLink: "https://github.com/9ijakidArchitect/NimdeeReact.git",
    image: nimdeeImg,
    altText: "Nimdee project screenshot",
  },
  {
    title: "Github Finder",
    description:
      "Github Finder is an application that allows you to search for github users and their details. Users don't need to signup/login t use this application. ",
    languages: ["React", "context api", "Styled Components"],
    webLink: "https://www.dev-coach.com/",
    githubLink: "https://github.com/LABS-EU3/quality_hub_frontend/",
    image: githubfinda,
    altText: "devCoach project screenshot",
  },
];

const Projects = () => {
  return (
    <ProjectStyled id="projects">
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
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 515.556 515.556"
                    height="512"
                    viewBox="0 0 515.556 515.556"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m392.189 0c-32.946 0-63.926 12.839-87.227 36.14l-96.067 96.067c7.342-1.025 14.677-2.138 22.182-2.138 20.693 0 40.97 4.02 59.611 11.474l59.839-59.839c11.139-11.124 25.929-17.26 41.662-17.26 32.49 0 58.922 26.432 58.922 58.922 0 15.734-6.136 30.523-17.26 41.662l-107.71 107.712c-22.279 22.247-61.046 22.263-83.325.016l-45.533 45.596c23.286 23.27 54.265 36.093 87.195 36.093 32.946 0 63.925-12.839 87.227-36.14l107.712-107.712c23.301-23.301 36.14-54.281 36.14-87.227-.001-68.031-55.336-123.366-123.368-123.366z" />
                    <path d="m224.303 374.578-59.274 59.274c-11.139 11.124-25.929 17.26-41.662 17.26-32.49 0-58.922-26.432-58.922-58.922 0-15.733 6.136-30.523 17.26-41.662l107.712-107.712c22.279-22.247 61.046-22.263 83.325-.016l45.533-45.596c-46.587-46.54-127.819-46.555-174.422.047l-107.713 107.712c-23.302 23.301-36.14 54.28-36.14 87.226 0 68.032 55.335 123.366 123.366 123.366 32.946 0 63.925-12.839 87.227-36.14l94.792-94.792c-6.921.93-13.806 2.043-20.908 2.043-21.012.001-41.363-4.2-60.174-12.088z" />
                  </svg>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </svg>
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
