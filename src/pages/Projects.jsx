import ProjectTving from "@/components/project/ProjectTving";

function Projects() {
  return (
    <div className="bg-orange-400">
      <div className="border-t-2 border-t-black desktop:w-[1240px] tablet:w-[768px] mobile:w-[320px] mx-auto">
        <h2 className="text-4.5xl font-semibold mt-5 mb-8">Projects</h2>
        <div className="flex flex-col items-center gap-28 py-20">
          <ProjectTving />
          <ProjectTving />
        </div>
      </div>
    </div>
  );
}

export default Projects;
