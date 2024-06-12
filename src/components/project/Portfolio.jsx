import pofol from "@/assets/project/portfolio.png";

function Portfolio() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
          Jade Portfolio
        </h3>
        <img
          src={pofol}
          alt="포트폴리오 이미지"
          className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
        />
        <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px] text-center">
          포트폴리오 목적으로 만든 웹사이트입니다.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            인원 :{" "}
          </span>
          <span>1인 개인 프로젝트</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            기간 :{" "}
          </span>
          <span>2024.06 ~ 2024.06</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            주요기능 :{" "}
          </span>
          <span>인적 사항, 기술 스택, 프로젝트 경험</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            GitHub :{" "}
          </span>
          <a
            href="https://github.com/ewsn0825/portfolio"
            className="text-blue-400"
          >
            https://github.com/ewsn0825/portfolio
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            URL :{" "}
          </span>
          <a href="https://jadeportfolio.vercel.app" className="text-blue-400">
            https://jadeportfolio.vercel.app
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            사용기술 :{" "}
          </span>
          <span>react-scroll, Tailwindcss</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:w-[50px]">
            Deployment :{" "}
          </span>
          <span>Vercel</span>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
