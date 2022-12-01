/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivoExpandedLight: ["archivoExpandedLight", "sans-serif"],
        archivoExpandedRegular: ["archivoExpandedRegular", "sans-serif"],
        archivoExpandedMedium: ["archivoExpandedMedium", "sans-serif"],
        archivoExpandedSemiBold: ["archivoExpandedSemiBold", "sans-serif"],
        archivoExpandedBold: ["archivoExpandedBold", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "infinite-slide": "infinite_slide 40s linear infinite",
        // "infinite-slide2": "infinite_slide 14s 12s linear infinite",
      },
      keyframes: {
        "infinite_slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
