import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
// import Animate from "react-simple-animate";
import Navigation from "./components/Nav";
import TopSection from "./components/TopSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode, "darkmode");
  return (
    <Portfolio darkMode={darkMode}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode}>
        <TopSection darkMode={darkMode} />
        <AboutMe darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <ContactMe darkMode={darkMode} />
      </Body>
      <Footer />
    </Portfolio>
  );
}

const Portfolio = styled.div`
  box-sizing: border-box;
  background: ${(props) => (props.darkMode ? "#080a16" : "#FFF")};
  overflow-x: hidden;
`;

const Body = styled.div`
  text-align: center;
  color: white;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => (props.darkMode ? "#080a16" : "#FFF")};
`;

export default App;
