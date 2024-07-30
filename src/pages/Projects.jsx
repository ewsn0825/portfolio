// import Portfolio from "@/components/project/Portfolio";
// import ProjectGeppetto from "@/components/project/ProjectGeppetto";
// import ProjectKurlyHtml from "@/components/project/ProjectKurlyHtml";
// import ProjectKurlyJs from "@/components/project/ProjectKurlyJs";
// import ProjectTving from "@/components/project/ProjectTving";

import kurlyHtml from "@/assets/project/kurlyHtml.png";
import kurlyJs from "@/assets/project/kurlyJs.png";
import geppetto from "@/assets/project/geppetto.png";
import tving from "@/assets/project/tving.png";
import portfolio from "@/assets/project/portfolio.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="desktop:px-8 flex justify-center items-center desktop:py-24 tablet:py-16 mobile:py-9">
      <div className="desktop:w-[1240px]">
        <div>
          <h2 className="font-pre desktop:text-5xl tablet:text-4xl mobile:text-xl font-medium mb-10">
            Projects
          </h2>
          <div className="w-full font-neo grid row- desktop:grid-cols-3 tablet:grid-cols-2 desktop:gap-y-28 gap-8">
            {/* html 프로젝트 */}

            <Link to="/projectDetail/projectKurlyHtml">
              <motion.div
                className="flex flex-col desktop:gap-8 cursor-pointer"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={kurlyHtml}
                    alt="마켓컬리 HTML 프로젝트"
                    className="w-auto h-full rounded-2xl object-cover"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    마켓컬리 HTML
                  </h3>
                  <p className="font-neo desktop:text-sm text-gray-500">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 html, css 파트를
                    배우고 만든 웹 페이지 입니다. 정적 웹 페이지 구조를 이해하기
                    위해 만들었습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      html
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      css
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      scss
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            <Link to="/projectDetail/projectKurlyJs">
              <motion.div
                className="flex flex-col desktop:gap-8 cursor-pointer"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={kurlyJs}
                    alt="마켓컬리 JS 프로젝트"
                    className="w-auto h-full rounded-2xl object-cover"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    마켓컬리 JS
                  </h3>
                  <p className="font-neo desktop:text-sm text-gray-500">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 js 파트를 배운 후
                    만든 웹 페이지 입니다. 이전 클론코딩하여 만들었던 마켓컬리
                    정적 웹 페이지를 동적 웹페이지로 바꿔보았습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      html
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      css
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      scss
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      js
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
            <Link to="/projectDetail/geppetto">
              <motion.div
                className="flex flex-col desktop:gap-8 cursor-pointer"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={geppetto}
                    alt="제페토"
                    className="w-auto h-full rounded-2xl object-cover"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    제페토
                  </h3>
                  <p className="font-neo desktop:text-sm text-gray-500">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 react 파트를 배운 후
                    만든 웹 페이지 입니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      tailwind
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      js
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      pocketbase
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
            <Link to="/projectDetail/cloneTving">
              <motion.div
                className="flex flex-col desktop:gap-8 cursor-pointer"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={tving}
                    alt="티빙 클론코딩"
                    className="w-auto h-full rounded-2xl object-cover"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    Tving 클론코딩
                  </h3>
                  <p className="font-neo desktop:text-sm text-gray-500">
                    OTT 사이트인 티빙을 클론코딩한 웹 페이지 입니다. 데스크탑
                    환경만 디자인 하였습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      restful API
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      zustand
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      vercel
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
            <Link to="/projectDetail/portfolio">
              <motion.div
                className="flex flex-col desktop:gap-8 cursor-pointer"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={portfolio}
                    alt="포트폴리오"
                    className="w-auto h-full rounded-2xl object-cover"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    포트폴리오
                  </h3>
                  <p className="font-neo desktop:text-sm text-gray-500">
                    저의 인적사항 및 기술스택과 프로젝트들을 정리한 웹 페이지
                    입니다. 현재 보고 계시는 웹 페이지입니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      tailwind
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                      vercel
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
            {/* <ProjectKurlyHtml />
            <ProjectKurlyJs />
            <ProjectGeppetto />
            <ProjectTving />
            <Portfolio /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
