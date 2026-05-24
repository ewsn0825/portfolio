import geppetto from "@/assets/project/geppetto.png";
import portfolio from "@/assets/project/portfolio.png";
import asset from "@/assets/project/asset-dashboard.png";
import { motion } from "framer-motion";

// ✨ PROJECTS_DATA: 포트폴리오를 배열의 첫 번째(상단) 요소로 배치했습니다.
const PROJECTS_DATA = [
  {
    id: "asset-dashboard",
    title: "Asset Dashboard", // 더 직관적인 제목으로 수정
    type: "개인 프로젝트",
    period: "2026.04 - 2026.05",
    image: asset,
    description:
      "실시간 자산 현황과 투자 포트폴리오를 시각화하는 대시보드입니다. TanStack Query를 통한 서버 상태 관리와 Redis 기반의 효율적인 인증 로직을 도입하여 데이터 일관성과 앱 성능을 극대화했습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
    links: {
      web: "https://asset-dashboard-lovat.vercel.app",
      github: "https://github.com/ewsn0825/asset-dashboard",
    },
    features: [
      {
        title: "실시간 자산 시각화",
        details: [
          "종목별/계좌별 자산 구성비 차트 제공",
          "실시간 환율 및 시세 데이터 연동",
        ],
      },
      {
        title: "사용자 인증/인가",
        details: [
          "Axios Interceptor를 통한 토큰 자동 갱신",
          "Redis 기반 세션 관리 최적화",
        ],
      },
      {
        title: "통합 대시보드",
        details: [
          "주식/CMA/ISA 통합 자산 관리",
          "디바운싱을 적용한 검색 최적화",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "디바운싱을 통한 검색 API 최적화",
        problem:
          "검색 및 금액 입력 시 onChange마다 API가 호출되어 네트워크 리소스 낭비 및 렌더링 부하 발생.",
        solution:
          "커스텀 훅(useDebounce)을 구현하여 입력 종료 후 300~500ms 지연 후 API를 호출하도록 로직 분리.",
        learned:
          "불필요한 네트워크 요청을 차단하여 UI 반응 속도를 개선하고 브라우저 성능을 최적화하는 과정을 경험했습니다.",
      },
      {
        title: "TanStack Query로 서버 상태 캐싱",
        problem:
          "탭 이동 시마다 동일한 데이터를 매번 패칭하여 발생하는 로딩 지연과 UX 저하 문제.",
        solution:
          "TanStack Query를 도입하여 staleTime과 gcTime을 데이터 특성에 맞게 설정하고 클라이언트/서버 상태를 분리.",
        learned:
          "적절한 캐싱 전략이 Zero-loading 환경을 만들어 사용자 체감 성능을 극대화함을 확인했습니다.",
      },
      {
        title: "인증 로직 및 DB 병목 개선",
        problem:
          "토큰 갱신 과정에서 RDBMS 조회로 인한 응답 지연 및 메인 DB 부하 우려.",
        solution:
          "리프레시 토큰을 Redis(인메모리 저장소)로 이전하여 인증 속도를 향상하고, Axios Interceptor로 토큰 재발급 자동화 구현.",
        learned:
          "인메모리 저장소를 활용한 아키텍처 개선으로 서버 안정성과 자연스러운 인증 UX를 구현하는 법을 배웠습니다.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Largon Portfolio",
    type: "개인 프로젝트",
    period: "2024.05 - 2024.06 , 2026.05 - 2026.05",
    image: portfolio,
    description:
      "저의 인적사항 및 기술 스택, 프로젝트들을 정리하기 위해 만든 반응형 포트폴리오 웹 사이트입니다. 부드러운 스크롤 인터랙션과 다크 테마 디자인을 적용했습니다.",
    // ✨ 포트폴리오의 실제 기술 스택으로 최신화
    techStack: ["React", "Tailwind CSS", "Framer Motion", "React Scroll"],
    links: {
      web: "https://largonportfolio.vercel.app",
      github: "https://github.com/ewsn0825/portfolio",
    },
    features: [
      {
        title: "About",
        details: ["인적사항 및 핵심 가치를 담은 섹션"],
      },
      {
        title: "Experience",
        details: ["학습 및 프로젝트 타임라인 시각화"],
      },
      {
        title: "Projects",
        details: ["상세 정보와 트러블 슈팅을 담은 프로젝트 리스트"],
      },
    ],
    troubleshooting: [
      {
        title: "스크롤 내비게이션 인디케이터 최적화",
        problem:
          "클릭 시 스크롤 이동 중 거쳐가는 모든 섹션이 활성화되어 인디케이터가 의도치 않게 움직이는 현상 발생.",
        solution:
          "useRef로 클릭 이동 상태를 구분하여, 이동 중에는 불필요한 자동 업데이트(spy)를 무시하도록 로직을 분리하였습니다.",
        learned:
          "기본 라이브러리의 동작을 세밀하게 제어하여, 사용자가 느끼는 미세한 시각적 불편함까지 개선하는 UX 최적화의 중요성을 배웠습니다.",
      },
      {
        title: "섹션별 레이아웃 일관성 확보",
        problem:
          "섹션마다 컨테이너 규격이 달라 페이지 이동 시 타이틀과 로고의 정렬선이 어긋나는 시각적 불안정함 발견.",
        solution:
          "모든 섹션에 공통 1200px 그리드 레이아웃을 적용하고, NavBar와 콘텐츠의 시작점을 수직으로 일치시켜 정렬을 최적화했습니다.",
        learned:
          "사용자에게 안정감을 주는 인터페이스는 일관된 규격과 그리드 시스템에서 시작됨을 체감하였습니다.",
      },
    ],
  },
  {
    id: "geppetto",
    title: "제페토",
    type: "멋쟁이 사자처럼 4인 프로젝트",
    period: "2023.09.02 - 2023.09.24",
    image: geppetto,
    description:
      "반려동물 커뮤니티 플랫폼으로, React의 아토믹 컴포넌트 패턴을 적용해 재사용성을 높이고 Zustand로 전역 상태를 구조화하여 확장 가능한 아키텍처를 설계했습니다. 포켓베이스(Pocketbase)를 활용해 백엔드 API부터 배포까지 전 과정을 팀원들과 협업하여 완성한 첫 번째 프로젝트입니다.",
    techStack: ["React", "Zustand", "Tailwind CSS", "Pocketbase", "Netlify"],
    links: {
      web: "https://geppetto88.netlify.app",
      github: "https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite",
    },
    features: [
      {
        title: "회원가입/로그인",
        details: ["유효성 검사", "Google/Kakao OAuth 2.0 구현"],
      },
      {
        title: "커뮤니티",
        details: ["최신순/인기순 게시글 정렬 및 필터링"],
      },
    ],
    troubleshooting: [
      {
        title: "무한 리랜더링 방지",
        problem:
          "입력값 변경 시마다 상태가 업데이트되어 발생하는 불필요한 리랜더링.",
        solution:
          "디바운싱(Debouncing) 적용으로 입력 완료 시점에만 상태 업데이트.",
        learned:
          "성능 최적화를 위한 이벤트 제어 기법(디바운싱 vs 쓰로틀링) 차이점 숙지.",
      },
    ],
  },
];

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
    <section id="projects" className="w-full py-24 text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold font-gm tracking-tight text-white">
            Projects<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-400 font-neo mt-4">
            제가 개발한 프로젝트들의 상세 내용과 트러블 슈팅 경험입니다.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-[2rem] overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0 border-b border-gray-800">
                <div className="relative p-6 md:p-10 flex items-center justify-center bg-gray-900/80">
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

                  {project.techStack && (
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

              {project.features && (
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

              {project.troubleshooting && (
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
