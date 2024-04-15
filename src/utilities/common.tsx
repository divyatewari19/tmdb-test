import { URL } from "./constants";

export function getImageURL(path: string, size: string) {
  return URL.imageThumbnailRoot + size + path;
}

export function getCreditsURL(mediatype: string, movieid: string) {
  return URL.root + "/" + mediatype + "/" + movieid + "/credits";
}

/**
 * Function to get year from date
 *
 * @param date YYYY-MM-DD
 * @returns YYYY
 */
export function getYearFromDate(date: string) {
  return date.split("-")[0];
}

export function getDurationFromMinutes(mintues: number) {
  let hours = Math.floor(mintues / 60);
  let minutes = mintues % 60;

  return {
    hours,
    mintues,
  };
}

interface IObjectWithName {
  name: string;
}
/**
 * Returns a string of ',' separated names
 * @param arr of object with name property
 */
export function getStringFromObject(arr: IObjectWithName[]) {
  return arr.map((val) => val.name).join(", ");
}

export function getCurrencyFormatedString(value: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(value);
}
