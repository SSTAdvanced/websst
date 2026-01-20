import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        mist: "#f5f7fb",
        sapphire: "#1d4ed8",
        royal: "#1e3a8a",
        steel: "#334155",
      },
      boxShadow: {
        "card-soft": "0 20px 45px -30px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
