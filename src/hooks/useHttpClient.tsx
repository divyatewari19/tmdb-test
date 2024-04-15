import React, { FC, useEffect, useState } from "react";

const useHttpClient = (url: string, method = "get") => {
  const [data, setData] = useState<any>();
  // <T|null>
  const [error, setError] = useState<any>(false);
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    method: method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_KEY}`,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setIsLoading(false);
      setData(data);
      console.log(data);
    } catch (err) {
      setIsLoading(false);
      setError(err);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();

    // Clean up any ongoing fetch if the URL changes
    return () => {
      setIsLoading(false);
    };
  }, [url, method]);

  // Define a function to refetch data with the same URL
  const refetchData = () => {
    fetchData();
  };

  return {
    data,
    error,
    isLoading,
    refetchData,
  };
};

export default useHttpClient;
