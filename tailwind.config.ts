import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          bg: "#141414",
          surface: "#1a1a1a",
          "surface-hover": "#2a2a2a",
          red: "#E50914",
          "red-hover": "#f40612",
          text: "#ffffff",
          muted: "#b3b3b3",
          border: "#333333",
        },
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
