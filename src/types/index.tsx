export interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string; //thumbnailUrl
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  // videoUrl: string;
  // duration: string;
  // genre: string;
}

export interface IMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  totalResult: number;
}
