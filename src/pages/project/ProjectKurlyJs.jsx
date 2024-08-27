import kurlyjs from "@/assets/project/kurlyJs.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function ProjectKurlyJs() {
  return (
    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                멋쟁이 사자처럼 두번째 프로젝트
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                마켓컬리 JS
              </h2>
              <span>2023.07.28 - 2022.08.02</span>
              <p className="text-gray-500">
                이전 구현했던 정적 마켓컬리 웹 페이지를 JS를 사용하여 구현한
                동적 웹 페이지 입니다. Swiper 및 gsap 라이브러리를 사용해서
                애니메이션과 슬라이드 처리를 하였습니다.
              </p>
              <div className="flex mobile:flex-col tablet:flex-row gap-5 mt-5">
                {/* <button
                  className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-4 hover:border-gray-500 hover:text-gray-500"
                  onClick={() =>
                    (window.location.href = "https://devmate-fe.vercel.app")
                  }
                >
                  웹 페이지 바로가기
                </button> */}
                <button
                  className="text-white bg-[#121212] px-10 py-4 rounded-full hover:opacity-80"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/FE-6-vanilla-JS-5/vanillaJS__marketKarly/tree/develop")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={kurlyjs}
                alt="마켓컬리 이미지"
                className="rounded-2xl h-[350px] mobile:w-full top-1/2 left-1/2 shadow"
              />
            </div>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col gap-10 mobile:gap-20 mt-10 pb-20">
            <div className="flex-[0.5]">
              <h3 className="font-neoExBold text-2xl mb-5">📢 프로젝트 소개</h3>
              <div className="tablet:ml-10 flex flex-col gap-4 font-neoBold">
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  4인 프로젝트
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  사용기술 <br />
                  <ul className="flex flex-wrap gap-2 text-gray-500 mt-3 pb-5 mobile:font-neo tablet:text-sm mobile:text-[13px]">
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      html
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      css
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      sass
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      js
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      swiper
                    </li>
                  </ul>
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  프로젝트 설명
                  <br />
                  <p className="mt-3 text-gray-700 font-neo">
                    JS를 활용하여 동적 웹 페이지를 구현하였습니다. 각각 기능에
                    필요한 util 함수들을 분리하였고, gsap 라이브러리를 사용하여
                    애니메이션 처리를 하였으며 swiper를 사용해서 슬라이드 처리를
                    진행하였습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.5] flex flex-col">
              <h3 className="font-neoExBold text-2xl mb-5">🎯 기능 설명</h3>
              <ul className="tablet:ml-10 flex flex-col gap-8 tablet:font-neoBold tablet:text-lg mobile:text-base">
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  회원가입 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 유효성 검사를 진행하여 사용자가 알맞지 않은 형식의
                    데이터를 입력 시 alert를 이용해 결과 출력
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  로그인 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 아이디 비밀번호 일치 또는 불일치 시 콘솔에 알맞은 텍스트
                    출력
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  상품 리스트 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 드롭다운 애니메이션 및 페이지네이션 기능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  상품 상세 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - localStorage를 사용하여 상품 정보 저장 기능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  장바구니 페이지 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 저장된 상품 정보 삭제 기능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  메인 페이지 (본인 제작)
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 팝업창 생성 및 애니메이션 사용한 닫기 기능 <br />- 배너 및
                    상품 리스트 슬라이드 기능
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Element>
        <Element name="Problem & Solution">
          <div className="mt-20 mb-36">
            <h3 className="font-neoExBold text-2xl mb-5">💥 트러블 슈팅</h3>
            <div className="grid tablet:grid-cols-2 gap-10 pt-4 ">
              <div className="bg-gray-50">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  애니메이션을 효율적으로 사용하고 싶어!!
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      동적 웹 페이지를 제작하며 그동안 CSS를 사용하여
                      애니메이션을 구현하면서{" "}
                      <span className="text-red-400">효율적이지 않다고</span>{" "}
                      판단해 쉽게 애니메이션을 적용할 수 있는 방법을
                      모색해보았습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      찾아보니 여러 애니메이션 라이브러리들을 찾을 수 있었고 그
                      중 <span className="text-blue-400">gsap</span>이라는
                      애니메이션 라이브러리를 활용해 원하는 기능을 함수로 만들어
                      css style에서 애니메이션을 분리하여 사용할 수 있었습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      그동안 css로만 애니메이션을 만들어왔는데 다양한 애니메이션
                      라이브러리 들을 알게 되었고, 그 중 gsap을 사용해보며
                      원하는 기능을 쉽게 함수로 만들어 필요한 경우 가져다 쓸 수
                      있어서 좋았습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  Swiper 이전, 다음 버튼을 커스텀 할 수 있을까??
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      Swiper를 사용해 슬라이드를 구현하였는데 디폴드로 구성된
                      슬라이드와 이전, 다음 버튼은{" "}
                      <span className="text-red-400">
                        사용자가 사용하기 불편하게
                      </span>{" "}
                      구성되어 있었습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      해결방법을 찾아보니 swiper 이전, 다음 버튼에{" "}
                      <span className="text-blue-400">style 속성을 추가</span>
                      하여 button 태그처럼 커스텀이 가능하다는 것을
                      알게되었습니다. 이를 활용해 슬라이드 페이지 수와 슬라이드
                      시작과 끝에는 이전 또는 다음 버튼을 안보이게 하는 등
                      사용자 편의성을 높혔습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      Swiper라는 라이브러리를 알게 되었고 이를 사용해 쉽게
                      슬라이드를 구성할 수 있다는 점이 좋았습니다. 또한 css를
                      활용하여 swiper 슬라이드와 버튼을 알맞게 커스텀 할 수
                      있다는 점이 유용했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
    // <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
    //   <div className="flex flex-col items-center gap-10">
    //     <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
    //       마켓컬리 클론코딩 - JS
    //     </h3>
    //     <img
    //       src={kurlyjs}
    //       alt="마켓컬리 클론코딩 js 이미지"
    //       className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
    //     />
    //     <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //       멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 JS 파트를 배우고 진행한
    //       프로젝트입니다. 이전 진행한 마켓컬리 클론코딩 프로젝트에 JavaScript를
    //       사용하여 웹페이지를 동적으로 구현하였습니다. 동적 기능들에 필요한 util
    //       함수들을 만들어보며 JavaScript와 DOM (Document Object Model) 구조에
    //       대해 이해할 수 있었습니다. 또한 Gsap을 사용해보며 애니메이션
    //       라이브러리에 익숙해지는 기회가 되었습니다.
    //     </p>
    //   </div>

    //   <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         인원 :{" "}
    //       </span>
    //       <span>4인 팀 프로젝트</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         기간 :{" "}
    //       </span>
    //       <span>2023.07</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         주요기능 :{" "}
    //       </span>
    //       <span>
    //         회원가입 Validation, SwiperSlide, ajax 비동기 통신을 통한 페이징
    //         넘버링, 장바구니 기능
    //       </span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         GitHub :{" "}
    //       </span>
    //       <a
    //         href="https://github.com/FE-6-vanilla-JS-5/vanillaJS__marketKarly/tree/develop"
    //         className="text-blue-400"
    //       >
    //         https://github.com/FE-6-vanilla-JS-5/vanillaJS__marketKarly/tree/develop
    //       </a>
    //     </li>

    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         사용기술 :{" "}
    //       </span>
    //       <span>html, css, js</span>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default ProjectKurlyJs;
