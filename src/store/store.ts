import { getLanguageFromUrl } from "./../language/utils";
import { atom } from "nanostores";
import { Locale } from "../hooks/useLanguage";
import { SakstemaElement } from "../components/sakstemaliste/SakstemaListe";

export const isErrorAtom = atom<boolean>(false);
export const languageAtom = atom<Locale>(getLanguageFromUrl());
export const selectedUserAtom = atom<{ navn: string | undefined; ident: string | undefined }>({
  navn: undefined,
  ident: undefined,
});
export const originalUserAtom = atom<{ navn: string | undefined; ident: string | undefined }>({
  navn: undefined,
  ident: undefined,
});
export const sakstemalisteAtom = atom<Array<SakstemaElement>>([]);

export function setIsError() {
  isErrorAtom.set(true);
}

export function setLanguage(locale: Locale) {
  languageAtom.set(locale);
}

export function setSelectedUser(navn: string | undefined, ident: string | undefined) {
  selectedUserAtom.set({ navn, ident });
}

export function setOriginalUser(navn: string | undefined, ident: string | undefined) {
  originalUserAtom.set({ navn, ident });
}

export function setSakstemaliste(liste: Array<SakstemaElement>) {
  sakstemalisteAtom.set(liste)
}