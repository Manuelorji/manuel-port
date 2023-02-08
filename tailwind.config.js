/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  theme: {
    extend: {
      colors: {
        pink: "#e63963",
      },
      fontFamily: {
        lora: ["lora sans-serif"],
        comorantGaramond: ["Cormorant Garamond serif"],
        CrimsonText: ["Crimson Text serif"],
      },
      // backgroundImage: {
      //   // "hero-Image": "url('/img/hero-pattern.svg')",
      //   logo: "url(/src/Images/630e348760dd00d247034585_Logo for web.svg))",
      // },
    },
  },
  plugins: [],
};
