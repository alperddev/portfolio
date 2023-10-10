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
      blackL: "#1e1e1e",

      purple: "#C4AEF2",
      pink: "#F2C9C9",
      green: "#63F287",
      greenish: "#D3F263",
      yellow: "#F2EA72",
      white: "#FFFFFF",
      whiteD: "#ebebeb",

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
      boxShadow: {
        "inner-lg":
          "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 2px 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
