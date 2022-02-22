import CenterList from "../components/CenterList";
import { GetCenterDataFetcher } from "../hooks/DataFetcher";

const CenterContainer = () => {
  const [data, isLoading, isError] = GetCenterDataFetcher();
  console.log("jsonObj-->", data);
  return <CenterList data={data} />;
};

export default CenterContainer;
