/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: "var(--font-body)",
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "0.125rem",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
      80: "5rem",
      96: "6rem",
      128: "8rem",
      160: "10rem",
      192: "12rem",
      256: "16rem",
      320: "20rem",
      384: "24rem",
      448: "28rem",
      512: "32rem",
      640: "40rem",
      768: "48rem",
      896: "56rem",
      1024: "64rem",
      1280: "80rem",
      1536: "96rem",
      1792: "112rem",
      1920: "120rem",
    },
    fontSize: {
      caption: ["0.75rem", { lineHeight: "1.4em" }],
      body2: ["0.875rem", { lineHeight: "1.6em" }],
      body1: ["1rem", { lineHeight: "1.6em" }],
      subtitle2: ["1.125rem", { lineHeight: "1.4em" }],
      subtitle1: ["1.25rem", { lineHeight: "1.4em" }],
      heading4: ["1.5rem", { lineHeight: "1.2em" }],
      heading3: ["1.75rem", { lineHeight: "1.2em" }],
      heading2: ["2rem", { lineHeight: "1.2em" }],
      heading1: ["2.25rem", { lineHeight: "1.2em" }],
    },
    extend: {
      typography: ({ theme }) => ({
        cv: {
          css: {
            "--tw-prose-headings": theme("colors.gray[700]"),
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-bold": theme("colors.gray[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
