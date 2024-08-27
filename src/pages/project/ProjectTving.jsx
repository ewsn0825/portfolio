import tving from "@/assets/project/tving.png";
import ProjectNav from "@/components/ProjectNav";
import { Element } from "react-scroll";

function ProjectTving() {
  return (
    <div>
      <ProjectNav />
      <div className="font-neo desktop:px-28 desktop:py-10 tablet:px-6 mobile:px-3">
        <Element name="Detail">
          <div className="flex tablet:flex-row mobile:flex-col-reverse pb-14 mt-20 mobile:mt-10 border-b gap-12 border-gray-200">
            <div className="flex-[0.5] flex flex-col gap-6">
              <p className="text-3.5xl text-gray-600 mobile:text-2.5xl">
                클론코딩 프로젝트
              </p>
              <h2 className="font-neoExBold text-6xl mobile:text-5xl">
                클론 Tving
              </h2>
              <span>2024.05 - 2024.06</span>
              <p className="text-gray-500">
                OTT 티빙 웹사이트를 클론코딩 한 웹 사이트입니다. <br /> 최대한
                티빙의 기능들을 구현하려고 노력하였으며, 데스크탑 기준으로
                마크업을 구현하였습니다.
              </p>
              <div className="flex mobile:flex-col tablet:flex-row gap-5 mt-5">
                <button
                  className="text-[#121212] text-sm border-2 border-[#121212] rounded-full px-14 py-4 hover:border-gray-500 hover:text-gray-500"
                  onClick={() =>
                    (window.location.href = "https://clone-tving.vercel.app")
                  }
                >
                  웹 페이지 바로가기
                </button>
                <button
                  className="text-white bg-[#121212] px-10 py-4 rounded-full hover:opacity-80"
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/hoyeonjigi/CloneTving")
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center">
              <img
                src={tving}
                alt="티빙 이미지"
                className="rounded-2xl h-[350px] mobile:w-full top-1/2 left-1/2 shadow"
              />
            </div>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col gap-10 mobile:gap-20 mt-10 pb-20">
            <div className="flex-[0.5]">
              <h3 className="font-neoExBold text-2xl mb-5">📢 프로젝트 소개</h3>
              <div className="tablet:ml-10 flex flex-col gap-4 font-neoBold">
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  4인 팀 프로젝트 (BE 2명, FE 2명)
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
                      tanstack query
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
                    OTT 티빙 웹사이트를 학습 목적으로 클론코딩 한 웹
                    사이트입니다. <br />
                    백엔드와 처음으로 협업을 해보았고, 구현된 Restful API를
                    사용하여 jwt 방식으로 CRUD 처리를 해보는 과정을 통해 데이터
                    통신에 대해 기존에 알고있던 것보다 깊이 이해할 수
                    있었습니다. 또한 무한 스크롤 기능을 만들기 위해
                    Tanstack-query 라이브러리를 활용해볼 수 있어서 좋았습니다.
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
                  프로필 생성, 수정, 삭제
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 프로필 이름과 이미지를 선택해 프로필 생성 가능. 그 이후
                    프로필 수정, 프로필 삭제 또한 가능
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  컨텐츠 검색
                  <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 텍스트를 검색창에 입력하면 초성과 일치하는 접근 가능한
                    컨텐츠 목록이 보여짐
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  컨텐츠 리뷰 등록, 수정, 삭제 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - 접근한 컨텐츠에 리뷰 모달을 통해 등록, 수정 삭제를 할 수
                    있음
                  </p>
                </li>
                <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-gray-300">
                  리뷰 무한 스크롤 <br />
                  <p className="text-gray-700 desktop:text-base mt-2 font-neo tablet:text-sm mobile:text-[14px]">
                    - tanstack query의 infinity query를 사용하여 스크롤이 특정
                    위치에 닿으면 다음 페이지의 리뷰 데이터 불러옴
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
                  무한 스크롤을 하는데 리뷰 업데이트가 안된다?
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      특정 위치에 스크롤이 닿으면 다음 페이지의 리뷰 데이터를
                      업데이트를 해주어야 하는데{" "}
                      <span className="text-red-400">
                        업데이트가 안되는 문제가
                      </span>{" "}
                      생겼습니다.
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      해결 방법을 찾아보니 리액트 쿼리의 데이터 쿼리를 업데이트
                      하기 위해서는{" "}
                      <span className="text-blue-400">
                        queryClient.invalidateQueries()
                      </span>{" "}
                      메서드를 사용해 데이터 쿼리를 무효화하고 변경된 데이터를
                      refetch 하는 방식으로 업데이트를 할 수 있었습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      해당 방식으로 쿼리 데이터를 업데이트 하면 페이지를
                      refresh할 필요없이 데이터 쿼리가 업데이트 된다는 것을 알게
                      되었습니다. 또한 invalidateQueries 메서드 외에도 비슷한
                      기능을 하는 refetchQueries 메소드도 알게 되었는데,
                      마찬가지로 데이터 쿼리를 refetch 하여 업데이트를 하는
                      메서드입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50">
                <div className="bg-[#333] text-white text-center text-lg font-neoBold py-3 rounded-xl">
                  물 흐르듯한 슬라이드가 안된다??
                </div>
                <div className="px-5 py-5 flex flex-col gap-12">
                  <div>
                    <span className="text-red-400">🔥 문제발생</span>
                    <br />
                    <p className="mt-2">
                      Swiper 라이브러리를 사용하여 딜레이 없이 반복적으로
                      흘러가는 슬라이드를 만들기 위해서 autoplay 속성에 delay를
                      0으로 두었습니다.{" "}
                      <span className="text-red-400">
                        하지만 예상과 다르게 특정 주기마다 슬라이드가 멈췄다가
                        다시 움직이는 현상
                      </span>
                      을 발견했습니다.{" "}
                    </p>
                  </div>
                  <div>
                    <span className="text-blue-400">💡 해결방법</span>
                    <br />
                    <p className="mt-2">
                      해결방법을 찾던 도중 swiper에서 기본적으로 제공된 css
                      파일에서 해결방안을 찾을 수 있었습니다. swiper의 css에는
                      기본적으로 제공된 클래스들이 있는데
                      <span className="text-blue-400">.smooth-swiper</span>
                      클래스가 제가 원하는 기능을 쓸 수있는 클래스였고, 해당
                      클래스에 알맞은 속성을 넣어 해결하였습니다.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <span className="text-orange-400">🔍 알게된 점</span>
                    <br />
                    <p className="mt-2">
                      swiper 라이브러리를 사용하면 swiper에서 제공된 css 파일을
                      import 할 수 있는데 이렇게 해서 가져온 css에는 다양한
                      클래스들이 존재합니다. 제가 원하던 기능 외에도 슬라이드
                      쇼를 커스텀 하거나 이전, 다음 버튼도 원하는 식으로 css를
                      사용해 커스텀이 가능하다는 것을 알게되었습니다. 이후 메인
                      페이지의 슬라이드 버튼을 커스텀 할 때 큰 도움이
                      되었습니다.
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

export default ProjectTving;
