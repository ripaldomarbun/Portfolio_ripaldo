import { getPersonalInfo } from "../data/store";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const info = getPersonalInfo();
  return (
    <section id="about" className="snap-start min-h-screen flex items-center px-4 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/about-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF41] uppercase tracking-wide mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.3)]">
            Tentang Saya
          </h2>
          <div className="w-24 h-0.5 bg-[#00FF41]/30 rounded mb-8" />
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
