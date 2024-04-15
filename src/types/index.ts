
export interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string; //thumbnailUrl
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  media_type: string;
}

export interface ITvShow{
  id: string;
  // title: string;
  name: string
  overview: string;
  poster_path: string; //thumbnailUrl
  backdrop_path: string;
  vote_average: number;
  first_air_date: string;
  media_type: string;
}

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  totalResult: number;
}

export interface ITvShows {
  page: number;
  results: ITvShow[];
  total_pages: number;
  totalResult: number;
}

export interface IGenres {
  id: number;
  name: string;
}

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface IProductionCompanies {
  iso_3166_1: string;
  name: string;
}

export interface IMovieDetails {
  id: number;
  backdrop_path: string;
  genres: IGenres[];
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  revenue: number;
  status: string;
  title: string;
  tagline: string;
  production_countries: IProductionCountries[];
  production_companies: IProductionCompanies[];
  vote_average: number;
  vote_count: number;
}

export interface ICast {
  id: number;
  character: string;
  name: string;
  original_name: string;
  profile_path: string;
}

export interface ICredits {
  id: number;
  cast: ICast[];
}

// export interface IKeyboardEvent {
//   enter:
// }

declare global {
  interface Window {
    lString: Record<string, string>;
  }
}
