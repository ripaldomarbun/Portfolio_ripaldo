import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioGrid from "./components/PortfolioGrid";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import Starfield from "./components/Starfield";

export default function App() {
  const [view, setView] = useState<"portfolio" | "admin">("portfolio");

  return (
    <>
      <Starfield />
      {view === "admin" ? (
        <AuthProvider>
          <AdminPanel onBack={() => setView("portfolio")} />
        </AuthProvider>
      ) : (
        <>
          <Navbar onAdminClick={() => setView("admin")} />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <PortfolioGrid />

            <section id="contact" className="py-24 sm:py-32 px-4">
              <div className="max-w-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-4">
                  Kontak
                </h2>
                <p className="text-gray-400 mb-8">
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
      )}
    </>
  );
}
