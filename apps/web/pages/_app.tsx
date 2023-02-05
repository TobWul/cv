// import "packages/styles/fonts.css";
import "packages/styles/globals.css";
import type { AppProps } from "next/app";
import { Habibi, Space_Grotesk } from "@next/font/google";
import classNames from "classnames";

const habibi = Habibi({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-display",
  display: "auto",
});
const space_grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-body",
  display: "auto",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(habibi.variable, space_grotesk.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
