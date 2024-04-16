import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ShowCard from "../components/ShowCard";
import "@testing-library/jest-dom";

describe("ShowCard", () => {
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
});
