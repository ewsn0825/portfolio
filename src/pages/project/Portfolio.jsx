import pofol from "@/assets/project/portfolio.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function Portfolio() {
  return (
    // <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
    //   <div className="flex flex-col items-center gap-10">
    //     <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
    //       Jade Portfolio
    //     </h3>
    //     <img
    //       src={pofol}
    //       alt="포트폴리오 이미지"
    //       className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
    //     />
    //     <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px] text-center">
    //       포트폴리오 목적으로 만든 웹사이트입니다.
    //     </p>
    //   </div>

    //   <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         인원 :{" "}
    //       </span>
    //       <span>1인 개인 프로젝트</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         기간 :{" "}
    //       </span>
    //       <span>2024.06 ~ 2024.06</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         주요기능 :{" "}
    //       </span>
    //       <span>인적 사항, 기술 스택, 프로젝트 경험</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         GitHub :{" "}
    //       </span>
    //       <a
    //         href="https://github.com/ewsn0825/portfolio"
    //         className="text-blue-400"
    //       >
    //         https://github.com/ewsn0825/portfolio
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         URL :{" "}
    //       </span>
    //       <a href="https://jadeportfolio.vercel.app" className="text-blue-400">
    //         https://jadeportfolio.vercel.app
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         사용기술 :{" "}
    //       </span>
    //       <span>react-scroll, Tailwindcss</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         Deployment :{" "}
    //       </span>
    //       <span>Vercel</span>
    //     </li>
    //   </ul>
    // </div>

    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                포트폴리오
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                Jade Portfolio
              </h2>
              <span>2024.05 - 2024.06</span>
              <p className="text-gray-500">
                저의 인적사항 및 기술스택, 그동안 해온 프로젝트들을 정리하기
                위해 만든 웹 사이트입니다. <br />
                반응형으로 제작하였고 디자인은 심플하게 구현하였습니다.
              </p>
              <div className="flex mobile:flex-col tablet:flex-row gap-5 mt-5">
                <button
                  className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-4 hover:border-gray-500 hover:text-gray-500"
                  onClick={() =>
                    (window.location.href = "https://jadeportfolio.vercel.app")
                  }
                >
                  웹 페이지 바로가기
                </button>
                <button
                  className="text-white bg-[#121212] px-10 py-4 rounded-full hover:opacity-80"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ewsn0825/portfolio")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={pofol}
                alt="포트폴리오 이미지"
                className="rounded-2xl h-[350px] mobile:w-full top-1/2 left-1/2 shadow"
              />
            </div>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col gap-10 mobile:gap-20 mt-10 pb-20">
            <div className="flex-[0.5]">
              <h3 className="font-neoExBold text-2xl mb-5">📢 프로젝트 소개</h3>
              <div className="tablet:ml-10 flex flex-col gap-4 font-neoBold">
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  개인 프로젝트
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  사용기술 <br />
                  <ul className="flex flex-wrap gap-2 text-gray-500 mt-3 pb-5 mobile:font-neo tablet:text-sm mobile:text-[13px]">
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      react
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      react-scroll
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      RWD
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      vercel
                    </li>
                  </ul>
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  프로젝트 설명
                  <br />
                  <p className="mt-3 text-gray-700 font-neo">
                    반응형 웹 디자인을 하여서 여러 디바이스에서 사용 가능하도록
                    제작하였으며,
                    <br /> react-scroll을 사용하여 원하는 페이지에 쉽게 접근
                    가능하도록 구현하였습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.5] flex flex-col">
              <h3 className="font-neoExBold text-2xl mb-5">🎯 기능 설명</h3>
              <ul className="tablet:ml-10 flex flex-col gap-8 tablet:font-neoBold tablet:text-lg mobile:text-base">
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  About <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 저의 인적사항이 적혀있는 페이지입니다.
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  Experience <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 제가 그동안 했던 경험이 적혀있는 페이지입니다.
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  Skills
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 저의 기술 스택이 적혀있는 페이지입니다.
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  Projects
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 제가 지금까지 해왔던 프로젝트들이 정리되어있는
                    페이지입니다. 원하는 프로젝트를 누르면 디테일 페이지로
                    이동하며 프로젝트에 대한 내용을 상세하게 보실 수 있습니다.
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  Contact <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 저의 개인 SNS 링크들과 github 링크를 달아 놓은
                    페이지입니다.
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
                  nav 바를 사용해서 원하는 위치에 접근해볼까?
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      CSS를 사용하여 nav 바에서 원하는 페이지 이름을 클릭하면
                      해당 페이지로 이동하게 해보았지만 반응형으로{" "}
                      <span className="text-red-400">
                        레이아웃의 크기가 바뀔 때 마다 설정을 해주어야 하는
                        불편함
                      </span>
                      이 있었습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      해결방법을 찾아보고{" "}
                      <span className="text-blue-400">react-scroll</span>{" "}
                      라이브러리를 사용하며 쉽게 해결할 수 있었습니다. Element와
                      Link를 사용하여 레이아웃이 바뀌어도 원하는 위치에 알맞게
                      이동하는 것을 확인하였습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      react-scroll이라는 라이브러리를 처음 알게되었고, 이를
                      사용해보며 애니메이션이 있는 스크롤링을 편하게 할 수
                      있어서 좋았습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
}

export default Portfolio;
