import { useEffect, useState } from "react";
import { getCenter, getJob } from "../utils/apis";

export const GetJobDataFetcher = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getJob()
      .then((v) => {
        setData(v);
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

export const GetCenterDataFetcher = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getCenter()
      .then((v) => {
        setData(v);
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
