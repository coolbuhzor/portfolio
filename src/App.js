import React from "react";
import "./App.css";
// import Animate from "react-simple-animate";
import Navigation from "./components/Nav";
import TopSection from "./components/TopSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <div className="App">
        <TopSection />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
