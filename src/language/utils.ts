import { baseUrlWithLanguage } from "../urls";
import { Locale } from "../hooks/useLanguage";

export const getLanguageFromUrl = (): Locale => {
  const currentUrl = window.location.href.toLowerCase();

  if (currentUrl.includes(baseUrlWithLanguage.en)) {
    return "en";
  } else if (currentUrl.includes(baseUrlWithLanguage.nn)) {
    return "nn";
  } else {
    return "nb";
  }
};
