import { useState, useEffect } from "react";
import { getPersonalInfo } from "../data/store";
import ThemeToggle from "./ThemeToggle";

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
        scrolled
          ? "bg-surface dark:bg-gray-950 shadow-sm"
          : "bg-surface/80 dark:bg-gradient-to-b dark:from-black/80 dark:to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-primary tracking-tight">
          {getPersonalInfo().name.split(" ")[0]}
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            className="sm:hidden p-2 text-gray-900 dark:text-white"
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
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            {onAdminClick && (
              <button
                onClick={onAdminClick}
                className="text-sm text-primary hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Admin
              </button>
            )}
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-surface dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          {onAdminClick && (
            <button
              onClick={() => { setOpen(false); onAdminClick(); }}
              className="block text-sm text-primary hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Admin
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
