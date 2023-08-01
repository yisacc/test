/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#171321",
        dkblue: "#0d314b",
        plum: "#4b0d49",
        hotmag: "#ff17e4",
        magneta: "#e310cb",
        aqua: "#86fbfb",
        white: "#f7f8fa",
      },
      fontSize: {
        normal: "1.3rem",
        headingTwo: "4rem",
        customSize: "80%",
      },
      fontFamily: {
        sans: ["var(--font-oxygen)"],
        mono: ["var(--font-oxygen-mono)"],
      },
      screens: {
        sm: "550px",
      },
      gridColumn: {
        "span-1/6": "span 1 / span 6",
      },
    },
  },
  plugins: [],
};
