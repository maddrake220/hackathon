import { GetJobDataFetcher } from "../hooks/DataFetcher";
import Main from "../components/Main";

export default function SearchContainer({ sigun }) {
  const [data] = GetJobDataFetcher();
  return (
    <>
      <Main data={data} />
      <div>검색 컨테이너</div>
    </>
  );
}
