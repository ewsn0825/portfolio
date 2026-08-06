import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

function Projects() {
  return (
    <section id="projects" className="w-full py-20 text-white md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-12">
        <div className="mb-10 border-b border-gray-800 pb-6 md:mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-white font-gm md:text-5xl">
            Projects<span className="text-cyan-500">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 font-neo">
            제품의 문제를 기술로 풀어낸 프로젝트와 개선 경험입니다. 최신 프로젝트는
            케이스 스터디로, 나머지는 핵심 결과 중심으로 확인할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
