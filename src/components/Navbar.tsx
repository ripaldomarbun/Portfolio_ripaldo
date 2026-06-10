import { useState, useEffect } from "react";
import { getPersonalInfo } from "../data/store";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

interface Props {
  onAdminClick?: () => void;
}

export default function Navbar({ onAdminClick }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#141414]" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-[#E50914] tracking-tight">
          {getPersonalInfo().name.split(" ")[0]}
        </a>

        <button
          className="sm:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#b3b3b3] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {onAdminClick && (
            <button
              onClick={onAdminClick}
              className="text-sm text-[#E50914] hover:text-white transition-colors"
            >
              Admin
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-[#141414] border-t border-[#333] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#b3b3b3] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {onAdminClick && (
            <button
              onClick={() => { setOpen(false); onAdminClick(); }}
              className="block text-sm text-[#E50914] hover:text-white transition-colors"
            >
              Admin
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
