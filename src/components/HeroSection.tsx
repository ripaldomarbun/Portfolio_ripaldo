import { getPersonalInfo } from "../data/store";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end px-4 pb-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src={import.meta.env.BASE_URL + "images/hero-bg.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
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
            className="inline-flex items-center justify-center px-8 py-3 border border-[#00FF41] text-[#00FF41] font-semibold text-sm tracking-wide hover:bg-[#00FF41] hover:text-black transition-colors"
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
