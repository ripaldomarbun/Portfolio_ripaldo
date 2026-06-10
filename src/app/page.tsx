import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioGrid />

        <section id="contact" className="py-20 sm:py-28 px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kontak
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Punya pertanyaan atau tertarik bekerja sama? Kirim pesan!
            </p>
            <ContactForm />
            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
