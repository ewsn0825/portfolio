import kurlyhtml from "@/assets/project/kurlyHtml.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function ProjectKurlyHtml() {
  return (
    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                멋쟁이 사자처럼 첫번째 프로젝트
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                마켓컬리 HTML
              </h2>
              <span>2023.06.24 - 2023.06.28</span>
              <p className="text-gray-500">
                멋쟁이 사자처럼 프론트엔드 스쿨 첫번째 프로젝트로 진행했던
                마켓컬리 클론코딩입니다. <br /> HTML, CSS, SASS를 사용하여 만든
                정적 웹페이지입니다. 웹 접근성을 신경써서 구현하였습니다.
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
                      "https://github.com/bigCoDult/proect0_highKality")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={kurlyhtml}
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
                      HTML
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      CSS
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      SASS
                    </li>
                  </ul>
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  프로젝트 설명
                  <br />
                  <p className="mt-3 text-gray-700 font-neo">
                    HTML, CSS, SASS를 사용하여 정적 웹 페이지를 구현했습니다. 웹
                    접근성을 준수하려고 노력하였고, 시맨틱 마크업을
                    지향하였습니다.
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
                    - 정해진 형식에 맞지 않은 아이디 또는 중복된 아이디는 유효성
                    검사를 하여 사용하지 못함
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  로그인 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 로그인 시 JWT 토큰 발급, 아이디 또는 비밀번호 불일치 시
                    toast를 띄워줌
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  장바구니 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 마이페이지에 들어가서 프로필 수정 버튼 누르면 회원가입 시
                    등록했던 프로정 정보 수정 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  메인 페이지
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 마이페이지에 들어가서 회원탈퇴 버튼을 누르면 한번 확인 후
                    회원 탈퇴됨
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  상품 페이지 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 원하는 카테고리 게시판을 가서 글쓰기 버튼을 누르면 게시글
                    등록 가능, 등록 이후 수정 또는 삭제가 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  상품 상세 페이지 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 게시글 상세 페이지에 접근을 하면 댓글을 등록할 수 있고,
                    댓글 록 등록 이후 수정 또는 삭제가 가능
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
                  이미지가 안보인다..
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      img 태그를 사용하고 src 속성을 사용하여 이미지 상대 경로를
                      넣어줬는데{" "}
                      <span className="text-red-400">이미지가 안보이는</span>{" "}
                      문제가 있었습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      상대 경로 대신에{" "}
                      <span className="text-blue-400">절대 경로</span>를
                      사용하였더니 해결되었습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      해당 문제는 상대 경로의 경로가 잘못되었거나 이미지의
                      확장자를 기입하지 않아서 생긴 문제였습니다. 절대 경로는
                      주로 다른 서버에 있는 이미지를 가져오는데 사용되고, 상대
                      경로는 index.html이 저장된 위치를 기준으로 경로를 설정할
                      수 있다는 것을 알게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
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
