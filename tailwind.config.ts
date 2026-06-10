import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo 2", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
