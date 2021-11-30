import Head from "next/head";
import SearchHeader from "../../components/SearchHeader";
import Response from "../../Response";
import { useRouter } from "next/router";
import SearchResults from "../../components/SearchResults";

export default function SearchPage({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Search Results | {router.query.term}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchHeader />

      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: { results: data },
  };
}
