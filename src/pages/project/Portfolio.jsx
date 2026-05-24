import geppetto from "@/assets/project/geppetto.png";
// ✨ 포트폴리오 이미지 import 이름을 pofol로 맞췄습니다.
import pofol from "@/assets/project/portfolio.png";
import { motion } from "framer-motion";

// ✨ 1. 데이터 영역: 제페토와 Jade Portfolio 데이터가 모두 꽉 채워져 있습니다.
const PROJECTS_DATA = [
  {
    id: "geppetto",
    title: "제페토",
    type: "멋쟁이 사자처럼 4인 프로젝트",
    period: "2023.09.02 - 2023.09.24",
    image: geppetto,
    description:
      "처음 React를 사용하여 만든 펫 커뮤니티 웹 페이지입니다. 아토믹 컴포넌트 단위로 분리하여 재사용성을 높였고, 포켓베이스를 활용해 백엔드 환경을 구축하여 넷플리파이로 배포까지 완수했습니다.",
    techStack: [
      "React",
      "Zustand",
      "Tailwind",
      "Pocketbase",
      "Figma",
      "Netlify",
    ],
    links: {
      web: "https://geppetto88.netlify.app",
      github: "https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite",
    },
    features: [
      {
        title: "회원가입",
        details: ["유효성 검사 및 중복 검사", "프로필 이미지 업로드 기능"],
      },
      {
        title: "로그인",
        details: [
          "구글, 카카오 간편 로그인 (OAuth 2.0)",
          "불일치 시 Toast 알림 처리",
        ],
      },
      {
        title: "커뮤니티 페이지",
        details: ["최신순 & 인기순 정렬 필터링 기능"],
      },
    ],
    troubleshooting: [
      {
        title: "상태 변경 시 무한 리랜더링 문제",
        problem:
          "회원가입 유효성 검사 시 입력 창 텍스트가 바뀔 때마다 상태를 업데이트하여 매번 랜더링이 발생하는 문제.",
        solution:
          "디바운싱(Debouncing)을 적용하여 일정 시간을 기준으로 입력이 끝났을 때만 한 번 랜더링되도록 최적화.",
        learned:
          "반복되는 이벤트를 제어하는 디바운싱의 개념을 숙지. 무한스크롤에 쓰이는 쓰로틀링(Throttling)과의 차이점 이해.",
      },
      {
        title: "이미지 Form-Data 형식 불일치",
        problem:
          "input type='file'로 이미지 업로드 시, 포켓베이스가 요구하는 form-data 형식과 맞지 않아 에러 발생.",
        solution:
          "URL.createObjectURL(file) 메서드를 활용해 업로드된 이미지를 알맞은 Blob 형식으로 변환하여 전송 해결.",
        learned:
          "브라우저 메모리 내에 존재하는 파일 객체에 접근할 수 있는 URL.createObjectURL의 활용법 터득.",
      },
      {
        title: "간편 로그인 (OAuth 2.0) 도입",
        problem:
          "아이디/비밀번호 기반 로그인 방식의 한계를 느끼고, 사용자 편의성을 위해 간편 로그인을 도입하고자 함.",
        solution:
          "포켓베이스의 authWithOAuth2 메서드를 활용하여 구글 및 카카오 간편 로그인 기능 연동 성공.",
        learned:
          "OAuth 2.0의 흐름을 이해하고, 소셜 로그인이 사용자 편의성(UX)에 미치는 긍정적 영향 체감.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Jade Portfolio",
    type: "개인 프로젝트",
    period: "2024.05 - 2024.06",
    image: pofol, // ✨ import 한 pofol 변수를 연결했습니다.
    description:
      "저의 인적사항 및 기술스택, 그동안 해온 프로젝트들을 정리하기 위해 만든 웹 사이트입니다. 반응형으로 제작하였고 디자인은 심플하게 구현하였습니다.",
    techStack: ["React", "react-scroll", "RWD", "Vercel"],
    links: {
      web: "https://jadeportfolio.vercel.app",
      github: "https://github.com/ewsn0825/portfolio",
    },
    features: [
      {
        title: "About",
        details: ["저의 인적사항이 적혀있는 페이지입니다."],
      },
      {
        title: "Experience",
        details: ["제가 그동안 했던 경험이 적혀있는 페이지입니다."],
      },
      {
        title: "Skills",
        details: ["저의 기술 스택이 적혀있는 페이지입니다."],
      },
      {
        title: "Projects",
        details: [
          "제가 지금까지 해왔던 프로젝트들이 정리되어있는 페이지입니다.",
          "원하는 프로젝트를 누르면 디테일 페이지로 이동하며 상세하게 보실 수 있습니다.",
        ],
      },
      {
        title: "Contact",
        details: ["개인 SNS 링크들과 github 링크를 달아 놓은 페이지입니다."],
      },
    ],
    troubleshooting: [
      {
        title: "nav 바를 사용해서 원하는 위치에 접근해볼까?",
        problem:
          "CSS를 사용하여 nav 바에서 원하는 페이지 이름을 클릭하면 해당 페이지로 이동하게 해보았지만, 반응형으로 레이아웃의 크기가 바뀔 때 마다 설정을 다시 해주어야 하는 불편함이 있었습니다.",
        solution:
          "react-scroll 라이브러리를 사용하며 쉽게 해결할 수 있었습니다. Element와 Link를 사용하여 레이아웃이 바뀌어도 원하는 위치에 알맞게 이동하는 것을 확인하였습니다.",
        learned:
          "react-scroll이라는 라이브러리를 처음 알게되었고, 이를 사용해보며 애니메이션이 있는 스크롤링을 편하게 구현할 수 있어서 좋았습니다.",
      },
    ],
  },
];

// ✨ 2. UI 영역: 배열을 순회하며 화면을 그립니다.
function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="w-full bg-[#0a0f18] py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="font-gm text-4xl md:text-5xl font-bold text-white tracking-wider">
            Projects<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-400 font-neo">
            제가 개발한 프로젝트들의 상세 내용과 트러블 슈팅 경험입니다.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* 배열 순회 렌더링 시작 */}
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col bg-[#111827]/50 backdrop-blur-sm border border-gray-800 rounded-[2rem] overflow-hidden"
            >
              {/* 상단: 이미지 & 기본 정보 */}
              <div className="grid lg:grid-cols-2 gap-0 border-b border-gray-800">
                <div className="relative p-6 md:p-10 flex items-center justify-center bg-[#111827]/80">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl shadow-2xl border border-gray-700/50"
                    />
                  )}
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <span className="text-cyan-400 font-neoBold text-sm mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-neoExBold text-white mb-3">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 text-sm mb-6">
                    {project.period}
                  </span>

                  <p className="text-gray-300 font-neo leading-relaxed mb-8 text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* 기술 스택 렌더링 */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-neoBold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 링크 버튼 */}
                  <div className="flex flex-wrap gap-4 font-neoBold">
                    {project.links?.web && (
                      <a
                        href={project.links.web}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 rounded-full transition-colors text-sm"
                      >
                        웹 페이지 방문
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full transition-colors text-sm"
                      >
                        GitHub 보기
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 중단: 담당 기능 */}
              {project.features && project.features.length > 0 && (
                <div className="p-6 md:p-10 border-b border-gray-800">
                  <h4 className="text-2xl font-neoExBold text-white mb-6">
                    🎯 기능 설명
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/30 p-5 rounded-2xl border border-gray-800/50"
                      >
                        <h5 className="text-cyan-400 font-neoBold mb-2 text-lg">
                          {feature.title}
                        </h5>
                        <ul className="text-gray-400 text-sm space-y-1 font-neo">
                          {feature.details.map((detail, dIdx) => (
                            <li key={dIdx}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 하단: 트러블 슈팅 */}
              {project.troubleshooting &&
                project.troubleshooting.length > 0 && (
                  <div className="p-6 md:p-10">
                    <h4 className="text-2xl font-neoExBold text-white mb-8">
                      💥 트러블 슈팅
                    </h4>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {project.troubleshooting.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden"
                        >
                          <div className="bg-gray-800 py-3 px-4 border-b border-gray-700">
                            <h5 className="text-white font-neoBold text-center">
                              {item.title}
                            </h5>
                          </div>
                          <div className="p-5 flex flex-col gap-4 text-sm font-neo">
                            <div>
                              <span className="text-red-400 font-neoBold mb-1 block">
                                🔥 문제 발생
                              </span>
                              <p className="text-gray-400 leading-relaxed">
                                {item.problem}
                              </p>
                            </div>
                            <div>
                              <span className="text-blue-400 font-neoBold mb-1 block">
                                💡 해결 방법
                              </span>
                              <p className="text-gray-300 leading-relaxed">
                                {item.solution}
                              </p>
                            </div>
                            <div>
                              <span className="text-orange-400 font-neoBold mb-1 block">
                                🔍 알게된 점
                              </span>
                              <p className="text-gray-400 leading-relaxed">
                                {item.learned}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
