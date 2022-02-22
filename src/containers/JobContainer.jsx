import JobList from "../components/JobList";
import { GetJobDataFetcher } from "../hooks/DataFetcher";

const JobContainer = () => {
  const [data] = GetJobDataFetcher();
  console.log("jsonObj-->", data);
  //   return <Job loading={isLoading} error={isError} data={result} />;
  return <JobList data={data} />;
};

export default JobContainer;
