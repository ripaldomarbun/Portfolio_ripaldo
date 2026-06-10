import { getPersonalInfo } from "../data/store";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#141414]" />
      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none">
          {getPersonalInfo().name.split(" ")[0]}
          <span className="text-[#E50914]">.</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">
          {getPersonalInfo().tagline}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#666]">
          <span>{getPersonalInfo().location}</span>
          <span className="hidden sm:inline">|</span>
          <a href={`mailto:${getPersonalInfo().email}`} className="hover:text-white transition-colors">
            {getPersonalInfo().email}
          </a>
          <span className="hidden sm:inline">|</span>
          <span>{getPersonalInfo().phone}</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-[#E50914] text-white font-semibold text-sm hover:bg-[#f40612] transition-colors"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-[#333] text-white font-semibold text-sm hover:bg-[#444] transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
