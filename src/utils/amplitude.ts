import { init, track } from "@amplitude/analytics-browser";

export const initAmplitude = () => {
  init("default", undefined, {
    serverUrl: "https://amplitude.nav.no/collect-auto",
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};

export const logNavigereEvent = (komponent: string, kategori?: string, lenketekst?: string) => {
  track("navigere", { app: "tms-dokumentarkiv", komponent: komponent, kategori: kategori, lenketekst: lenketekst });
};
