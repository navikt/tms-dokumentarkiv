import amplitude from "amplitude-js";


export const initializeAmplitude = () => {
  amplitude.getInstance().init("default", "", {
    apiEndpoint: "amplitude.nav.no/collect-auto",
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
