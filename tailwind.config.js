/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "44px", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "38px", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        h4: ["22px", { lineHeight: "28px", fontWeight: "700" }],
        h5: ["20px", { lineHeight: "24px", fontWeight: "700" }],
        h6: ["18px", { lineHeight: "20px", fontWeight: "700" }],
      },
      colors: {
        primary: {
          DEFAULT: "#c9a482",
        },
      },
    },
  },
  plugins: [],
};
