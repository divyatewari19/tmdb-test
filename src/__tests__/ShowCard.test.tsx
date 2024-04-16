import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ShowCard from "../components/ShowCard";
import "@testing-library/jest-dom";
import { KeyCodes } from "../utilities/constants";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("ShowCard", () => {
  beforeEach(() => {
    (mockedNavigate as jest.Mock).mockClear();
  });
  const mockMovieData = {
    id: "1",
    title: "Movie Title",
    release_date: "2022-01-01",
    media_type: "movie",
    overview: "",
    backdrop_path: "",
    vote_average: 7.5,
    poster_path: "/path/to/image.jpg",
  };

  const mockTvShowData = {
    id: "2",
    name: "TV Show Title",
    first_air_date: "2021-01-01",
    media_type: "tv",
    overview: "",
    backdrop_path: "",
    vote_average: 8.0,
    poster_path: "/path/to/image.jpg",
  };

  it("renders movie card correctly", () => {
    const { getByText } = render(
      <Router>
        <ShowCard data={mockMovieData} type="movie" />
      </Router>
    );
    expect(getByText("Movie Title")).toBeInTheDocument();
    expect(getByText("7.5")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();
  });

  it("renders TV show card correctly", () => {
    const { getByText } = render(
      <Router>
        <ShowCard data={mockTvShowData} type="tv" />
      </Router>
    );
    expect(getByText("TV Show Title")).toBeInTheDocument();
    expect(getByText("8.0")).toBeInTheDocument();
    expect(getByText("2021")).toBeInTheDocument();
  });

  it("navigates to details page on click", () => {
    const navigateMock = jest.fn();
    const { getByText } = render(
      <Router>
        <ShowCard data={mockMovieData} type="movie" />
      </Router>
    );
    fireEvent.click(getByText("Movie Title"));
    expect(mockedNavigate).toHaveBeenCalledWith(`/details/movie/1`);
  });

  it("navigates to details page on enter key press", () => {
    const { getByText } = render(
      <Router>
        <ShowCard data={mockTvShowData} type="tv" />
      </Router>
    );
    fireEvent.keyDown(getByText("TV Show Title"), { code: KeyCodes.enter });
    expect(mockedNavigate).toHaveBeenCalledWith(`/details/tv/2`);
  });
});
