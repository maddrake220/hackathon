import Job from "../components/Job";
import { GetJobDataFetcher } from "../hooks/DataFetcher";

const JobContainer = () => {
  const [data, isLoading, isError] = GetJobDataFetcher();
  console.log("jsonObj-->", data);
  //   return <Job loading={isLoading} error={isError} data={result} />;
  return <Job data={data} />;
};

export default JobContainer;
