import ProjectGeppetto from "@/components/project/ProjectGeppetto";
import ProjectTving from "@/components/project/ProjectTving";

function Projects() {
  return (
    <div className="bg-gray-100 desktop:px-8 flex justify-center items-center desktop:py-20">
      <div className="desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto">
        <h2 className="text-4.5xl font-semibold">Projects</h2>
        <div className="flex flex-col items-center gap-28 py-20">
          {/* <ProjectTving /> */}
          <ProjectTving />
          <ProjectGeppetto />
        </div>
      </div>
    </div>
  );
}

export default Projects;
