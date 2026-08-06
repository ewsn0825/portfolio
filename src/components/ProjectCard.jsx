/* eslint-disable react/prop-types -- ProjectCard only receives the internal, static PROJECTS schema. */
import { motion } from "framer-motion";

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectVisual({ project }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-[#111a2a] shadow-2xl ${
        project.featured
          ? "aspect-[4/3] sm:aspect-[16/10]"
          : "aspect-video"
      }`}
    >
      <img
        src={project.image}
        alt={`${project.title} 프로젝트 화면`}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <details
      open={project.featured}
      className="group border-t border-gray-800 bg-[#0a101b]/60"
    >
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.025] sm:px-7 md:px-10">
        <span>
          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
            {project.featured ? "Case study" : "More details"}
          </span>
          <span className="text-base font-semibold text-slate-100 md:text-lg">
            {project.featured
              ? "주요 기능과 기술적 해결"
              : "구현 상세와 트러블 슈팅 보기"}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gray-700 text-lg text-cyan-300 transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="grid gap-10 border-t border-gray-800 px-5 py-7 sm:px-7 md:px-10 md:py-10">
        <section>
          <h4 className="mb-5 text-xl font-semibold text-white md:text-2xl">
            주요 기능
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-800 bg-[#101827] p-5"
              >
                <h5 className="mb-3 text-base font-semibold text-cyan-300 md:text-lg">
                  {feature.title}
                </h5>
                <ul className="space-y-2 text-[15px] leading-6 text-slate-300">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="mb-5 text-xl font-semibold text-white md:text-2xl">
            기술적 해결
          </h4>
          <div className="grid gap-4 lg:grid-cols-3">
            {project.troubleshooting.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-700 bg-[#101827]"
              >
                <h5 className="border-b border-gray-700 bg-white/[0.035] px-5 py-4 text-base font-semibold text-white">
                  {item.title}
                </h5>
                <dl className="space-y-4 p-5 text-[15px] leading-6">
                  <div>
                    <dt className="mb-1 font-semibold text-rose-300">문제</dt>
                    <dd className="text-slate-400">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-cyan-300">해결</dt>
                    <dd className="text-slate-200">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-semibold text-amber-300">배운 점</dt>
                    <dd className="text-slate-400">{item.learned}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
    </details>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-30px 0px" }}
      className={`overflow-hidden rounded-3xl border bg-[#0d1422] shadow-[0_18px_50px_rgba(0,0,0,0.2)] ${
        project.featured
          ? "border-cyan-500/40 shadow-[0_18px_60px_rgba(6,182,212,0.1)]"
          : "border-gray-800"
      }`}
    >
      <div className="grid lg:grid-cols-[1.08fr_1fr]">
        <div className="flex items-center justify-center bg-[#111a2a] p-5 sm:p-7 md:p-10">
          <ProjectVisual project={project} />
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-7 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                Featured
              </span>
            )}
            <span className="text-sm font-medium text-cyan-300">{project.type}</span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {project.title}
          </h3>
          <span className="mt-3 text-sm text-slate-400">{project.period}</span>

          <div className="my-6 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-3">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
              Key outcome
            </span>
            <p className="mt-1 text-[15px] font-medium leading-6 text-slate-100">
              {project.highlight}
            </p>
          </div>

          <p className="text-[15px] leading-7 text-slate-300 md:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-600/70 bg-slate-800/80 px-3 py-1.5 text-[12px] font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.variant === "primary"
                    ? "inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-400 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                    : "inline-flex min-h-11 items-center justify-center rounded-full border border-slate-600 px-5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-300 hover:text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <ProjectDetails project={project} />
    </motion.article>
  );
}

export default ProjectCard;
