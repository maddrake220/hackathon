import Main from "../components/Main";
import { GetFetcher } from "../hooks/DataFetcher";
import convert from "xml-js";

const MainContainer = () => {
  const [data, isLoading, isError] = GetFetcher();

  const result = convert.xml2js(data, { compact: true, spaces: 4 });
  console.log("jsonObj-->", result);
  return <Main loading={isLoading} error={isError} data={result} />;
};

export default MainContainer;
