import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#FF6200",
        secondary: "#E63939",
        accent: "#25D366",
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
