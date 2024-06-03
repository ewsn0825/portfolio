import React from "react";

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
    <div className="pt-[85px]">
      <div className="border-t-2 border-t-black">
        <h2 className="text-4.5xl font-semibold mt-5 mb-8">Skills</h2>
        <div className="flex justify-around items-start">
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 flex-[0.2] rounded-2xl"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="text-2xl font-semibold">Frontend</h3>
            <ul className="flex flex-col gap-7 text-lg font-medium">
              <li className="flex flex-col items-center">
                <img className="w-24" src={html} alt="html 이미지" />
                <span>HTML5</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={css} alt="css3 이미지" />
                <span>CSS3</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={js} alt="javascript 이미지" />
                <span>JavaScript</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={tailwind} alt="tailwind 이미지" />
                <span>TailwindCSS</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={sass} alt="sass 이미지" />
                <span>Sass</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={react} alt="react 이미지" />
                <span>React</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={zustand} alt="zustand 이미지" />
                <span>Zustand</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 flex-[0.2] rounded-2xl"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="text-2xl font-semibold">Deployment</h3>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li className="flex flex-col items-center">
                <img className="w-24" src={nf} alt="netlyfy 이미지" />
                <span>Netlify</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={vercel} alt="vercel 이미지" />
                <span>Vercel</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 items-center shadow-xl py-10 flex-[0.2] rounded-2xl"
            whileHover={{ y: -15 }}
            transition={{
              type: "tween",
              stiffness: 300,
              duration: 0.2,
            }}
          >
            <h3 className="text-2xl font-semibold">version control</h3>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li className="flex flex-col items-center">
                <img className="w-24" src={git} alt="git 이미지" />
                <span>Git</span>
              </li>
              <li className="flex flex-col items-center">
                <img className="w-24" src={github} alt="github 이미지" />
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
