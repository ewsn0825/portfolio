import NavBar from "../components/NavBar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function Landing() {
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

  const bubbles = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      size: Math.random() * 50 + 20, // 20px ~ 70px
      left: Math.random() * 80 + "%", // 0% ~ 80%
      duration: Math.random() * 5 + 12 + "s", // 12s ~ 17s
      delay: Math.random() * 3 + "s", // 0s ~ 3s
    }));
  }, []);

  const [textCompleted, setTextCompleted] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      // 글이 다 써지면 애니메이션 활성화
      setTextCompleted(true);
    }
  }, [index, fullText]);

  // useEffect(() => {
  //   if (index < fullText.length) {
  //     const timeoutId = setTimeout(() => {
  //       setDisplayedText(fullText.slice(0, index + 1));
  //       setIndex(index + 1);
  //     }, 100);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [index, fullText]);

  return (
    <div className="font-pre">
      <Element name="header"></Element>
      <NavBar />
      <div>
        <div className="bubbles">
          {textCompleted &&
            bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  left: bubble.left,
                  animationDuration: bubble.duration,
                  animationDelay: bubble.delay,
                }}
              />
            ))}
        </div>

        <div className="flex flex-col gap-32 py-20 ">
          <p className="font-neo text-center desktop:text-xl tablet:text-base mobile:text-xs font-semibold text-gray-600 ">
            {renderTextWithLineBreaks(displayedText)}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <Element name="about" className="">
          <About />
        </Element>
        <Element name="experience" className="bg-[#141617]">
          <Experience />
        </Element>
        <Element name="skills" className="bg-[#121212]">
          {/* bg-[#25282a] */}
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

export default Landing;
