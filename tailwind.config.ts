import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      purple: "#C4AEF2",
      pink: "#F2C9C9",
      green: "#63F287",
      greenish: "#D3F263",
      yellow: "#F2EA72",
      white: "#FFFFFF",
      blue: "#A2C1FF",
    },
    extend: {
      animation: {
        blob: "blob  ease-in-out",
      },
      keyframes: {
        blob: {
          "100%": {
            transform: "scale(1.1)",
            backgroundColor: "#F2EA72",
            boxShadow: "1px 1px 15px black",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
