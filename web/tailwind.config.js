/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)",
    },
    fontSize: {
      h1: ["2rem", "1.2em"],
      subtitle: ["1.5rem", "1.4em"],
      base: ["1rem", "1.6em"],
      label: ["0.875rem", "1.4em"],
    },
    colors: {
      gray: {
        900: "var(--gray-900)",
        800: "var(--gray-800)",
        700: "var(--gray-700)",
        600: "var(--gray-600)",
        500: "var(--gray-500)",
        400: "var(--gray-400)",
        300: "var(--gray-300)",
        200: "var(--gray-200)",
        100: "var(--gray-100)",
        50: "var(--gray-50)",
      },
      accent: {
        400: "var(--accent-400)",
        500: "var(--accent-500)",
        DEFAULT: "var(--accent-500)",
        600: "var(--accent-600)",
      },
    },
    spacing: {
      0: 0,
      1: 1,
      2: 2,
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
      96: "6rem",
      128: "8rem",
      256: "12rem",
      384: "16rem",
      512: "24rem",
      640: "32rem",
      768: "48rem",
      screen: "100vw",
    },
    extend: {
      borderWidth: { 0: 0, DEFAULT: "1px" },
      maxWidth: {
        content: "1200px",
      },
      padding: {
        content: "1.5rem",
      },
    },
  },
  plugins: [],
};
