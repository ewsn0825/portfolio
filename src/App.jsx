import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="font-noto">
      <NavBar />
      <div className="desktop:w-[1240px] mx-auto desktop:p-5 flex flex-col desktop:gap-36">
        <p className="text-center">
          안녕하세요. 프론트엔드 개발자 이재호입니다.
        </p>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
