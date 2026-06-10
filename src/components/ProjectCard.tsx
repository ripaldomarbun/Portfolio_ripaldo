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
        className="group relative text-left rounded overflow-hidden bg-[#1a1a1a] border border-[#333] hover:border-[#E50914] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/50"
      >
        <div className="w-full h-44 bg-gradient-to-br from-[#E50914]/20 to-[#E50914]/5 flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl font-black text-[#E50914]/30 select-none">
            {project.title.charAt(0)}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-white group-hover:text-[#E50914] transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-[#b3b3b3] line-clamp-2">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs rounded bg-[#333] text-[#b3b3b3]"
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
