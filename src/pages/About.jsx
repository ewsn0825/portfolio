import profile from "@/assets/profile.webp";
// 터미널에서 npm install lucide-react 를 입력하여 아이콘 라이브러리를 설치해 주세요.
import { User, Calendar, MapPin, GraduationCap, Mail } from "lucide-react";

function About() {
  return (
    // ✨ 1. 전체를 감싸는 section 태그 추가 (상하 여백 py-24 지정)
    <section className="w-full py-24 text-white">
      {/* ✨ 2. 약속한 공통 레이아웃 컨테이너: 1200px 고정, 좌우 여백 통일 */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-bold font-gm tracking-tight">
            About<span className="text-cyan-500">.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          {/* Profile Image Section */}
          <div className="shrink-0 group">
            <div className="relative">
              {/* 사진 뒤에 깔리는 은은한 네온 효과 */}
              <div className="absolute -inset-1 bg-cyan-500/20 blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={profile}
                alt="이재호 프로필"
                className="relative w-56 md:w-64 rounded-2xl object-cover shadow-2xl border border-gray-700/50 
                          grayscale opacity-90 transition-all duration-500 
                          group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Info Content Section */}
          <div className="flex-1 w-full">
            {/* Short Bio */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
                효율을 추구하며 묵묵히 나아가는 개발자,{" "}
                <br className="hidden md:block" />
                <span className="text-cyan-400">Largon 이재호</span>입니다.
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                불필요한 과정을 덜어내는 효율성(Argon)과 조급해하지 않고 꾸준히
                나아가는 템포(Largo)를 지향합니다. 사용자에게 매끄러운 디지털
                경험을 제공하기 위해 최적의 코드를 고민하며 끝없이 성장하고
                있습니다.
              </p>
            </div>

            {/* Info Grid */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-gray-300">
              <li className="flex items-center gap-4 bg-gray-900/40 border border-gray-800/50 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                <User className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                <span className="font-medium">이재호</span>
              </li>
              <li className="flex items-center gap-4 bg-gray-900/40 border border-gray-800/50 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                <Calendar className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                <span className="font-medium">1999. 08. 25</span>
              </li>
              <li className="flex items-center gap-4 bg-gray-900/40 border border-gray-800/50 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                <span className="font-medium">경기도 수원시 권선구</span>
              </li>
              <li className="flex items-center gap-4 bg-gray-900/40 border border-gray-800/50 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                <GraduationCap
                  className="w-5 h-5 text-cyan-400"
                  strokeWidth={2}
                />
                <span className="font-medium">한신대학교 컴퓨터공학부</span>
              </li>
              <li className="flex items-center gap-4 bg-gray-900/40 border border-gray-800/50 p-4 rounded-xl hover:bg-gray-800/50 transition-colors md:col-span-2">
                <Mail className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                <a
                  href="mailto:ewsn0825@naver.com"
                  className="font-medium hover:text-white transition-colors"
                >
                  ewsn0825@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
