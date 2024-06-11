import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";
import DownArrow from "./components/DownArrow";

function App() {
  return (
    <div className="font-noto">
      <Element name="header"></Element>
      <NavBar />
      <div>
        <div className="flex flex-col gap-32 py-20">
          <p className="text-center text-xl font-semibold text-gray-600">
            안녕하세요. <br />웹 접근성에 관심이 있는 프론트엔드 개발자
            이재호입니다.
          </p>
          <DownArrow />
        </div>
      </div>

      <div className="mx-auto flex flex-col">
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="skills" className="bg-yellow-400">
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
