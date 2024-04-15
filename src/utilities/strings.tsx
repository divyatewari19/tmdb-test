import * as en from "../assets/locales/strings.en.json";

/**
 *
 * globally initialise language for multi-language support
 */
export const getCurrentLocaleStrings = (locale: string | null) => {
  if (!locale) window.lString = en;
};
