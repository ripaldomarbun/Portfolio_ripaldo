import { getProjects } from "../data/store";
import ProjectCard from "./ProjectCard";

export default function PortfolioGrid() {
  const projects = getProjects();

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-accent/20 to-primary/[0.02] dark:from-transparent dark:to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Portfolio
        </h2>
        <div className="w-12 h-1 bg-primary rounded mb-1" />
        <div className="w-24 h-0.5 bg-surface-accent rounded mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg">
          Beberapa project yang pernah saya kerjakan.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
