import devmate from "@/assets/project/devmate.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function DevMate() {
  return (
    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                개발자 커뮤니티 사이트
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                DevMate
              </h2>
              <span>2024.05 - 2024.06</span>
              <p className="text-gray-500">
                개발자들을 위한 커뮤니티 사이트 devMate입니다. <br /> 정보
                공유와 커뮤니티 기능을 중점으로 만들었습니다. <br /> Figma를
                사용해서 반응형 웹 디자인을 하였으며 리팩토링 과정을 통해
                재사용성을 높혔고, 성능최적화를 진행하였습니다.
              </p>
              <div className="flex mobile:flex-col tablet:flex-row gap-5 mt-5">
                <button
                  className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-4 hover:border-gray-500 hover:text-gray-500"
                  onClick={() =>
                    (window.location.href = "https://devmate-fe.vercel.app")
                  }
                >
                  웹 페이지 바로가기
                </button>
                <button
                  className="text-white bg-[#121212] px-10 py-4 rounded-full hover:opacity-80"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/minsik2434/DevMateFE")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={devmate}
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
                  2인 프로젝트
                </div>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  사용기술 <br />
                  <ul className="flex flex-wrap gap-2 text-gray-500 mt-3 pb-5 mobile:font-neo tablet:text-sm mobile:text-[13px]">
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      react
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      restful API
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      zustand
                    </li>
                    <li className="tablet:px-4 py-1 border mobile:px-3 border-gray-300 rounded-2xl">
                      figma
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
                    기획부터 Figma 디자인 툴을 사용한 디자인까지 처음부터
                    진행하여 구현한 웹 사이트입니다. <br />
                    반응형 웹 디자인을 하여서 여러 디바이스에서 사용 가능하도록
                    제작하였으며,
                    <br /> 성능 최적화를 통해 웹 페이지의 성능을 유의미하게
                    향상시켰습니다.
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
                  성능이 너무 낮아!!!
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      무거운 웹 사이트가 아닌데도 불구하고 lighthouse로 성능
                      검사를 해봤을 때{" "}
                      <span className="text-red-400">성능 점수가 낮게</span>{" "}
                      나오는 것을 확인했습니다. 원인을 찾아보니 사용중인
                      페이지가 아닌 페이지들의 js 파일까지 불러오는 것을
                      확인하였습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      리액트는 Webpack과 같은 번들링 도구를 사용하여 번들된
                      파일을 갖게되는데 웹의 크기가 커짐에 따라 번들도 커지기
                      때문에 번들된 파일을 불러오는데 로드시간이 오래 걸리는
                      문제가 발생합니다. 따라서
                      <span className="text-blue-400"> 코드 스플리팅</span>을
                      하여 큰 번들을 작은 번들로 나누어 런타임시 동적으로 로드할
                      수 있는 여러 번들을 만들도록 하였습니다.{" "}
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      코드 스플리팅을 진행하여 웹의 성능을 높일 수 있다는 점을
                      알게 되었습니다. 또한 vercel로 배포 전 vite의 build
                      명령어를 사용해 gzip 형식으로 압축한 뒤 배포를 하면 성능이
                      훨씬 좋아진다는 것을 알게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  반복되는 페이지가 많은데???
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      초기에{" "}
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
  );
}

export default DevMate;
