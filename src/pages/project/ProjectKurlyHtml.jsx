import kurlyhtml from "@/assets/project/kurlyHtml.png";

function ProjectKurlyHtml() {
  return (
    <div className="font-neo desktop:px-28 desktop:py-10">
      <div className="flex pb-14 mt-20 border-b gap-10 border-gray-200">
        <div className="flex-[0.5] flex flex-col gap-6">
          <p className="text-3.5xl text-gray-600">
            멋쟁이 사자처럼 첫번째 프로젝트
          </p>
          <h2 className="font-neoExBold text-5xl">마켓컬리 HTML</h2>
          <span>2023.06 - 2023.06</span>
          <p className="text-gray-500">
            마켓컬리 클론코딩 웹 사이트입니다. <br /> HTML과 CSS, SASS를 사용한
            정적 웹 사이트를 제작하였습니다. <br />웹 접근성을 준수하였습니다.
          </p>

          <div className="flex gap-5">
            {/* <button
              className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-5 hover:border-gray-500 hover:text-gray-500"
              // onClick={() =>
              //   (window.location.href =
              //     "testurl")
              // }
            >
              웹 페이지 바로가기
            </button> */}
            <button
              className="text-white bg-[#121212] px-10 py-5 rounded-full hover:opacity-80"
              onClick={() =>
                (window.location.href =
                  "https://github.com/bigCoDult/proect0_highKality")
              }
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="flex-[0.5] flex justify-end items-center">
          <img
            src={kurlyhtml}
            alt="컬리 HTML 이미지"
            className="rounded-2xl h-[350px] top-1/2 left-1/2"
          />
        </div>
      </div>

      <div className="flex mt-10 pb-20">
        <div className="flex-[0.5]">
          <h3 className="font-neoExBold text-2xl mb-5">📢프로젝트 소개</h3>
          <ul className="ml-10 flex flex-col gap-4 font-neoBold">
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              팀 프로젝트 (4인)
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              사용기술 <br />
              <div className="flex flex-wrap gap-2 text-gray-500 mt-3 pb-5">
                <span className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  html
                </span>
                <span className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  css
                </span>
                <span className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  sass
                </span>
              </div>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              프로젝트 설명
              <br />
              <p className="mt-3 text-gray-700 font-neo">멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 Html, css 파트를 배우고
                진행한 프로젝트이며, 마켓컬리 웹사이트를 클론코딩 해보았습니다.
                프로젝트를 진행하며 시맨틱 마크업을 지향하였습니다. 처음 SASS를
                사용해보았고, Mixin을 활용하여 디자인을 해보며 Postcss에 대해
                알아갈 수 있어서 좋았습니다.</p>
            </li>
          </ul>
        </div>
        <div className="flex-[0.5] flex flex-col">
          <h3 className="font-neoExBold text-2xl mb-5">🎯페이지 설명</h3>
          <ul className="ml-10 flex flex-col gap-4 font-neoBold">
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              Main <br /><p></p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              ddd
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              프로젝트 설명
              <br />
              <p>
                
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-neoExBold text-2xl mb-5">💥 트러블 슈팅</h3>
        <div>
          <div>
            <span>문제</span>
            <div>문제발생</div>
            <div>해결방법</div>
            <div>알게된 점</div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-white rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
    //   <div className="flex flex-col items-center gap-10">
    //     <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
    //       마켓컬리 클론코딩 - 마크업
    //     </h3>
    //     <img
    //       src={kurlyhtml}
    //       alt="마켓컬리 마크업 프로젝트 이미지"
    //       className=""
    //     />
    //     <p className="desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //       멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 Html, css 파트를 배우고 진행한
    //       프로젝트이며 마켓컬리 웹사이트를 클론코딩 해보았습니다. 프로젝트를
    //       진행하며 시맨틱 마크업을 지향하였습니다. 처음 Scss를 사용해보았고
    //       Mixin을 활용하여 디자인을 해보며 Postcss에 대해 알아갈 수 있어서
    //       좋았습니다.
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
    //       <span>2023.06 ~ 2023.06</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         주요기능 :{" "}
    //       </span>
    //       <span>
    //         Main, Register, login, Product-List, Product-Detail 마크업 페이지
    //       </span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         GitHub :{" "}
    //       </span>
    //       <a
    //         href="https://github.com/bigCoDult/proect0_highKality"
    //         className="text-blue-400"
    //       >
    //         https://github.com/bigCoDult/proect0_highKality
    //       </a>
    //     </li>

    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         사용기술 :{" "}
    //       </span>
    //       <span>HTML, CSS, SCSS</span>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default ProjectKurlyHtml;
