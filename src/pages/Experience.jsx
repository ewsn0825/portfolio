// lucide-react에서 달력과 체크 아이콘을 가져옵니다.
import { Calendar, CheckCircle2 } from "lucide-react";

function Experience() {
  return (
    // ✨ 1. 전체를 감싸는 section 태그 추가 (상하 여백 py-24 지정)
    <section className="w-full py-24 text-white">
      {/* ✨ 2. 약속한 공통 레이아웃 컨테이너: 1200px 고정, 좌우 여백 통일 */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Title (About 섹션과 통일, 시안색 마침표 추가) */}
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold font-gm tracking-tight">
            Experience<span className="text-cyan-500">.</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-800 ml-3 md:ml-4">
          {/* Experience Item */}
          <div className="mb-10 ml-8 md:ml-10 relative group">
            {/* 타임라인 포인트 (점) */}
            <span className="absolute -left-[41px] md:-left-[49px] flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></span>

            {/* Card UI */}
            <div className="bg-gray-900/40 border border-gray-800/50 p-6 md:p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  멋쟁이 사자처럼 프론트엔드 스쿨 수료
                </h3>

                {/* Date Badge */}
                <div className="flex items-center gap-2 text-cyan-400 text-sm md:text-base font-medium bg-cyan-950/30 px-3 py-1.5 rounded-full w-fit shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>2023. 05 ~ 2023. 09</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                집중적인 프론트엔드 개발 교육 과정을 통해 웹 개발의 기반을
                다지고 실무 역량을 키웠습니다.
              </p>

              {/* Tech Stack Tags */}
              <ul className="flex flex-wrap gap-3">
                {["HTML5", "CSS", "JavaScript", "React"].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-1.5 text-sm text-gray-300 bg-gray-800/60 border border-gray-700/50 px-3 py-1.5 rounded-md"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 나중에 다른 경험이 추가된다면 위 <div className="mb-10 ml-8...">...</div> 부분을 복사해서 아래에 붙여넣기만 하면 타임라인이 자연스럽게 이어집니다. */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
