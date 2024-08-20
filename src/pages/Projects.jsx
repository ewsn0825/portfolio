// import kurlyHtml from "@/assets/project/kurlyHtml.png";
// import kurlyJs from "@/assets/project/kurlyJs.png";
// import geppetto from "@/assets/project/geppetto.png";
// import tving from "@/assets/project/tving.png";
// import portfolio from "@/assets/project/portfolio.png";
// import devmate from "@/assets/project/devmate.png";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// function Projects() {
//   return (
//     <div className="desktop:px-8 flex justify-center items-center desktop:py-24 tablet:py-16 mobile:py-9 mobile:px-5">
//       <div className="desktop:w-[1240px]">
//         <div>
//           <h2 className="font-neoExBold desktop:text-5xl tablet:text-4xl mobile:text-xl font-medium mb-10">
//             Projects
//           </h2>
//           <div className="w-full font-neo grid row- desktop:grid-cols-3 tablet:grid-cols-2 desktop:gap-y-28 gap-8 items-center">
//             {/* html 프로젝트 */}

//             <Link to="/projectDetail/projectKurlyHtml">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={kurlyHtml}
//                     alt="마켓컬리 HTML 프로젝트"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     마켓컬리 HTML
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 html, css 파트를
//                     배우고 만든 웹 페이지 입니다. 정적 웹 페이지 구조를 이해하기
//                     위해 만들었습니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       html
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       css
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       sass
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>

//             <Link to="/projectDetail/projectKurlyJs">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={kurlyJs}
//                     alt="마켓컬리 JS 프로젝트"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     마켓컬리 JS
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 js 파트를 배운 후
//                     만든 웹 페이지 입니다. 이전 클론코딩하여 만들었던 마켓컬리
//                     정적 웹 페이지를 동적 웹페이지로 바꿔보았습니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       html
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       css
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       sass
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       js
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>
//             <Link to="/projectDetail/geppetto">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={geppetto}
//                     alt="제페토"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     제페토
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 react 파트를 배운 후
//                     만든 웹 페이지 입니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       tailwind
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       js
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       react
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       pocketbase
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>
//             <Link to="/projectDetail/cloneTving">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={tving}
//                     alt="티빙 클론코딩"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     Tving 클론코딩
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     OTT 사이트인 티빙을 클론코딩한 웹 페이지 입니다. 데스크탑
//                     환경만 디자인 하였습니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       react
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       restful API
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       zustand
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       vercel
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>
//             <Link to="/projectDetail/portfolio">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={portfolio}
//                     alt="포트폴리오"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     포트폴리오
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     저의 인적사항 및 기술스택과 프로젝트들을 정리한 웹 페이지
//                     입니다. 현재 보고 계시는 웹 페이지입니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       tailwind
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       react
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       vercel
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>
//             <Link to="/projectDetail/devMate">
//               <motion.div
//                 className="flex flex-col tablet:gap-8 cursor-pointer"
//                 whileHover="hover"
//               >
//                 <div className="relative w-full h-[240px]">
//                   <motion.img
//                     src={devmate}
//                     alt="데브메이트"
//                     className="w-auto h-full rounded-2xl border"
//                     variants={{
//                       hover: { translateY: -5 },
//                     }}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="font-neoBold text-[22px] font-semibold">
//                     devMate
//                   </h3>
//                   <p className="font-neo desktop:text-sm text-gray-500">
//                     개발자 커뮤니티 웹 사이트 devMate 입니다. 반응형 웹 디자인을
//                     하였고, 성능 최적화를 진행했습니다.
//                   </p>
//                 </div>
//                 <div>
//                   <ul className="flex flex-wrap gap-2 text-gray-500">
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       RWD
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       tailwind
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       zustand
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       react
//                     </li>
//                     <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
//                       vercel
//                     </li>
//                   </ul>
//                 </div>
//               </motion.div>
//             </Link>
//             {/* <ProjectKurlyHtml />
//             <ProjectKurlyJs />
//             <ProjectGeppetto />
//             <ProjectTving />
//             <Portfolio /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

import kurlyHtml from "@/assets/project/kurlyHtml.png";
import kurlyJs from "@/assets/project/kurlyJs.png";
import geppetto from "@/assets/project/geppetto.png";
import tving from "@/assets/project/tving.png";
import portfolio from "@/assets/project/portfolio.png";
import devmate from "@/assets/project/devmate.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="desktop:px-8 flex justify-center items-center desktop:py-24 tablet:py-16 mobile:py-9 mobile:px-5">
      <div className="desktop:w-[1240px]">
        <div>
          <h2 className="font-neoExBold desktop:text-5xl tablet:text-4xl mobile:text-xl font-medium mb-10">
            Projects
          </h2>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-5 gap-y-20 items-start">
            {/* HTML 프로젝트 */}
            <Link to="/projectDetail/projectKurlyHtml">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={kurlyHtml}
                    alt="마켓컬리 HTML 프로젝트"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    마켓컬리 HTML
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 html, css 파트를
                    배우고 만든 웹 페이지 입니다. 정적 웹 페이지 구조를 이해하기
                    위해 만들었습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      html
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      css
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      sass
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* JS 프로젝트 */}
            <Link to="/projectDetail/projectKurlyJs">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={kurlyJs}
                    alt="마켓컬리 JS 프로젝트"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    마켓컬리 JS
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 js 파트를 배운 후
                    만든 웹 페이지 입니다. 이전 클론코딩하여 만들었던 마켓컬리
                    정적 웹 페이지를 동적 웹페이지로 바꿔보았습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      html
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      css
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      sass
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      js
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* 제페토 프로젝트 */}
            <Link to="/projectDetail/geppetto">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={geppetto}
                    alt="제페토"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    제페토
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 react 파트를 배운 후
                    만든 웹 페이지 입니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      tailwind
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      js
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      pocketbase
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* Tving 클론코딩 프로젝트 */}
            <Link to="/projectDetail/cloneTving">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={tving}
                    alt="티빙 클론코딩"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    Tving 클론코딩
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    OTT 사이트인 티빙을 클론코딩한 웹 페이지 입니다. 데스크탑
                    환경만 디자인 하였습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      restful API
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      zustand
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      vercel
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* 포트폴리오 프로젝트 */}
            <Link to="/projectDetail/portfolio">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={portfolio}
                    alt="포트폴리오"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    포트폴리오
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    저의 인적사항 및 기술스택과 프로젝트들을 정리한 웹 페이지
                    입니다. 현재 보고 계시는 웹 페이지입니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      tailwind
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      js
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      framer-motion
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>

            {/* DevMate 프로젝트 */}
            <Link to="/projectDetail/devmate">
              <motion.div
                className="flex flex-col h-full justify-between cursor-pointer gap-6"
                whileHover="hover"
              >
                <div className="relative w-full h-[240px]">
                  <motion.img
                    src={devmate}
                    alt="DevMate"
                    className="w-full h-full rounded-2xl object-cover border"
                    variants={{
                      hover: { translateY: -5 },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-neoBold text-[22px] font-semibold">
                    DevMate
                  </h3>
                  <p className="font-neo text-sm text-gray-500 flex-grow">
                    개발자 커뮤니티 웹 사이트 devMate 입니다. 반응형 웹 디자인을
                    하였고, 성능 최적화를 진행했습니다.
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2 text-gray-500">
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      RWD
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      tailwind
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      zustand
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      react
                    </li>
                    <li className="px-4 py-1 border border-gray-300 rounded-2xl text-sm">
                      vercel
                    </li>
                  </ul>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
