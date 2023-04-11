import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${roboto.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
