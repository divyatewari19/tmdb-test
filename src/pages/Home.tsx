import React, { useEffect } from "react";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";
import MovieList from "../components/MovieList";
import { IMovies } from "../types";

type Props = {};

const Home = (props: Props) => {
  const {
    data: movies,
    error,
    isLoading,
  }: { data: IMovies; error: any; isLoading: boolean } = useHttpClient(
    URL.getTrendingMovies,
    HTTP_METHOD.GET
  );

  return (
    <div>
      <MovieList title="Trending Movies" data={movies && movies.results} />
    </div>
  );
};

export default Home;
