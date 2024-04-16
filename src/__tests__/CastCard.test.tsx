import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CastCard from "../components/CastCard";
import { useNavigate } from "react-router-dom"; // Mock this if necessary
import { KeyCodes } from "../utilities/constants"; // Import the KeyCodes if necessary
import "@testing-library/jest-dom";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const mockData = {
  id: 1,
  name: "John Doe",
  profile_path: "/path/to/image.jpg",
  character: "Character Name",
  original_name: "name",
};

describe("CastCard", () => {
  beforeEach(() => {
    (mockedNavigate as jest.Mock).mockClear();
  });

  it("renders correctly with data", () => {
    const { getByText } = render(<CastCard data={mockData} />);
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Character Name")).toBeInTheDocument();
  });

  it("navigates to person page on click", () => {
    const { getByText } = render(<CastCard data={mockData} />);
    fireEvent.click(getByText("John Doe"));
    expect(mockedNavigate).toHaveBeenCalledWith(`/person/1`, {
      state: { name: "John Doe" },
    });
  });

  it("navigates to person page on enter key press", () => {
    const { getByText } = render(<CastCard data={mockData} />);
    fireEvent.keyDown(getByText("John Doe"), { code: KeyCodes.enter });
    expect(mockedNavigate).toHaveBeenCalledWith(`/person/1`, {
      state: { name: "John Doe" },
    });
  });

  // You can write more test cases for different scenarios, such as when data.profile_path is null or undefined
});
