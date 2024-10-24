import amplitude from "amplitude-js";
import { isProduction } from "../api/environment.ts";

export const initializeAmplitude = () => {
  amplitude.getInstance().init("default", "", {
    apiEndpoint: "amplitude.nav.no/collect-auto",
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  });
};

export function logNavigereEvent(komponent: string, kategori?: string, lenketekst?: string) {
  amplitude.getInstance().logEvent("navigere", {
    app: "tms-dokumentarkiv",
    komponent: komponent,
    kategori: kategori,
    lenketekst: lenketekst,
  });
}

export function logEvent(event: string, antall: number) {
  if (isProduction) {
    amplitude.getInstance().logEvent(event, {
      app: "tms-dokumentarkiv",
      antall: antall,
    });
  }

  return null;
}

export function logSakstemaEvent(kode: string, antall: number) {
  if (isProduction) {
    amplitude.getInstance().logEvent("sakstema", {
      app: "tms-dokumentarkiv",
      type: "dokumenter",
      sakstema: kode,
      antall: antall,
    });
  }

  return null;
}
