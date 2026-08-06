import NavBar from "../components/NavBar";
import { Element, Link as ScrollLink } from "react-scroll";
import { Suspense, lazy } from "react";

// React.lazy를 사용하여 하위 컴포넌트들을 비동기적으로 불러옵니다.
const About = lazy(() => import("./About"));
const Experience = lazy(() => import("./Experience"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));

function SectionFallback() {
  return (
    <div className="flex min-h-[20rem] w-full flex-col items-center justify-center bg-[#0a0b10]/50 animate-pulse">
      <div className="mb-4 h-10 w-10 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin" />
      <span className="text-sm font-medium tracking-widest text-cyan-500/50">
        LOADING
      </span>
    </div>
  );
}

function Landing() {
  return (
    <div className="font-pre bg-[#050505] text-slate-200 min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30">
      <Element name="header"></Element>
      <NavBar />

      {/* 메인 랜딩 영역 */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-5 md:px-6">
        {/* ✨ 모바일 성능 최적화: 렌더링 부하가 큰 블러 이펙트는 md(태블릿) 이상에서만 표시 */}
        <div className="hidden md:block absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none will-change-opacity"></div>
        <div
          className="hidden md:block absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse pointer-events-none will-change-opacity"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* 정적 Hero는 지연 없이 즉시 노출해 LCP를 앞당깁니다. */}
        <div className="relative z-10 flex min-h-[400px] w-full max-w-4xl flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-7">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-300 uppercase backdrop-blur-md">
              Frontend Developer
            </div>

            <h1 className="text-center font-bold tracking-tighter">
              <span className="mb-2 block text-[2rem] text-slate-300 sm:text-4xl md:text-6xl lg:text-7xl">
                Crafting Digital
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text pb-2 text-[2.6rem] text-transparent sm:text-5xl md:text-7xl lg:text-8xl">
                Experiences.
              </span>
            </h1>

            <p className="max-w-2xl text-center text-base font-light leading-7 text-slate-300 md:text-xl md:leading-relaxed">
              안녕하세요. 비즈니스 가치를 코드로 번역하는 개발자{" "}
              <strong className="text-slate-200 font-semibold">
                Largon 이재호
              </strong>
              입니다. <br className="hidden md:block" />
              데이터 중심의 아키텍처와 끊김 없는 사용자 경험을 설계합니다.
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-cyan-400 px-6 text-base font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-colors hover:bg-cyan-300"
              >
                프로젝트 보기
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-base text-white transition-colors hover:bg-white/10"
              >
                연락하기
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* 스크롤 버튼 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-[10px]">
              Scroll
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </ScrollLink>
        </div>
      </div>

      {/* 독립 경계로 분리해 무거운 섹션이 다른 섹션의 표시를 막지 않도록 합니다. */}
      <div className="flex flex-col relative z-10 bg-[#050505]">
        <Element name="about">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </Element>
        <Element name="experience" className="bg-[#0a0b10]">
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
        </Element>
        <Element name="skills" className="bg-[#050505]">
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
        </Element>
        <Element name="projects" className="bg-[#0a0b10]">
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
        </Element>
        <Element name="contact" className="bg-[#050505]">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </Element>
      </div>
    </div>
  );
}

export default Landing;
