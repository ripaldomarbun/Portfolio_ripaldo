import { getProjects } from "../data/store";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function PortfolioGrid() {
  const projects = getProjects();

  return (
    <section id="portfolio" className="snap-start min-h-screen flex items-center px-4 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/portfolio-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-2">
            Portfolio
          </h2>
          <div className="w-24 h-0.5 bg-white/20 rounded mb-4" />
          <p className="text-gray-500 mb-10 max-w-lg">
            Beberapa project yang pernah saya kerjakan.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
