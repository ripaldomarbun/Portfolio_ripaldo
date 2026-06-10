import { getProjects } from "../data/store";
import ProjectCard from "./ProjectCard";

export default function PortfolioGrid() {
  const projects = getProjects();

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 relative bg-black">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-2">
          Portfolio
        </h2>
        <div className="w-24 h-0.5 bg-white/20 rounded mb-4" />
        <p className="text-gray-500 mb-10 max-w-lg">
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
