import * as en from "../assets/locales/strings.en.json";

/**
 *
 * globally initialise language for multi-language support
 */
export const getCurrentLocaleStrings = (locale: string | null) => {
  console.log(en);
  if (!locale) window.lString = en;
  console.log(window.lString);
};
