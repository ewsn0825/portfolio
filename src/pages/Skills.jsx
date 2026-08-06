import tailwind from "@/assets/skill/tw_d.svg";
import react from "@/assets/skill/react_n.svg";
import zustand from "@/assets/skill/zustand_d.svg";
import ts from "@/assets/skill/ts_d.svg";
import tanstack from "@/assets/skill/tanstack.svg";
import next from "@/assets/skill/Next.js.svg";
// lucide-react에서 화살표 아이콘 추가
import { ChevronRight } from "lucide-react";

// 스킬 데이터를 배열로 분리하여 유지보수를 쉽게 만듭니다.
const skillsData = [
  {
    id: "react",
    name: "React",
    icon: react,
    descriptions: [
      "컴포넌트를 분할하여 재사용성을 높입니다.",
      "다양한 라이브러리를 활용할 수 있습니다.",
      "Vite를 사용하여 빌드할 수 있습니다.",
      "코드 스플리팅을 통해 성능 최적화를 할 수 있습니다.",
    ],
  },
  {
    id: "ts-js",
    name: "TypeScript / JavaScript",
    icon: ts,
    descriptions: [
      "타입을 정하여 런타임 에러를 사전에 방지할 수 있습니다.",
      "Axios를 사용하여 데이터 동기, 비동기 처리를 능숙하게 다룹니다.",
    ],
  },
  {
    id: "styling",
    name: "Tailwind",
    icon: tailwind,
    descriptions: [
      "다양한 형태의 반응형 레이아웃을 구성할 수 있습니다.",
      "상태에 따른 동적 스타일링이 가능합니다.",
    ],
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: zustand,
    descriptions: [
      "전역 상태 관리에 대한 이해도가 있습니다.",
      "Persist 옵션을 사용해 Storage에서 상태 값을 다룰 수 있습니다.",
    ],
  },
  {
    id: "tanstack",
    name: "TanStack Query",
    icon: tanstack,
    descriptions: [
      "서버 상태 관리와 데이터 캐싱을 효율적으로 처리할 수 있습니다.",
      "비동기 데이터의 로딩(Loading) 및 에러(Error) 상태를 선언적으로 관리합니다.",
    ],
  },
  {
    id: "next",
    name: "Next.js",
    icon: next,
    descriptions: [
      "서버 사이드 렌더링(SSR)의 원리를 이해하고, 하이드레이션(Hydration) 관련 트러블슈팅을 해결할 수 있습니다.",
      "라우팅 시스템을 활용하여 조건에 따른 페이지 이동 및 데이터 필터링 로직을 직관적으로 구현합니다.",
    ],
  },
];

function Skills() {
  return (
    // 전체를 감싸는 section 태그 추가 (상하 여백 py-24 지정)
    <section id="skills" className="w-full py-24 text-white">
      {/* 약속한 공통 레이아웃 컨테이너: 1200px 고정, 좌우 여백 통일 */}
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Title (시안색 마침표 추가) */}
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold font-gm tracking-tight">
            Skills<span className="text-cyan-500">.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col gap-5 bg-gray-900/40 border border-gray-800/50 p-7 rounded-2xl transition-all duration-300 hover:bg-gray-800/60 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
            >
              {/* Icon & Title Header */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:bg-gray-700 transition-colors">
                  {/* ✨ 성능 최적화: 이미지 지연 로딩 및 비동기 디코딩 적용 */}
                  <img
                    className={`w-8 h-8 object-contain ${
                      skill.id === "tanstack" || skill.id === "next"
                        ? "invert brightness-0 filter" // 검은색 SVG를 완전히 하얗게 만듭니다
                        : ""
                    }`}
                    src={skill.icon}
                    alt={`${skill.name} 아이콘`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold font-pre text-white">
                  {skill.name}
                </h3>
              </div>

              {/* Descriptions List */}
              <ul className="flex flex-col gap-3 mt-2">
                {skill.descriptions.map((desc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-slate-300 text-[15px] md:text-base leading-relaxed"
                  >
                    <ChevronRight
                      className="w-4 h-4 text-cyan-500 mt-1 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
