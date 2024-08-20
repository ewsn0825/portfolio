import html from "@/assets/skill/HTML.svg";
import css from "@/assets/skill/CSS.svg";
import js from "@/assets/skill/JavaScript.svg";
import tailwind from "@/assets/skill/TailwindCSS-Dark.svg";
import sass from "@/assets/skill/Sass.svg";
import react from "@/assets/skill/React.svg";
import zustand from "@/assets/skill/zustand.svg";

import git from "@/assets/skill/Git.svg";
import github from "@/assets/skill/Github-Light.svg";
import nf from "@/assets/skill/Netlify-Light.svg";
import vercel from "@/assets/skill/Vercel-Light.svg";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="desktop:px-8 desktop:py-24 tablet:py-16 mobile:py-9 flex items-center justify-center">
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto flex flex-col items-center">
        <h2 className="text-brandtext desktop:text-5xl tablet:text-3xl mobile:text-xl font-medium font-neoExBold">Skills</h2>
        <div className="w-[90%] p-8 grid gap-16 desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 items-start">
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 rounded-2xl bg-white"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="desktop:text-2xl mobile:text-base font-semibold">Frontend</h3>
            <ul className="flex flex-col desktop:gap-7  mobile:gap-5 desktop:text-lg mobile:text-base font-medium">
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={html} alt="html 이미지" />
                <span>HTML5</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={css} alt="css3 이미지" />
                <span>CSS3</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={js} alt="javascript 이미지" />
                <span>JavaScript</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={tailwind} alt="tailwind 이미지" />
                <span>TailwindCSS</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={sass} alt="sass 이미지" />
                <span>Sass</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={react} alt="react 이미지" />
                <span>React</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={zustand} alt="zustand 이미지" />
                <span>Zustand</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 rounded-2xl bg-white"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="desktop:text-2xl mobile:text-base font-semibold">Deployment</h3>
            <ul className="flex flex-col desktop:gap-7 mobile:gap-5 desktop:text-lg mobile:text-base font-medium">
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={nf} alt="netlyfy 이미지" />
                <span>Netlify</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={vercel} alt="vercel 이미지" />
                <span>Vercel</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 rounded-2xl bg-white"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="desktop:text-2xl mobile:text-base font-semibold">version control</h3>
            <ul className="flex flex-col desktop:gap-7 mobile:gap-5 desktop:text-lg mobile:text-base font-medium">
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={git} alt="git 이미지" />
                <span>Git</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="desktop:w-24 mobile:w-16" src={github} alt="github 이미지" />
                <span>GitHub</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
