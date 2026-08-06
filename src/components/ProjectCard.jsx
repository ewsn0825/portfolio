/* eslint-disable react/prop-types -- ProjectCard only receives the internal, static PROJECTS schema. */
import { motion } from "framer-motion";
import TaskflowPreview from "./TaskflowPreview";

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectVisual({ project }) {
  if (project.preview === "taskflow") return <TaskflowPreview />;

  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
      <img
        src={project.image}
        alt={`${project.title} 프로젝트 화면`}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-30px 0px" }}
      className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-800 bg-gray-900/50"
    >
      <div className="grid gap-0 border-b border-gray-800 lg:grid-cols-2">
        <div className="flex items-center justify-center bg-gray-900/80 p-6 md:p-10">
          <ProjectVisual project={project} />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <span className="mb-2 text-sm text-cyan-400 font-neoBold">
            {project.type}
          </span>
          <h3 className="mb-3 text-4xl text-white font-neoExBold md:text-5xl">
            {project.title}
          </h3>
          <span className="mb-6 text-sm text-gray-500">{project.period}</span>

          <p className="mb-8 text-sm leading-relaxed text-gray-300 font-neo md:text-base">
            {project.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-400 font-neoBold"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 font-neoBold">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.variant === "primary"
                    ? "rounded-full bg-cyan-500 px-5 py-3 text-sm text-gray-950 transition-colors hover:bg-cyan-400"
                    : "rounded-full border border-gray-600 px-5 py-3 text-sm text-gray-300 transition-colors hover:border-white hover:text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-800 p-6 md:p-10">
        <h4 className="mb-6 text-2xl text-white font-neoExBold">🎯 기능 설명</h4>
        <div className="grid gap-6 md:grid-cols-3">
          {project.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-800/50 bg-gray-800/30 p-5"
            >
              <h5 className="mb-2 text-lg text-cyan-400 font-neoBold">
                {feature.title}
              </h5>
              <ul className="space-y-1 text-sm text-gray-400 font-neo">
                {feature.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-10">
        <h4 className="mb-8 text-2xl text-white font-neoExBold">
          💥 트러블 슈팅
        </h4>
        <div className="grid gap-6 lg:grid-cols-3">
          {project.troubleshooting.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900"
            >
              <div className="border-b border-gray-700 bg-gray-800 px-4 py-3">
                <h5 className="text-center text-white font-neoBold">
                  {item.title}
                </h5>
              </div>
              <div className="flex flex-col gap-4 whitespace-pre-line p-5 text-sm font-neo">
                <div>
                  <span className="mb-1 block text-red-400 font-neoBold">
                    🔥 문제 발생
                  </span>
                  <p className="leading-relaxed text-gray-400">{item.problem}</p>
                </div>
                <div>
                  <span className="mb-1 block text-blue-400 font-neoBold">
                    💡 해결 방법
                  </span>
                  <p className="leading-relaxed text-gray-300">{item.solution}</p>
                </div>
                <div>
                  <span className="mb-1 block text-orange-400 font-neoBold">
                    🔍 알게된 점
                  </span>
                  <p className="leading-relaxed text-gray-400">{item.learned}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
