import JobList from "../components/JobList";
import { GetJobDataFetcher } from "../hooks/DataFetcher";

const JobContainer = () => {
  const [data] = GetJobDataFetcher();
  return <JobList data={data} />;
};

export default JobContainer;
