import kurlyhtml from "@/assets/project/kurlyHtml.png";

function ProjectKurlyHtml() {
  return (
    <div className="bg-white desktop:w-[1000px] tablet:w-[630px] mobile:w-[250px] rounded-2xl shadow-2xl desktop:py-10 desktop:px-10 tablet:px-8 tablet:py-8 mobile:px-5 mobile:py-5 flex flex-col desktop:gap-16 mobile:gap-10">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-center desktop:text-4xl tablet:text-2xl mobile:text-lg font-base font-han">
          마켓컬리 클론코딩 - 마크업
        </h3>
        <img
          src={kurlyhtml}
          alt="마켓컬리 마크업 프로젝트 이미지"
          className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px]"
        />
        <p className="desktop:w-[600px] tablet:w-[350px] mobile:w-[220px] desktop:text-lg tablet:text-sm mobile:text-[10px]">
          멋쟁이 사자처럼 프론트엔드 스쿨 과정 중 Html, css 파트를 배우고 진행한
          프로젝트이며 마켓컬리 웹사이트를 클론코딩 해보았습니다. 프로젝트를
          진행하며 시맨틱 마크업을 지향하였습니다. 처음 Scss를 사용해보았고
          Mixin을 활용하여 디자인을 해보며 Postcss에 대해 알아갈 수 있어서
          좋았습니다.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 desktop:text-lg tablet:text-sm mobile:text-[10px]">
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            인원 :{" "}
          </span>
          <span>4인 팀 프로젝트</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            기간 :{" "}
          </span>
          <span>2023.06 ~ 2023.06</span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            주요기능 :{" "}
          </span>
          <span>
            Main, Register, login, Product-List, Product-Detail 마크업 페이지
          </span>
        </li>
        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            GitHub :{" "}
          </span>
          <a
            href="https://github.com/bigCoDult/proect0_highKality"
            className="text-blue-400"
          >
            https://github.com/bigCoDult/proect0_highKality
          </a>
        </li>

        <li>
          <span className="font-extrabold inline-block desktop:w-[120px] tablet:w-[100px] mobile:mr-2">
            사용기술 :{" "}
          </span>
          <span>HTML, CSS, SCSS</span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectKurlyHtml;
