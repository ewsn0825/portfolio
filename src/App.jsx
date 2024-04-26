import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-noto  desktop:mx-14">
      <NavBar />
      <p className="text-center">안녕하세요. 프론트엔드 개발자 이재호입니다.</p>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
