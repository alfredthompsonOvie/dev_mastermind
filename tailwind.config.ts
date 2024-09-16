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
        overlay: 'var(--bg-overlay)',
        background: 'var(--bg)',
        secondary: 'var(--secondary)',
        secondaryAlt: 'var(--secondary-opacity)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        text: 'var(--text)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    screens: {
      'sm': '576px',

      'cardMini': '550px',
      'xsmd': '550px',

      'smd': '850px',

      'md': '1100px',

      'lg': '1440px',
    },
  },
  plugins: [],
};
export default config;
