import React, { useEffect } from "react";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";
import MovieList from "../components/MovieList";
import { IMovies } from "../types";
import Loader from "../components/Loader";
import TvShowList from "../components/TvShowList";

type Props = {};

const Home = (props: Props) => {
  const {
    data: movies,
    error,
    isLoading: isMoviesLoading,
  }: { data: IMovies; error: any; isLoading: boolean } = useHttpClient(
    URL.getTrendingMovies,
    HTTP_METHOD.GET
  );

  return (
    <div>
      <MovieList
        title={window.lString?.str_trending_movies}
        data={movies && movies.results}
        isLoading={isMoviesLoading}
      />
      <TvShowList
        title={window.lString?.str_trending_tvshows}
        data={movies && movies.results}
        isLoading={isMoviesLoading}
      />
    </div>
  );
};

export default Home;
