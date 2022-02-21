import { useEffect, useState } from "react";
import { getDatas } from "../utils/apis";

export const GetFetcher = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getDatas()
      .then((v) => {
        setData(v.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(e);
        setIsLoading(false);
      });
    return () => setIsLoading(false);
  }, []);
  return [data, isLoading, isError];
};
