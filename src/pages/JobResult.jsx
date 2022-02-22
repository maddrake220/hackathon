import SearchContainer from "../containers/SearchContainer";

export default function JobResult({ sigun }) {
  console.log(sigun);
  return <SearchContainer sigun={sigun} />;
}
