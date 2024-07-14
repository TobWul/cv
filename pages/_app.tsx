import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Noto_Serif } from "next/font/google";

const body = Lora({
  subsets: ["latin-ext"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${body.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
