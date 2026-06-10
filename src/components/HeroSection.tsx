import { getPersonalInfo } from "../data/store";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end px-4 pb-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-[0.2em] text-white leading-none">
          {getPersonalInfo().name.split(" ")[0]}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          {getPersonalInfo().tagline}
        </p>
        <div className="mt-8">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/80 text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            Lihat Portfolio
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
