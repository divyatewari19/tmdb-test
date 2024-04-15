import React, { useEffect } from "react";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, URL } from "../utilities/constants";
import MovieList from "../components/MovieList";
import { IMovies, ITvShows } from "../types";
import Fallback from "../components/skeletons/Fallback";
import TvShowList from "../components/TvShowList";

type Props = {};

const Home = (props: Props) => {
  const {
    data: movies,
    error: moviesError,
    isLoading: isMoviesLoading,
  }: { data: IMovies; error: any; isLoading: boolean } = useHttpClient(
    URL.getTrendingMovies,
    HTTP_METHOD.GET
  );

  const {
    data: tvshows,
    error: tvshowsError,
    isLoading: isTvShowsLoading,
  }: { data: ITvShows; error: any; isLoading: boolean } = useHttpClient(
    URL.getTrendingTvShows,
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
        data={tvshows && tvshows.results}
        isLoading={isTvShowsLoading}
      />
    </div>
  );
};

export default Home;
