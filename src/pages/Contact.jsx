import github from "@/assets/icon/github.png";
import instagram from "@/assets/icon/instagram.png";

function Contact() {
  return (
    <footer
      id="contact"
      // ✨ 배경색을 전체 테마와 통일 (#050505)
      className="w-full bg-[#050505] border-t border-gray-800"
    >
      {/* ✨ 약속한 공통 레이아웃 컨테이너: 1200px 고정, 좌우 여백 통일 */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 flex flex-col items-center gap-12">
        {/* 타이틀 영역 */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-gm text-4xl font-bold text-white tracking-wider">
            Contact<span className="text-cyan-500">.</span>
          </h2>
          <p className="text-gray-400 font-neo text-sm">
            더 많은 이야기와 코드는 아래 링크에서 확인하실 수 있습니다.
          </p>
        </div>

        {/* 소셜 링크 영역 */}
        <ul className="flex items-center justify-center gap-6 md:gap-10">
          {/* 깃허브 버튼 */}
          <li>
            <a
              href="https://github.com/ewsn0825"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group"
            >
              <img
                src={github}
                alt="깃허브 바로가기"
                className="w-10 h-10 invert opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              />
            </a>
          </li>

          {/* 인스타그램 버튼 */}
          <li>
            <a
              href="https://www.instagram.com/jaeho_jms"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group"
            >
              <img
                src={instagram}
                alt="인스타그램 바로가기"
                className="w-10 h-10 invert opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              />
            </a>
          </li>
        </ul>

        {/* 카피라이트 */}
        <span className="text-gray-500 font-neo text-sm tracking-wide mt-4">
          &copy; 2026. Largon. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Contact;
