import tving from "@/assets/project/tving.png";

function ProjectTving() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[700px] rounded-2xl shadow-2xl py-10 px-10 flex flex-col gap-16">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-center text-4xl font-base font-han">
          티빙 클론코딩
        </h3>
        <img src={tving} alt="티빙 이미지" className="desktop:w-[600px]" />
        <p className="desktop:w-[600px] desktop:text-lg">
          OTT 티빙 웹사이트를 학습 목적으로 클론코딩 한 웹 사이트입니다.
          백엔드와 처음으로 협업을 해보았고, 구현된 Restful API를 사용하여 jwt
          방식으로 CRUD 처리를 해보는 과정을 통해 데이터 통신에 대해 기존에
          알고있던 것보다 깊이 이해할 수 있었습니다. 또한 무한 스크롤 기능을
          만들기 위해 Tanstack-query 라이브러리를 활용해볼 수 있어서 좋았습니다.
        </p>
      </div>

      <ul className="flex flex-col  items-start gap-3 desktop:text-lg">
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            인원 :{" "}
          </span>
          <span>4인 팀 프로젝트 (BE 2명, FE 2명)</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            기간 :{" "}
          </span>
          <span>2023.12 ~ 2024.04</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            주요기능 :{" "}
          </span>
          <span>
            회원가입, 로그인, 프로필 (생성, 수정, 삭제), 댓글 (등록, 수정,
            삭제), 댓글 무한스크롤
          </span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            GitHub :{" "}
          </span>
          <a
            href="https://github.com/hoyeonjigi/CloneTving"
            className="text-blue-400"
          >
            https://github.com/hoyeonjigi/CloneTving
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            URL :{" "}
          </span>
          <a href="https://clone-tving.vercel.app" className="text-blue-400">
            https://clone-tving.vercel.app
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            사용기술 :{" "}
          </span>
          <span>Tanstack-query, Swiper, Axios, Zustand, Tailwindcss</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px]">
            Deployment :{" "}
          </span>
          <span>Vercel</span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectTving;
