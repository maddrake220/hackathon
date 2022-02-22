import Job from "../components/Job";
import { GetFetcher } from "../hooks/DataFetcher";
import convert from "xml-js";

const JobContainer = () => {
  const [data, isLoading, isError] = GetFetcher();

  const result = convert.xml2js(data, { compact: true, spaces: 4 });
  console.log("jsonObj-->", result);
  return <Job loading={isLoading} error={isError} data={result} />;
};

export default JobContainer;
