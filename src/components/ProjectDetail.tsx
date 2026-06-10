import { useEffect } from "react";
import { Project } from "../data/portfolio";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 rounded max-w-lg w-full p-6 sm:p-8 border border-[#00FF41]/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4 pb-3 border-b border-[#00FF41]/20">
          <h2 className="text-2xl font-bold text-[#00FF41] uppercase tracking-wide">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[#00FF41]/60 hover:text-[#00FF41] transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full h-48 rounded bg-zinc-800/50 mb-4 flex items-center justify-center">
          <span className="text-5xl font-bold text-[#00FF41]/20">
            {project.title.charAt(0)}
          </span>
        </div>

        <p className="text-[#00FF41]/80 leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
                className="px-2.5 py-1 text-xs font-medium rounded border border-[#00FF41]/20 text-[#00FF41]/60"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded border border-[#00FF41] text-[#00FF41] font-semibold text-sm hover:bg-[#00FF41] hover:text-black transition-colors"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded border border-[#00FF41] text-[#00FF41] font-semibold text-sm hover:bg-[#00FF41] hover:text-black transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
