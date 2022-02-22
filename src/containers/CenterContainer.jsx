import CenterList from "../components/CenterList";
import { GetCenterDataFetcher } from "../hooks/DataFetcher";

const CenterContainer = () => {
  const [data] = GetCenterDataFetcher();
  console.log("jsonObj-->", data);
  return <CenterList data={data} />;
};

export default CenterContainer;
