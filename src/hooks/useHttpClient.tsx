import React, { FC, useEffect, useState } from "react";
import { TMDBError } from "../types";

const useHttpClient = (url: string, method = "get") => {
  console.log(
    "REACT_APP_TMDB_ACCESS_KEY",
    process.env.REACT_APP_TMDB_ACCESS_KEY
  );
  console.log("TMDB_API_KEY", process.env.TMDB_API_KEY);
  const [data, setData] = useState<any>();
  // <T|null>
  const [error, setError] = useState<TMDBError | undefined>();
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
      if (response.ok) {
        setData(data);
        console.log(data);
      } else {
        setError(data);
        console.error("errrr", data);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError({ success: false, status_message: JSON.stringify(err) });
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
