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
        className="bg-[#1a1a1a] rounded max-w-lg w-full p-6 sm:p-8 border border-[#333]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-[#b3b3b3] hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="w-full h-48 rounded bg-gradient-to-br from-[#E50914]/20 to-[#E50914]/5 mb-4 flex items-center justify-center">
          <span className="text-5xl font-black text-[#E50914]/30">
            {project.title.charAt(0)}
          </span>
        </div>

        <p className="text-[#b3b3b3] leading-relaxed">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded bg-[#333] text-[#b3b3b3]"
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
              className="flex-1 text-center px-4 py-2.5 rounded bg-[#E50914] text-white font-semibold text-sm hover:bg-[#f40612] transition-colors"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded bg-[#333] text-white font-semibold text-sm hover:bg-[#444] transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
