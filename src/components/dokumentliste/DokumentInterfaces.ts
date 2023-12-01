export interface JournalpostProps {
  tittel: string;
  journalpostId: string;
  journalposttype: string;
  avsender: {
    innloggetBrukerErSelvKilden: boolean;
    type: string;
  };
  mottaker: string | null;
  sisteEndret: string;
  dokumenter: Array<DokumentProps>;
  harVedlegg: boolean;
}

export interface DokumentProps {
  tittel: string;
  dokumentInfoId: string;
  dokumenttype: string;
  brukerHarTilgang: boolean;
  eventuelleGrunnerTilManglendeTilgang: Array<string>;
  variant: string;
}

export interface DokumentlisteProps {
  navn: string;
  kode: string;
  journalposter: Array<JournalpostProps>;
}
