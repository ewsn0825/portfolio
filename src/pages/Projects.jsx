import Portfolio from "@/components/project/Portfolio";
import ProjectGeppetto from "@/components/project/ProjectGeppetto";
import ProjectKurlyHtml from "@/components/project/ProjectKurlyHtml";
import ProjectKurlyJs from "@/components/project/ProjectKurlyJs";
import ProjectTving from "@/components/project/ProjectTving";

function Projects() {
  return (
    <div className="bg-[#e8e1db] desktop:px-8 flex justify-center items-center desktop:py-24 tablet:py-16 mobile:py-9">
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto ">
        <div className="mobile:px-3">
          <h2 className="desktop:text-5xl tablet:text-3xl mobile:text-xl font-medium text-center font-han">
            Projects
          </h2>
          <div className="flex flex-col items-center gap-28 py-20">
            <ProjectKurlyHtml />
            <ProjectKurlyJs />
            <ProjectGeppetto />
            <ProjectTving />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
