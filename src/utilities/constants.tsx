export enum HTTP_METHOD {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

export const URL = {
  root: "https://api.themoviedb.org/3",
  imageThumbnailRoot: "https://image.tmdb.org/t/p/",
  getTrendingMovies:
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  getMovieDetailsById: "https://api.themoviedb.org/3/movie/",
};

export enum ItemMediaType {
  "TVShow" = "tvShow",
  "Movie" = "movie",
}