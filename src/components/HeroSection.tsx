import { getPersonalInfo } from "../data/store";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface-accent/20 to-surface dark:from-gray-950 dark:via-gray-950 dark:to-gray-950" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface dark:to-gray-950 to-transparent" />
      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
          {getPersonalInfo().name.split(" ")[0]}
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {getPersonalInfo().tagline}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 dark:text-gray-500">
          <span>{getPersonalInfo().location}</span>
          <span className="hidden sm:inline">|</span>
          <a href={`mailto:${getPersonalInfo().email}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
            {getPersonalInfo().email}
          </a>
          <span className="hidden sm:inline">|</span>
          <span>{getPersonalInfo().phone}</span>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-surface-accent text-gray-900 font-semibold text-sm hover:bg-[#ddd89a] transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
