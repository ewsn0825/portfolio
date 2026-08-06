import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

function Projects() {
  return (
    <section id="projects" className="w-full py-24 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl font-bold tracking-tight text-white font-gm md:text-5xl">
            Projects<span className="text-cyan-500">.</span>
          </h2>
          <p className="mt-4 text-gray-400 font-neo">
            제품의 문제를 기술로 풀어낸 프로젝트와 개선 경험입니다.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
