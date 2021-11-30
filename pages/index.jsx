import { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Search</title>
        <meta name="description" content="Google Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body search={search} searchInputRef={searchInputRef} />

      <Footer />
    </div>
  );
}
