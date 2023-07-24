import { onLanguageSelect, setAvailableLanguages, setParams } from "@navikt/nav-dekoratoren-moduler";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { baseUrlWithLanguage } from "../urls";
import { languageAtom, setLanguage } from "../store/store";

export type Locale = "nb" | "nn" | "en";

const setDocumentLanguage = (language: Locale) => {
  window.sessionStorage.setItem("language", language);
  window.dispatchEvent(new Event("language"));
  document.documentElement.lang = language;
};

const updateState = (newLanguage: Locale, currentLanguage: Locale) => {
  const replacementUrl = window.location.href.replace(
    baseUrlWithLanguage[currentLanguage],
    baseUrlWithLanguage[newLanguage]
  );
  window.history.replaceState(window.history.state, "", replacementUrl);
};

export const useLanguage = () => {
  const currentLanguage = useStore(languageAtom);

  onLanguageSelect((language) => {
    updateState(language.locale as Locale, currentLanguage);
    setLanguage(language.locale as Locale);
    setDocumentLanguage(language.locale as Locale);
  });

  useEffect(() => {
    setParams({ language: currentLanguage });
    setDocumentLanguage(currentLanguage);
    setAvailableLanguages([
      {
        locale: "nb",
        handleInApp: true,
      },
      {
        locale: "en",
        handleInApp: true,
      },
      {
        locale: "nn",
        handleInApp: true,
      },
    ]);
  }, []);
};
