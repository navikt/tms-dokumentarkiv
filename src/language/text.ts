type Languages = {
  nb: string,
  nn: string,
  en: string,
}

export type TextLanguages = keyof Languages;

export const text = {
  dokumentarkiv: {
    nb: "Dokumentarkiv",
    nn: "Dokumentarkiv",
    en: "Document archive",
  },
  antallVedlegg: {
    nb: (antall: number) => `Dokumentet har ${antall} vedlegg`,
    nn: (antall: number) => `Dokumentet har ${antall} vedlegg`,
    en: (antall: number) => `The document has ${antall} attachments`,
  },
  dokumentArkivTittel: {
    nb: "Dokumentarkiv",
    nn: "Dokumentarkiv",
    en: "Document archive",
  },
  dokumentTittel: {
    nb: "Dokumenter",
    nn: "Dokumenter",
    en: "Documents",
  },
  dokumentArkivIngress: {
    nb: "Her finner du alle journalførte dokumenter relatert til",
    nn: "Her finner du alle journalførte dokumenter relatert til",
    en: "Here you will find all archived dokuments related to ",
  },
  sendtInnAvDeg: {
    nb: "Sendt inn av deg",
    nn: "Sendt inn av deg",
    en: "Sent by you",
  },
  fraNav: {
    nb: "Fra NAV",
    nn: "Fra NAV",
    en: "From NAV",
  },
  avTredjepart: {
    nb: "Fra tredjepart",
    nn: "Fra tredjepart",
    en: "By third party",
  },
  lasterInn: {
    nb: "Tredjepart",
    nn: "Tredjepart",
    en: "Third party",
  },
  representasjonLabel: {
    nb: "Hvem vil du bruke dokumentarkivet på vegne av?",
    nn: "Hvem vil du bruke dokumentarkivet på vegne av?",
    en: "Which users documents would you like to view?",
  },
  representasjonDescription: {
    nb: "Velg mellom dine representerte for å se dokumentarkivet deres.",
    nn: "Velg mellom dine representerte for å se dokumentarkivet deres.",
    en: "Choose between the people you represent to view their documents.",
  },
  sistEndret: {
    nb: "Sist endret",
    nn: "Sist endret",
    en: "Last changed at",
  },
  snarveier: {
    nb: "Snarveier",
    nn: "Snarveier",
    en: "Shortcuts",
  },
  saksbehandlingstider: {
    nb: "Saksbehandlingstider",
    nn: "Saksbehandlingstider",
    en: "Processing times",
  },
  sendKlage: {
    nb: "Send klage på vedtak",
    nn: "Send klage på vedtak",
    en: "send an appeal against the decision",
  },
  dokumentDisclaimerTittel: {
    nb: "Derfor kan du ikke se alle dokumentene",
    nn: "Derfor kan du ikke se alle dokumentene",
    en: "Derfor kan du ikke se alle dokumentene",
  },
  dokumentDisclaimerIngress: {
    nb: "Det er to typer dokumenter vi foreløpig ikke kan vise deg:",
    nn: "Det er to typer dokumenter vi foreløpig ikke kan vise deg:",
    en: "Det er to typer dokumenter vi foreløpig ikke kan vise deg:",
  },
  documentDisclaimerListepunktEn: {
    nb: "Papirer du har sendt til NAV i posten",
    nn: "Papirer du har sendt til NAV i posten",
    en: "Papirer du har sendt til NAV i posten",
  },
  documentDisclaimerListepunktTo: {
    nb: "Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.",
    nn: "Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.",
    en: "Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.",
  },
  landingssideDisclaimerTittel: {
    nb: "Finner du ikke det du leter etter?",
    nn: "Finner du ikke det du leter etter?",
    en: "Finner du ikke det du leter etter?",
  },
  landingssideDisclaimerListepunktEn: {
    nb: "Har du sendt inn en søknad per post tar det litt tid før saken vises her.",
    nn: "Har du sendt inn en søknad per post tar det litt tid før saken vises her.",
    en: "Har du sendt inn en søknad per post tar det litt tid før saken vises her.",
  },
  landingssideDisclaimerListepunktTo: {
    nb: "Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.",
    nn: "Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.",
    en: "Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.",
  },
  landingssideDisclaimerListepunktTre: {
    nb: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    nn: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    en: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
  },
  landingssideDisclaimerListepunktFire: {
    nb: "Finner du ikke dokumentet det du leter etter under sykepenger eller sykmelding kan du sjekke Sykefravær. Ta kontakt dersom det er noe du lurer på.",
    nn: "Finner du ikke dokumentet det du leter etter under sykepenger eller sykmelding kan du sjekke Sykefravær. Ta kontakt dersom det er noe du lurer på.",
    en: "Finner du ikke dokumentet det du leter etter under sykepenger eller sykmelding kan du sjekke Sykefravær. Ta kontakt dersom det er noe du lurer på.",
  },
  landingssideDisclaimerTaKontakt: {
    nb: "Ta kontakt dersom det er noe du lurer på.",
    nn: "Ta kontakt dersom det er noe du lurer på.",
    en: "Ta kontakt dersom det er noe du lurer på.",
  },
  ingenSaker: {
    nb: "",
    nn: "",
    en: "",
  },
  ingenSakerTittel: {
    nb: "Du har foreløpig ingen registrerte saker",
    nn: "Du har foreløpig ingen registrerte saker",
    en: "You have no registered cases",
  },
};
