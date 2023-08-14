import { TextLanguages, text } from "../../language/text";
import { dokumentUrl } from "../../urls";
import Dokument from "./Dokument";
import Vedlegg from "./Vedlegg";

export interface journalposterProps {
  tittel: string;
  journalpostId: string;
  journalposttype: string;
  avsender: {
    innloggetBrukerErSelvKilden: boolean;
    type: string;
  };
  mottaker: string | null;
  sisteEndret: string;
  dokumenter: [
    {
      tittel: string;
      dokumentInfoId: string;
      dokumenttype: string;
      brukerHarTilgang: boolean;
      eventuelleGrunnerTilManglendeTilgang: Array<string>;
      variant: string;
    }
  ];
  harVedlegg: boolean;
}

export const CreateListElement = (journalpost: journalposterProps, language: TextLanguages) => {
  const url = `${dokumentUrl}/${journalpost.journalpostId}`;

  const innsender =
    journalpost.journalposttype === "UTGAAENDE"
      ? text.fraNav[language]
      : journalpost.dokumenter[0].eventuelleGrunnerTilManglendeTilgang[0] === "skannet_dokument"
      ? text.avTredjepart[language]
      : text.sendtInnAvDeg[language];

  const hasVedlegg = journalpost.dokumenter.length > 1;

  return (
    <li key={Math.random()}>
      <Dokument
        dokument={journalpost.dokumenter[0]}
        innsender={innsender}
        sisteEndret={journalpost.sisteEndret}
        url={`${url}/${journalpost.dokumenter[0].dokumentInfoId}`}
      />
      {hasVedlegg && <Vedlegg dokumenter={journalpost.dokumenter} language={language} baseUrl={url} />}
    </li>
  );
};
