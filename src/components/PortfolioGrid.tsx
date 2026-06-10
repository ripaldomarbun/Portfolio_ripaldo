import { getProjects } from "../data/store";
import ProjectCard from "./ProjectCard";

export default function PortfolioGrid() {
  const projects = getProjects();

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Portfolio
        </h2>
        <div className="w-12 h-1 bg-[#E50914] rounded mb-4" />
        <p className="text-[#b3b3b3] mb-10 max-w-lg">
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
