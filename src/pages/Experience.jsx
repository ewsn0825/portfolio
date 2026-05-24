// lucide-react에서 달력과 체크 아이콘을 가져옵니다.
import { Calendar, CheckCircle2 } from "lucide-react";

function Experience() {
  return (
    <section className="w-full py-24 text-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold font-gm tracking-tight">
            Experience<span className="text-cyan-500">.</span>
          </h2>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-4">
          {/* 1. 씨니테크 경력 수정 */}
          <div className="mb-10 ml-8 md:ml-10 relative group">
            <span className="absolute -left-[41px] md:-left-[49px] flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></span>
            <div className="bg-gray-900/40 border border-gray-800/50 p-6 md:p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  씨니테크{" "}
                  <span className="text-gray-400 text-lg font-normal">
                    | IT투자금융전략팀
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-cyan-400 text-sm md:text-base font-medium bg-cyan-950/30 px-3 py-1.5 rounded-full w-fit shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>2025.03 ~ 2025.09</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                농협은행 신탁자산운용 플랫폼 전화를 위한 프로젝트에
                참여하였습니다. 넥사크로 플랫폼을 사용한 화면 개발을 수행했으며,
                크로닉스 리포트(Cronix Report)를 활용하여 데이터를 시각화하고
                보고서를 생성하였습니다. 특히, Oracle 환경에서 쿼리를 관리하고{" "}
                <strong>
                  단위 및 통합 테스트를 직접 수행하며 금융 데이터의 정합성과
                  시스템의 안정성을 검증하는 과정
                </strong>
                을 경험했습니다.
              </p>

              <ul className="flex flex-wrap gap-3">
                {["Nexacro", "Oracle", "Cronix Report", "단위/통합 테스트"].map(
                  (tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-1.5 text-sm text-gray-300 bg-gray-800/60 border border-gray-700/50 px-3 py-1.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                      {tech}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* 2. 기존 프론트엔드 스쿨 수료 */}
          <div className="mb-10 ml-8 md:ml-10 relative group">
            <span className="absolute -left-[41px] md:-left-[49px] flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></span>
            <div className="bg-gray-900/40 border border-gray-800/50 p-6 md:p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  멋쟁이 사자처럼 프론트엔드 스쿨 수료
                </h3>
                <div className="flex items-center gap-2 text-cyan-400 text-sm md:text-base font-medium bg-cyan-950/30 px-3 py-1.5 rounded-full w-fit shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>2023.05 ~ 2023.09</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                집중적인 프론트엔드 개발 교육 과정을 통해 웹 개발의 기반을
                다지고 실무 역량을 키웠습니다.
              </p>
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
        </div>
      </div>
    </section>
  );
}

export default Experience;
