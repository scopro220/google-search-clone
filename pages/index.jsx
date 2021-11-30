import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Search</title>
        <meta name="description" content="Google Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body />

      {/* <Footer /> */}
    </div>
  );
}
