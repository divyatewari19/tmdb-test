import React, { useEffect } from "react";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";
import MovieList from "../components/MovieList";
import { IMoviesResponse } from "../types";

type Props = {};

const Home = (props: Props) => {
  const {
    data: movies,
    error,
    isLoading,
  }: { data: IMoviesResponse; error: any; isLoading: boolean } = useHttpClient(
    URL.getTrendingMovies,
    HTTP_METHOD.GET
  );

  return (
    <div className="pb-40 mx-[--header-margin-left]">
      <MovieList title="Trending Movies" data={movies && movies.results} />
    </div>
  );
};

export default Home;
