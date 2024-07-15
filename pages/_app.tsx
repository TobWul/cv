import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Lora } from "next/font/google";

const body = Lora({
  subsets: ["latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const sans = DM_Sans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${body.variable} ${sans.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
