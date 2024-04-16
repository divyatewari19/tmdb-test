import React from "react";
import { render } from "@testing-library/react";
import ImageComponent from "../components/ImageComponent";
import { useConfigContext } from "../hooks/useConfigContext";
import "@testing-library/jest-dom";
/**
 * @jest-environment jsdom
 */

jest.mock("../hooks/useConfigContext");

describe("ImageComponent", () => {
  beforeEach(() => {
    // Mocking the useConfigContext hook
    (useConfigContext as any).mockReturnValue({
      config: {
        images: {
          secure_base_url: "https://example.com/",
        },
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders image when imageURL is available", () => {
    const props = {
      size: "size",
      path: "/path/to/image.jpg",
      classes: "image-class",
      title: "Image Title",
    };
    const { getByAltText } = render(<ImageComponent {...props} />);
    const imageElement = getByAltText("Image Title");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "https://example.com/size/path/to/image.jpg"
    );
    expect(imageElement).toHaveClass("image-class");
  });

  it("renders skeleton when imageURL is not available", () => {
    const props = {
      size: "size",
      path: "/path/to/image.jpg",
      classes: "image-class",
      title: "Image Title",
    };
    // Mocking the imageURL to be empty
    (useConfigContext as any).mockReturnValue({ config: {} });
    const { getByTestId } = render(<ImageComponent {...props} />);
    const skeletonElement = getByTestId("skeleton");
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveClass("image-class");
  });
});
