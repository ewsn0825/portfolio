import kurlyjs from "@/assets/project/kurlyJs.png";

function ProjectKurlyJs() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
          마켓컬리 클론코딩 - JS
        </h3>
        <img
          src={kurlyjs}
          alt="마켓컬리 클론코딩 js 이미지"
          className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
        />
        <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
          멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 JS 파트를 배우고 진행한
          프로젝트입니다. 이전 진행한 마켓컬리 클론코딩 프로젝트에 JavaScript를
          사용하여 웹페이지를 동적으로 구현하였습니다. 동적 기능들에 필요한 util
          함수들을 만들어보며 JavaScript와 DOM (Document Object Model) 구조에
          대해 이해할 수 있었습니다. 또한 Gsap을 사용해보며 애니메이션
          라이브러리에 익숙해지는 기회가 되었습니다.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            인원 :{" "}
          </span>
          <span>4인 팀 프로젝트</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            기간 :{" "}
          </span>
          <span>2023.07</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            주요기능 :{" "}
          </span>
          <span>
            회원가입 Validation, SwiperSlide, ajax 비동기 통신을 통한 페이징
            넘버링, 장바구니 기능
          </span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            GitHub :{" "}
          </span>
          <a
            href="https://github.com/FE-6-vanilla-JS-5/vanillaJS__marketKarly/tree/develop"
            className="text-blue-400"
          >
            https://github.com/FE-6-vanilla-JS-5/vanillaJS__marketKarly/tree/develop
          </a>
        </li>

        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            사용기술 :{" "}
          </span>
          <span>html, css, js</span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectKurlyJs;
