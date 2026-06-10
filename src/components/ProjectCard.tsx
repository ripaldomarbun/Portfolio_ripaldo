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
        className="group relative text-left rounded overflow-hidden bg-white dark:bg-gray-900 border-l-4 border-surface-accent dark:border-primary/60 hover:border-l-primary dark:hover:border-l-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-black/50"
      >
        <div className="w-full h-44 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl font-black text-primary/30 select-none">
            {project.title.charAt(0)}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={t}
                className={`px-2 py-0.5 text-xs rounded ${
                  i % 2 === 0
                    ? "bg-primary/10 text-primary-dark"
                    : "bg-surface-accent/40 text-gray-700 dark:text-gray-300"
                }`}
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
