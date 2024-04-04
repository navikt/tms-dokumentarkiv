import { atom } from "nanostores";
import { Locale } from "../hooks/useLanguage";
import { getLanguageFromUrl } from "./../language/utils";

export const isErrorAtom = atom<boolean>(false);
export const languageAtom = atom<Locale>(getLanguageFromUrl());

export function setIsError() {
  isErrorAtom.set(true);
}

export function setLanguage(locale: Locale) {
  languageAtom.set(locale);
}
