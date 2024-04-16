import React, { useEffect, useRef, useState } from "react";
import useHttpClient from "../hooks/useHttpClient";
import { HTTP_METHOD, KeyCodes, URL } from "../utilities/constants";
import MovieList from "../components/MovieList";
import { IMovies, ITvShows, TMDBError } from "../types";
import Fallback from "../components/skeletons/Fallback";
import TvShowList from "../components/TvShowList";

type Props = {};

const Home: React.FC<Props> = (props: Props) => {
  const NUM_OF_COMP = 2;
  const {
    data: movies,
    error: moviesError,
    isLoading: isMoviesLoading,
  }: {
    data: IMovies;
    error: TMDBError | undefined;
    isLoading: boolean;
  } = useHttpClient(URL.getTrendingMovies, HTTP_METHOD.GET);

  const {
    data: tvshows,
    error: tvshowsError,
    isLoading: isTvShowsLoading,
  }: {
    data: ITvShows;
    error: TMDBError | undefined;
    isLoading: boolean;
  } = useHttpClient(URL.getTrendingTvShows, HTTP_METHOD.GET);

  const [activeIndex, setActiveIndex] = useState(0);
  // const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Handle keyboard events for circular navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      [
        KeyCodes.ArrowUp,
        KeyCodes.ArrowDown,
        KeyCodes.ArrowLeft,
        "ArrowRight",
      ].indexOf(e.code) > -1
    ) {
      e.preventDefault();
    }

    // if (e.key === KeyCodes.ArrowUp || e.key === KeyCodes.ArrowLeft) {
    //   setActiveIndex(
    //     (prevIndex) => (prevIndex - 1 + NUM_OF_COMP) % NUM_OF_COMP
    //   );
    // } else if (e.key === KeyCodes.ArrowDown || e.key === "ArrowRight") {
    //   setActiveIndex((prevIndex) => (prevIndex + 1) % NUM_OF_COMP);
    // }
    if (e.key === KeyCodes.ArrowUp) {
      setActiveIndex((prevIndex) => {
        console.log("prevIndex", prevIndex);
        if (prevIndex === 1) {
          return NUM_OF_COMP;
        }
        return Math.max(prevIndex - 1, 0);
      });
    } else if (e.key === KeyCodes.ArrowDown) {
      setActiveIndex((prevIndex) => {
        console.log("prevIndex", prevIndex);
        if (prevIndex === NUM_OF_COMP) {
          return 1;
        }
        return Math.min(prevIndex + 1, NUM_OF_COMP);
      });
    }
  };

  // Set initial focus when the component mounts
  // useEffect(() => {
  //   const initialButton = document.querySelector(
  //     `button[data-index="${activeIndex}"]`
  //   );
  //   if (initialButton) {
  //     initialButton.focus();
  //   }
  // }, [activeIndex]);

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="focus:outline-none" tabIndex={-1}>
        <MovieList
          title={window.lString?.str_trending_movies}
          data={movies && movies.results}
          isLoading={isMoviesLoading}
          isActive={activeIndex === 1}
        />
      </div>
      <div tabIndex={-1}>
        <TvShowList
          title={window.lString?.str_trending_tvshows}
          data={tvshows && tvshows.results}
          isLoading={isTvShowsLoading}
          isActive={activeIndex === 2}
        />
      </div>
    </div>
  );
};

export default Home;
