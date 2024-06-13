import geppetto from "@/assets/project/geppetto.png";

function ProjectGeppetto() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">제페토</h3>
        <img src={geppetto} alt="제페토 이미지" className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]" />
        <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
          멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 리액트 프로젝트를 진행하기
          위해 만든 펫 커뮤니티 웹사이트 제페토 입니다. 프로젝트를 진행하며
          기획부터 디자인, 구현까지 모든 과정을 진행하였습니다. Zustand
          라이브러리를 사용하여 처음으로 전역 상태 관리를 해보았고, 이를 통해
          기존 useState로 상태를 관리하며 props 또는 react context를 통해 상태를
          전달하는 방식과 비교해 볼 수 있었다는 점이 좋았습니다. 또한
          pocketbase의 기능 중 하나인 OAuth 2.0 인증을 하여 구글, 카카오
          계정으로 로그인을 할 수 있도록 구현하였습니다.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            인원 :{" "}
          </span>
          <span>4인 팀 프로젝트 (FE 4명)</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            기간 :{" "}
          </span>
          <span>2023.09</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            주요기능 :{" "}
          </span>
          <span>
            회원가입, 로그인 (OAuth 2.0), 커뮤티니 (글 생성, 수정, 삭제 ,인기순
            최신순 정렬), 댓글 (등록, 수정, 삭제)
          </span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            GitHub :{" "}
          </span>
          <a
            href="https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite"
            className="text-blue-400"
          >
            https://github.com/FRONTENDSCHOOL6/DoIt88-PetSite
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            URL :{" "}
          </span>
          <a href="https://geppetto88.netlify.app" className="text-blue-400">
            https://geppetto88.netlify.app
          </a>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            사용기술 :{" "}
          </span>
          <span>Pocketbase, Swiper, Zustand, Tailwindcss</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            Deployment :{" "}
          </span>
          <span>Netlify</span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectGeppetto;
