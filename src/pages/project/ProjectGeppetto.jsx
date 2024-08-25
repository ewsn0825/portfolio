import geppetto from "@/assets/project/geppetto.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function ProjectGeppetto() {
  return (
    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                멋쟁이 사자처럼 세번째 프로젝트
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                geppetto
              </h2>
              <span>2023.09.02 - 2023.09.24</span>
              <p className="text-gray-500">
                펫 커뮤니티 사이트 제페토입니다. 기획부터 디자인 구현까지
                팀원들과 처음부터 진행하였고, 데스크탑 뷰에서만 구현하였습니다.
                코딩 컨벤션과 커밋 컨벤션을 정하고 github 프로젝트를 활용해
                일정관리를 하였습니다.
              </p>
              <div className="flex mobile:flex-col tablet:flex-row gap-5 mt-5">
                <button
                  className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-4 hover:border-gray-500 hover:text-gray-500"
                  onClick={() =>
                    (window.location.href = "https://geppetto88.netlify.app")
                  }
                >
                  웹 페이지 바로가기
                </button>
                <button
                  className="text-white bg-[#121212] px-10 py-4 rounded-full hover:opacity-80"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={geppetto}
                alt="데브메이트 이미지"
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
                      react
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      zustand
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      figma
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      tailwind
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      pocketbase
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      netlify
                    </li>
                  </ul>
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  프로젝트 설명
                  <br />
                  <p className="mt-3 text-gray-700 font-neo">
                    처음 react를 사용하여 만든 웹 페이지입니다. 최대한
                    아토믹하게 컴포넌트 분리를 하려고 노력하였고, 포켓베이스를
                    사용하여 백엔드 환경을 구현해 프로젝트를 진행하였습니다.
                    netlify를 사용하여 간단하게 배포까지 진행해보았습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.5] flex flex-col">
              <h3 className="font-neoExBold text-2xl mb-5">🎯 기능 설명</h3>
              <ul className="tablet:ml-10 flex flex-col gap-8 tablet:font-neoBold tablet:text-lg mobile:text-base">
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  회원가입 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 정해진 형식에 맞지 않은 아이디 또는 중복된 아이디는 유효성
                    검사를 하여 사용하지 못함
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  로그인 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 로그인 시 JWT 토큰 발급, 아이디 또는 비밀번호 불일치 시
                    toast를 띄워줌
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  프로필 수정
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 마이페이지에 들어가서 프로필 수정 버튼 누르면 회원가입 시
                    등록했던 프로정 정보 수정 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  회원 탈퇴
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 마이페이지에 들어가서 회원탈퇴 버튼을 누르면 한번 확인 후
                    회원 탈퇴됨
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  게시글 등록, 수정, 삭제 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 원하는 카테고리 게시판을 가서 글쓰기 버튼을 누르면 게시글
                    등록 가능, 등록 이후 수정 또는 삭제가 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  댓글 등록, 수정, 삭제 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 게시글 상세 페이지에 접근을 하면 댓글을 등록할 수 있고,
                    댓글 록 등록 이후 수정 또는 삭제가 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  게시글 좋아요 기능 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 사용자가 본 게시글이 마음에 든다면 하트 버튼을 눌러 좋아요
                    기능 사용가능
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
                  상태가 변경될 때마다 리랜더링이 된다?
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      회원가입에서 유효성 검사를 진행하기 위해 input 창에
                      텍스트가 바뀔 때 상태에 데이터를 저장해 사용했는데{" "}
                      <span className="text-red-400">
                        텍스트를 입력할 때 마다 랜더링이 발생
                      </span>
                      하였습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      리액트에서는 상태가 변경될 때마다 랜더링을 하게되는데
                      input 태그에 value 속성으로 상태가 연결되어 있어서 변경이
                      있을 때마다 랜더링을 하는 구조입니다. 해결방법을 찾아보니
                      <span className="text-blue-400">디바운싱</span>을 하면
                      일정 시간을 기준으로 입력이 끝났을 때 한번만 랜더링이
                      된다는 것을 활용하여 해결하였습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      반복되는 이벤트를 처리하는 기법으로 디바운싱을 알게
                      되었습니다. 비슷한 기법으로 쓰로틀링(throttling)이 있는데
                      디바운싱은 이벤트가 계속 발생할 때 맨 마지막 이벤트만
                      발생하도록 하는 것입니다. 따라서 input에 입력하는 행위를
                      할때는 디바운싱이 적합합니다. 쓰로틀링은 이벤트가 발생하는
                      주기를 정하고 주기를 벗어나면 그동안은 이벤트가 일어나지
                      않는 것입니다. 쓰로틀링은 무한스크롤과 같은 행위를 할때
                      적합합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  원하는 이미지를 포켓베이스에 저장하고 싶어!!
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      input 태그의 type="file" 속성을 사용해
                      <span className="text-red-400">
                        디자인이 비슷한 페이지들을 반복적으로 만들었는데
                      </span>{" "}
                      너무 비효율적이라고 판단 하였습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      재사용성을 높이기 위해서{" "}
                      <span className="text-blue-400">리팩토링</span>을 하여
                      비슷한 디자인을 가진 페이지들은 하나의 페이지 컴포넌트를
                      사용하며 원하는 path 경로일 때 알맞는 props를 넘겨서
                      불필요한 페이지를 반복적으로 만드는 일을 방지하였습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      리팩토링 과정을 진행한 뒤, 컴포넌트를 알맞게 변환하여
                      재사용성을 높였습니다. 이렇게 하니 유지보수 측면에서
                      효율성이 매우 높아지는 것을 알 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  간편 로그인을 해볼까??
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      input 태그의 type="file" 속성을 사용해
                      <span className="text-red-400">
                        디자인이 비슷한 페이지들을 반복적으로 만들었는데
                      </span>{" "}
                      너무 비효율적이라고 판단 하였습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      재사용성을 높이기 위해서{" "}
                      <span className="text-blue-400">리팩토링</span>을 하여
                      비슷한 디자인을 가진 페이지들은 하나의 페이지 컴포넌트를
                      사용하며 원하는 path 경로일 때 알맞는 props를 넘겨서
                      불필요한 페이지를 반복적으로 만드는 일을 방지하였습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      리팩토링 과정을 진행한 뒤, 컴포넌트를 알맞게 변환하여
                      재사용성을 높였습니다. 이렇게 하니 유지보수 측면에서
                      효율성이 매우 높아지는 것을 알 수 있었습니다.
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
    //     <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">제페토</h3>
    //     <img src={geppetto} alt="제페토 이미지" className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]" />
    //     <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //       멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 리액트 프로젝트를 진행하기
    //       위해 만든 펫 커뮤니티 웹사이트 제페토 입니다. 프로젝트를 진행하며
    //       기획부터 디자인, 구현까지 모든 과정을 진행하였습니다. Zustand
    //       라이브러리를 사용하여 처음으로 전역 상태 관리를 해보았고, 이를 통해
    //       기존 useState로 상태를 관리하며 props 또는 react context를 통해 상태를
    //       전달하는 방식과 비교해 볼 수 있었다는 점이 좋았습니다. 또한
    //       pocketbase의 기능 중 하나인 OAuth 2.0 인증을 하여 구글, 카카오
    //       계정으로 로그인을 할 수 있도록 구현하였습니다.
    //     </p>
    //   </div>

    //   <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         인원 :{" "}
    //       </span>
    //       <span>4인 팀 프로젝트 (FE 4명)</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         기간 :{" "}
    //       </span>
    //       <span>2023.09</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         주요기능 :{" "}
    //       </span>
    //       <span>
    //         회원가입, 로그인 (OAuth 2.0), 커뮤티니 (글 생성, 수정, 삭제 ,인기순
    //         최신순 정렬), 댓글 (등록, 수정, 삭제)
    //       </span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         GitHub :{" "}
    //       </span>
    //       <a
    //         href="https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite"
    //         className="text-blue-400"
    //       >
    //         https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         URL :{" "}
    //       </span>
    //       <a href="https://geppetto88.netlify.app" className="text-blue-400">
    //         https://geppetto88.netlify.app
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         사용기술 :{" "}
    //       </span>
    //       <span>Pocketbase, Swiper, Zustand, Tailwindcss</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         Deployment :{" "}
    //       </span>
    //       <span>Netlify</span>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default ProjectGeppetto;
