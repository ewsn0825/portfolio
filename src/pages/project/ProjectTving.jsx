import tving from "@/assets/project/tving.png";

function ProjectTving() {
  return (
    <div className="font-neo desktop:px-28 desktop:py-10">
      <div className="flex pb-14 mt-20 border-b gap-10 border-gray-200">
        <div className="flex-[0.5] flex flex-col gap-6">
          <p className="text-3.5xl text-gray-600">클론코딩 프로젝트</p>
          <h2 className="font-neoExBold text-5xl">클론 TVING</h2>
          <span>2023.12 ~ 2024.04</span>
          <p className="text-gray-500">
            OTT 티빙 웹사이트를 클론코딩 한 웹 사이트입니다. <br /> 최대한
            티빙의 기능들을 구현하려고 노력하였으며, 데스크탑 기준으로 마크업을
            구현하였습니다.
          </p>

          <div className="flex gap-5">
            <button
              className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-5 hover:border-gray-500 hover:text-gray-500"
              onClick={() =>
                (window.location.href = "https://clone-tving.vercel.app")
              }
            >
              웹 페이지 바로가기
            </button>
            <button
              className="text-white bg-[#121212] px-10 py-5 rounded-full hover:opacity-80"
              onClick={() =>
                (window.location.href =
                  "https://github.com/hoyeonjigi/CloneTving")
              }
            >
              GitHub
            </button>
          </div>
        </div>
        <div className="flex-[0.5] flex justify-end items-center">
          <img
            src={tving}
            alt="티빙 이미지"
            className="rounded-2xl h-[350px] top-1/2 left-1/2"
          />
        </div>
      </div>

      <div className="flex mt-10 pb-20">
        <div className="flex-[0.5]">
          <h3 className="font-neoExBold text-2xl mb-5">📢 프로젝트 소개</h3>
          <div className="ml-10 flex flex-col gap-4 font-neoBold">
            <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              4인 팀 프로젝트 (BE 2명, FE 2명)
            </div>
            <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              사용기술 <br />
              <ul className="flex flex-wrap gap-2 text-gray-500 mt-3 pb-5">
                <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  react
                </li>
                <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  restful API
                </li>
                <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  zustand
                </li>
                <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  tanstack query
                </li>
                <li className="px-4 py-1 border border-gray-300 rounded-2xl desktop:text-sm">
                  vercel
                </li>
              </ul>
            </div>
            <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              프로젝트 설명
              <br />
              <p className="mt-3 text-gray-700 font-neo">
                OTT 티빙 웹사이트를 학습 목적으로 클론코딩 한 웹 사이트입니다.{" "}
                <br />
                백엔드와 처음으로 협업을 해보았고, 구현된 Restful API를 사용하여
                jwt 방식으로 CRUD 처리를 해보는 과정을 통해 데이터 통신에 대해
                기존에 알고있던 것보다 깊이 이해할 수 있었습니다. 또한 무한
                스크롤 기능을 만들기 위해 Tanstack-query 라이브러리를 활용해볼
                수 있어서 좋았습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[0.5] flex flex-col">
          <h3 className="font-neoExBold text-2xl mb-5">🎯 기능 설명</h3>
          <ul className="ml-10 flex flex-col gap-8 font-neoBold text-lg">
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              회원가입 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - 중복된 아이디는 유효성 검사를 하여 사용하지 못함
              </p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              로그인 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - 로그인 시 JWT 토큰 발급
              </p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              프로필 생성, 수정, 삭제 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - 프로필 이름과 이미지를 선택해 프로필 생성 가능. 그 이후 프로필
                수정, 프로필 삭제 또한 가능
              </p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              컨텐츠 검색 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - 텍스트를 검색창에 입력하면 초성과 일치하는 접근 가능한 컨텐츠
                목록이 보여짐
              </p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              컨텐츠 리뷰 등록, 수정, 삭제 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - 접근한 컨텐츠에 리뷰 모달을 통해 등록, 수정 삭제를 할 수 있음
              </p>
            </li>
            <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
              리뷰 무한 스크롤 <br />
              <p className="text-gray-700 text-base mt-2 font-neo">
                - tanstack query의 infinity query를 사용하여 스크롤이 특정
                위치에 닿으면 다음 페이지의 리뷰 데이터 불러옴
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-neoExBold text-2xl mb-5">💥 트러블 슈팅</h3>
        <div className="grid tablet:grid-cols-2 gap-10 pt-4 ">
          <div className="bg-gray-50">
            <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
              무한 스크롤 데이터 업데이트 안됨
            </div>
            <div className="px-5 py-5 flex flex-col gap-12">
              <div>
                <span>문제발생</span>
                <br />
                <p>
                  특정 위치에 스크롤이 닿으면 다음 페이지의 데이터를 업데이트
                  해줘야 하는데 데이터가 업데이트 되지 않음 음
                </p>
              </div>
              <div>
                <span>해결방법</span>
                <br />
                <p>쿼리를 무효화시키는 방법을 통해 해결</p>
              </div>
              <div>
                {" "}
                <span>알게된 점</span>
                <br />
                <p>
                  리액트 쿼리의 다양한 메소드들을 알게 되었다. 나중에는 캐싱
                  처리를 해볼 예정이다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
              무한 스크롤 데이터 업데이트 안됨
            </div>
            <div className="px-5 py-5 flex flex-col gap-12">
              <div>
                <span>문제발생</span>
                <br />
                <p>
                  특정 위치에 스크롤이 닿으면 다음 페이지의 데이터를 업데이트
                  해줘야 하는데 데이터가 업데이트 되지 않음 음
                </p>
              </div>
              <div>
                <span>해결방법</span>
                <br />
                <p>쿼리를 무효화시키는 방법을 통해 해결</p>
              </div>
              <div>
                {" "}
                <span>알게된 점</span>
                <br />
                <p>
                  리액트 쿼리의 다양한 메소드들을 알게 되었다. 나중에는 캐싱
                  처리를 해볼 예정이다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50">
            <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
              무한 스크롤 데이터 업데이트 안됨
            </div>
            <div className="px-5 py-5 flex flex-col gap-12">
              <div>
                <span>문제발생</span>
                <br />
                <p>
                  특정 위치에 스크롤이 닿으면 다음 페이지의 데이터를 업데이트
                  해줘야 하는데 데이터가 업데이트 되지 않음 음
                </p>
              </div>
              <div>
                <span>해결방법</span>
                <br />
                <p>쿼리를 무효화시키는 방법을 통해 해결</p>
              </div>
              <div>
                {" "}
                <span>알게된 점</span>
                <br />
                <p>
                  리액트 쿼리의 다양한 메소드들을 알게 되었다. 나중에는 캐싱
                  처리를 해볼 예정이다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
    //   <div className="flex flex-col items-center gap-10">
    //     <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
    //       티빙 클론코딩
    //     </h3>
    //     <img
    //       src={tving}
    //       alt="티빙 이미지"
    //       className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
    //     />
    //     <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //       OTT 티빙 웹사이트를 학습 목적으로 클론코딩 한 웹 사이트입니다.
    //       백엔드와 처음으로 협업을 해보았고, 구현된 Restful API를 사용하여 jwt
    //       방식으로 CRUD 처리를 해보는 과정을 통해 데이터 통신에 대해 기존에
    //       알고있던 것보다 깊이 이해할 수 있었습니다. 또한 무한 스크롤 기능을
    //       만들기 위해 Tanstack-query 라이브러리를 활용해볼 수 있어서 좋았습니다.
    //     </p>
    //   </div>

    //   <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         인원 :{" "}
    //       </span>
    //       <span>4인 팀 프로젝트 (BE 2명, FE 2명)</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         기간 :{" "}
    //       </span>
    //       <span>2023.12 ~ 2024.04</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         주요기능 :{" "}
    //       </span>
    //       <span>
    //         회원가입, 로그인, 프로필 (생성, 수정, 삭제), 댓글 (등록, 수정,
    //         삭제), 댓글 무한스크롤
    //       </span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         GitHub :{" "}
    //       </span>
    //       <a
    //         href="https://github.com/hoyeonjigi/CloneTving"
    //         className="text-blue-400"
    //       >
    //         https://github.com/hoyeonjigi/CloneTving
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         URL :{" "}
    //       </span>
    //       <a href="https://clone-tving.vercel.app" className="text-blue-400">
    //         https://clone-tving.vercel.app
    //       </a>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         사용기술 :{" "}
    //       </span>
    //       <span>Tanstack-query, Swiper, Axios, Zustand, Tailwindcss</span>
    //     </li>
    //     <li>
    //       <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
    //         Deployment :
    //       </span>
    //       <span>Vercel</span>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default ProjectTving;
