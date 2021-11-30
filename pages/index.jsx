import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Search</title>
        <meta name="description" content="Google Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body />

      <Footer />
    </div>
  );
}
