import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioGrid from "./components/PortfolioGrid";
import ContactForm from "./components/ContactForm";
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
        <div className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
          <Navbar onAdminClick={() => setView("admin")} />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <PortfolioGrid />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
