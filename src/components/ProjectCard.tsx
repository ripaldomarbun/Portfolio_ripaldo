import { useState } from "react";
import { Project } from "../data/portfolio";
import ProjectDetail from "./ProjectDetail";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative text-left rounded overflow-hidden bg-zinc-900/50 border border-[#00FF41]/20 hover:border-[#00FF41]/50 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="w-full h-44 bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl font-bold text-[#00FF41]/20 select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-[#00FF41] group-hover:text-[#00FF41] transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-[#00FF41]/70 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded border border-[#00FF41]/20 text-[#00FF41]/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      {open && <ProjectDetail project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
