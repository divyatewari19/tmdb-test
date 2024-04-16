import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CastList from "../components/CastList";
import "@testing-library/jest-dom";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("CastList", () => {
  it("renders cast list correctly", () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        profile_path: "/path/to/image.jpg",
        character: "Character Name",
        original_name: "name",
      },
      {
        id: 2,
        name: "Jane Doe",
        profile_path: "/path/to/image.jpg",
        character: "Character Name",
        original_name: "name",
      },
      // Add more test data as needed
    ];
    const { getByText, getByAltText } = render(
      //   <Router>
      <CastList data={data} isLoading={false} />
      //   </Router>
    );
    expect(getByText("Top Cast")).toBeInTheDocument();
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Jane Doe")).toBeInTheDocument();
  });

  it("navigates to person page on enter key press", () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        profile_path: "/path/to/image.jpg",
        character: "Character Name",
        original_name: "name",
      },
    ];
    const { getByText } = render(
      //   <Router>
      <CastList data={data} isLoading={false} />
      //   </Router>
    );
    fireEvent.keyDown(getByText("John Doe"), {
      key: "ArrowRight",
      code: "ArrowRight",
    });
    fireEvent.keyDown(getByText("John Doe"), { key: "Enter", code: "Enter" });
    expect(mockedNavigate).toHaveBeenCalledWith(`/person/1`, {
      state: { name: "John Doe" },
    });
  });
});
