import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['var(--font-yekan)', 'Tahoma', 'sans-serif'],
      },
      colors: {
        'seraj-primary': '#005A5F',
        'seraj-secondary': '#007B83',
        'seraj-accent': '#00AFB5',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        seraj: {
          "primary": "#005A5F",
          "secondary": "#007B83",
          "accent": "#00AFB5",
          "neutral": "#2a323c",
          "base-100": "#f3f4f6",
          "info": "#3abff8",
          "success": "#26a65b",
          "warning": "#fbbd23",
          "error": "#d24d57",
        },
      },
      "light",
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    rtl: true,
  },
};

export default config;
