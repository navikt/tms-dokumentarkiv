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
    en: "Here you will find all archived documents related to",
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
  representasjonValgtBruker: {
    nb: "Du bruker nå dokumentarkivet på vegne av ",
    nn: "Du bruker nå dokumentarkivet på vegne av ",
    en: "You are now viewing the document archive on behalf of ",
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
    en: "Send an appeal against the decision",
  },
  dokumentDisclaimerTittel: {
    nb: "Dokumenter vi foreløpig ikke kan vise deg:",
    nn: "Dokumenter vi foreløpig ikke kan vise deg:",
    en: "Not all types of documents are able to be viewed",
  },
  documentDisclaimerListepunktEn: {
    nb: "Papirer du har sendt til NAV i posten",
    nn: "Papirer du har sendt til NAV i posten",
    en: "Documents sent to NAV by mail",
  },
  documentDisclaimerListepunktTo: {
    nb: "Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.",
    nn: "Dokumenter som gjelder saken din, men som er sendt av andre på vegne av deg. Det kan for eksempel være en lege, advokat, verge eller fullmektig.",
    en: "Documents regarding your case, sent by others on your behalf. This could mean that it was sent by a doctor, laywer or legal guardian.",
  },
  landingssideDisclaimerTittel: {
    nb: "Finner du ikke det du leter etter?",
    nn: "Finner du ikke det du leter etter?",
    en: "Do you not find what you were looking for?",
  },
  landingssideDisclaimerListepunktEn: {
    nb: "Har du sendt inn en søknad per post tar det litt tid før saken vises her.",
    nn: "Har du sendt inn en søknad per post tar det litt tid før saken vises her.",
    en: "If you have sent an application by mail it will take some time before it is shown here",
  },
  landingssideDisclaimerListepunktTo: {
    nb: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    nn: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    en: "For contribution matters, we are only able to present documents starting from 2022",
  },
  landingssideDisclaimerTekstDel1: {
    nb: "Ta ",
    nn: "Ta ",
    en: "",
  },
  landingssideDisclaimerLenketekst: {
    nb: "kontakt",
    nn: "kontakt",
    en: "Contact",
  },
  landingssideDisclaimerTekstDel2: {
    nb: " dersom det er noe du lurer på.",
    nn: " dersom det er noe du lurer på.",
    en: " us if you have any questions.",
  },
  ingenSakerTittel: {
    nb: "Du har foreløpig ingen registrerte saker",
    nn: "Du har foreløpig ingen registrerte saker",
    en: "You have no registered cases",
  },
  representantIngenSakerTittel: {
    nb: "Denne brukeren har foreløpig ingen registrerte saker",
    nn: "Denne brukeren har foreløpig ingen registrerte saker",
    en: "This user has no registered cases",
  },
  ingenSakerListeTittel: {
    nb: "Finner du ikke det du leter etter?",
    nn: "Finner du ikke det du leter etter?",
    en: "Can't find what you're looking for?",
  },
  ingenSakerListe1: {
    nb: "Har du sendt inn en søknad per post tar det litt tid før saken vises her. Du kan likevel ettersende dokumenter.",
    nn: "Har du sendt inn en søknad per post tar det litt tid før saken vises her. Du kan likevel ettersende dokumenter.",
    en: "If you have sent an application by mail it will take some time before it is shown on this page. You can still send additional documentation.",
  },
  ingenSakerListe3: {
    nb: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    nn: "For bidragssaker kan du kun se dokumenter fra starten av 2022.",
    en: "For contribution matters, we are only able to present documents starting from 2022.",
  },
  ingenSakerTaKontakt: {
    nb: "Ta kontakt dersom det er noe du lurer på.",
    nn: "Ta kontakt dersom det er noe du lurer på.",
    en: "Contact us if you have any questions.",
  },
  minSideKnapp: {
    nb: "Gå til Min Side",
    nn: "Gå til Mi Side",
    en: "Go to My Page",
  },
  tilbakeKnapp: {
    nb: "Tilbake til forside dokumentarkiv",
    nn: "Tilbake til forside dokumentarkiv",
    en: "Back to document archive front page",
  },
  ingenDokumenter: {
    nb: "Du har foreløpig ingen dokumenter vi kan vise",
    nn: "Du har foreløpig ingen dokumenter vi kan vise",
    en: "You currently have no documents to show",
  },
  nyttigOgVite: {
    nb: "Nyttig å vite",
    nn: "Nyttig å vite",
    en: "Useful information",
  },
  lenke1: {
    nb: "Saksbehandlingstider",
    nn: "Saksbehandlingstider",
    en: "Processing times",
  },
  lenke2: {
    nb: "Klage på vedtak",
    nn: "Klage på vedtak",
    en: "Appeal against decisions",
  },
  lenke3: {
    nb: "Kontakt oss",
    nn: "Kontakt oss",
    en: "Contact us",
  },
};
