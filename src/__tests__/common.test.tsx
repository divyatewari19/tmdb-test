import { URL } from "../utilities/constants";
import {
  getImageURL,
  getCreditsURL,
  getYearFromDate,
  getDurationFromMinutes,
  getStringFromObject,
  getCurrencyFormatedString,
} from "../utilities/common";

describe("getImageURL", () => {
  it("should return image URL with size and path", () => {
    const result = getImageURL("/example.jpg", "thumbnail");
    expect(result).toBe(`${URL.imageThumbnailRoot}thumbnail/example.jpg`); // Replace URL with actual value
  });
});

describe("getCreditsURL", () => {
  it("should return credits URL with mediatype and movieid", () => {
    const result = getCreditsURL("movie", "12345");
    expect(result).toBe(`${URL.root}/movie/12345/credits`); // Replace URL with actual value
  });
});

describe("getYearFromDate", () => {
  it("should return year from date string", () => {
    const result = getYearFromDate("2022-04-15");
    expect(result).toBe("2022");
  });
});

describe("getDurationFromMinutes", () => {
  it("should return hours and minutes from total minutes", () => {
    const result = getDurationFromMinutes(125);
    console.log(result);
    expect(result).toMatchObject({ hours: 2, minutes: 5 });
  });
});

describe("getStringFromObject", () => {
  it("should return comma-separated string from an array of objects with name property", () => {
    const input = [{ name: "John" }, { name: "Doe" }];
    const result = getStringFromObject(input);
    expect(result).toBe("John, Doe");
  });

  it("should return an empty string for an empty array", () => {
    const input: any[] = [];
    const result = getStringFromObject(input);
    expect(result).toBe("");
  });
});

describe("getCurrencyFormatedString", () => {
  it("should return currency-formatted string", () => {
    const result = getCurrencyFormatedString(1234.56);
    console.log(result);
    expect(result).toBe("$1,234.56");
  });
});
