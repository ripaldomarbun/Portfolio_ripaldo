import { getPersonalInfo } from "../data/store";

export default function AboutSection() {
  const info = getPersonalInfo();
  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Tentang Saya
        </h2>
        <div className="w-12 h-1 bg-[#E50914] rounded mb-8" />
        <div className="space-y-4 text-[#b3b3b3] leading-relaxed whitespace-pre-line text-base sm:text-lg">
          {info.about}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {info.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded text-sm font-medium bg-[#1a1a1a] text-[#b3b3b3] border border-[#333]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
