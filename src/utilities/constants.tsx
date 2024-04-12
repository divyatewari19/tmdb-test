export enum HTTP_METHOD {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

export const URL = {
  root: "https://api.themoviedb.org/3",
  imageThumbnailRoot: "https://image.tmdb.org/t/p/w440_and_h660_face",
  getTrendingMovies:
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
};
