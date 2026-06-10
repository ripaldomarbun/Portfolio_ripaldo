import { getPersonalInfo } from "../data/store";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-wide text-white uppercase leading-none">
          {getPersonalInfo().name.split(" ")[0]}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {getPersonalInfo().tagline}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
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
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
