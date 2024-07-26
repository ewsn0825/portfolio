// import Portfolio from "@/components/project/Portfolio";
// import ProjectGeppetto from "@/components/project/ProjectGeppetto";
// import ProjectKurlyHtml from "@/components/project/ProjectKurlyHtml";
// import ProjectKurlyJs from "@/components/project/ProjectKurlyJs";
// import ProjectTving from "@/components/project/ProjectTving";

import kurlyHtml from "@/assets/project/kurlyHtml.png";
import kurlyJs from "@/assets/project/kurlyJs.png";
import geppetto from "@/assets/project/geppetto.png";
import tving from "@/assets/project/tving.png";
import portfolio from "@/assets/project/portfolio.png";


function Projects() {
  return (
    <div className="desktop:px-8 flex justify-center items-center desktop:py-24 tablet:py-16 mobile:py-9">
      <div className="desktop:w-[1240px] mx-auto ">
        <div className="mobile:px-3">
          <h2 className="font-pre desktop:text-5xl tablet:text-3xl mobile:text-xl font-medium mb-10">
            Projects
          </h2>
          <div className="w-full font-neo grid desktop:grid-cols-3 tablet:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-[240px]">
                <img src={kurlyHtml} alt="마켓컬리 HTML 프로젝트" className="w-auto h-full rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-neoBold text-[22px] font-semibold">마켓컬리 html</h3>
                <p className="font-neo text-sm text-gray-500">여기에 내용추가</p>
              </div>
              <div>
                <ul className="flex gap-2 text-gray-500">
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">html</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">css</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">scss</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-[240px]">
                <img src={kurlyJs} alt="마켓컬리 JS 프로젝트" className="w-auto h-full rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-neoBold text-[22px] font-semibold">마켓컬리 html</h3>
                <p className="font-neo text-sm text-gray-500">여기에 내용추가</p>
              </div>
              <div>
                <ul className="flex gap-2 text-gray-500">
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">html</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">css</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">scss</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-[240px]">
                <img src={geppetto} alt="제페토" className="w-auto h-full rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-neoBold text-[22px] font-semibold">마켓컬리 html</h3>
                <p className="font-neo text-sm text-gray-500">여기에 내용추가</p>
              </div>
              <div>
                <ul className="flex gap-2 text-gray-500">
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">html</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">css</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">scss</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-[240px]">
                <img src={tving} alt="티빙 클론코딩" className="w-auto h-full rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-neoBold text-[22px] font-semibold">마켓컬리 html</h3>
                <p className="font-neo text-sm text-gray-500">여기에 내용추가</p>
              </div>
              <div>
                <ul className="flex gap-2 text-gray-500">
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">html</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">css</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">scss</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full h-[240px]">
                <img src={portfolio} alt="포트폴리오" className="w-auto h-full rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-neoBold text-[22px] font-semibold">마켓컬리 html</h3>
                <p className="font-neo text-sm text-gray-500">여기에 내용추가</p>
              </div>
              <div>
                <ul className="flex gap-2 text-gray-500">
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">html</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">css</li>
                  <li className="px-4 py-1 border border-gray-300 rounded-2xl">scss</li>
                </ul>
              </div>
            </div>
            {/* <ProjectKurlyHtml />
            <ProjectKurlyJs />
            <ProjectGeppetto />
            <ProjectTving />
            <Portfolio /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
