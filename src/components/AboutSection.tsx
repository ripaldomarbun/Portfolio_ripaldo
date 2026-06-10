import { getPersonalInfo } from "../data/store";

export default function AboutSection() {
  const info = getPersonalInfo();
  return (
    <section id="about" className="py-20 sm:py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-surface-accent/20 dark:from-transparent dark:to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Tentang Saya
        </h2>
        <div className="w-12 h-1 bg-primary rounded mb-2" />
        <div className="w-24 h-0.5 bg-surface-accent rounded mb-8" />
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {info.about}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {info.skills.map((skill, i) => (
            <span
              key={skill}
              className={`px-3 py-1.5 rounded text-sm font-medium border ${
                i % 2 === 0
                  ? "bg-primary/10 text-primary-dark border-primary/20"
                  : "bg-surface-accent/40 text-gray-700 border-surface-accent/60"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
