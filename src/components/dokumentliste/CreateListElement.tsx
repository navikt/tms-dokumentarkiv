import { TextLanguages, text } from "../../language/text";
import { dokumentUrl } from "../../urls";
import Dokument, { dokumentProps } from "./Dokument";

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
      eventuelleGrunnerTilManglendeTilgang: [];
      variant: string;
    }
  ];
  harVedlegg: boolean;
}


export const CreateListElement = (journalpost: journalposterProps, language: TextLanguages) => {
  const url = `${dokumentUrl}/${journalpost.journalpostId}`;
  const innsender = journalpost.avsender ? (journalpost.avsender.innloggetBrukerErSelvKilden ? text.deg[language] : text.tredjepart[language]) : text.tredjepart[language];
  const listeElement = journalpost;


  return (
    <>
      {listeElement && listeElement?.dokumenter?.map((dokument: dokumentProps) => (
        <Dokument 
          dokument={dokument} 
          innsender={innsender} 
          sisteEndret={journalpost.sisteEndret}
          url={`${url}/${dokument.dokumentInfoId}`}
        />
      ))}
    </>
  );
};
