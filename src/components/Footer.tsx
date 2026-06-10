import { getPersonalInfo } from "../data/store";
import SocialLinks from "./SocialLinks";

const APP_VERSION = "1.0.0";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {getPersonalInfo().name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">v{APP_VERSION}</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
