import { getPersonalInfo } from "../data/store";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const info = getPersonalInfo();
  return (
    <section id="about" className="snap-start min-h-screen flex items-center px-4 relative bg-black">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-2">
            Tentang Saya
          </h2>
          <div className="w-24 h-0.5 bg-white/20 rounded mb-8" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-4 text-gray-400 leading-relaxed whitespace-pre-line text-base sm:text-lg">
            {info.about}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {info.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded text-sm font-medium border border-white/10 text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
