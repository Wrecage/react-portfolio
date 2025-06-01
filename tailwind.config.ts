import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },

      backgroundSize: {
        "200": "200% 200%",
      },

      colors: {
        "slate-800": "#1e293b",
      },

      animation: {
        "wave-gradient": "wave 8s ease-in-out infinite",
       
      },
      zIndex: {
      '9999': '9999',
    },
    },
  },
  
  plugins: [],
};
export default config;
