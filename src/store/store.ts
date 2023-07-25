import { getLanguageFromUrl } from "./../language/utils";
import { atom } from "nanostores";
import { Locale } from "../hooks/useLanguage";

export const isErrorAtom = atom<boolean>(false);
export const languageAtom = atom<Locale>(getLanguageFromUrl());
export const selectedUserAtom = atom<{navn: string | undefined, ident: string | undefined}>({navn: undefined, ident: undefined})

export function setIsError() {
  isErrorAtom.set(true);
}

export function setLanguage(locale: Locale) {
  languageAtom.set(locale);
}

export function setSelectedUser(navn: string | undefined, ident: string | undefined) {
  selectedUserAtom.set({navn, ident});
}