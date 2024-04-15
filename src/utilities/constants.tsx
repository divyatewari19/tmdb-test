export enum HTTP_METHOD {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

export const URL = {
  root: "https://api.themoviedb.org/3",
  getConfig: "https://api.themoviedb.org/3/configuration",
  imageThumbnailRoot: "https://image.tmdb.org/t/p/",
  getTrendingMovies:
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  getMovieDetailsById: "https://api.themoviedb.org/3/movie/",
  getTvDetailsById: "https://api.themoviedb.org/3/tv/",
  getTrendingTvShows:
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
};

export enum ItemType {
  "Tv" = "tv",
  "Movie" = "movie",
  "Cast" = "cast",
}

export enum KeyCodes {
  "enter" = "Enter",
}
