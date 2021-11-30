import Head from "next/head";
import SearchHeader from "../../components/SearchHeader";

export default function SearchPage() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchHeader />

      {/* <SearchResults /> */}
    </div>
  );
}
