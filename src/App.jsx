import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Element } from "react-scroll";
import DownArrow from "./components/DownArrow";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const fullText =
    "안녕하세요\n\n 웹 접근성에 관심이 많은 프론트엔드 개발자 이재호입니다";
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [index, fullText]);

  return (
    <div className="font-pre">
      <Element name="header"></Element>
      <NavBar />
      <div>
        <div className="flex flex-col gap-32 py-20 ">
          <p className="font-neo text-center desktop:text-xl tablet:text-base mobile:text-xs font-semibold text-gray-600 ">
            {/* {displayedText} */}
            {renderTextWithLineBreaks(displayedText)}
          </p>
          <DownArrow />
        </div>
      </div>

      <div className="">
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        {/* <Element name="skills" className="bg-[#d5cbbf]">
          <Skills />
        </Element> */}
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
