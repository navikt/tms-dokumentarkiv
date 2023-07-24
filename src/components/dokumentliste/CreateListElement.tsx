import { FilePdfIcon } from "@navikt/aksel-icons";
import { Table } from "@navikt/ds-react";
import { format } from "date-fns";
import styles from "./CreateListElement.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { TextLanguages, text } from "../../language/text";

export interface journalposterProps  {
  tittel: string,
  journalpostId: string,
  journalposttype: string,
  avsender: {
    innloggetBrukerErSelvKilden: boolean,
    type: string,
  },
  mottaker?: string|null,
  sisteEndret: string,
  dokumenter?: [
    {
      tittel?: string,
      dokumentInfoId?: string,
      dokumenttype?: string,
      brukerHarTilgang?: boolean,
      eventuelleGrunnerTilManglendeTilgang?: [],
      variant?: string,
    }[],
  ],
  harVedlegg: boolean,
}

export const CreateListElement = ( journalpost: journalposterProps, language: TextLanguages) => {

  const innsender = journalpost.avsender.innloggetBrukerErSelvKilden ? text.deg[language] : text.tredjepart[language];

  return(
    <Table.Row key={journalpost.tittel + journalpost.sisteEndret}>
      <Table.HeaderCell scope="row"><div className={styles.ikonOgTittel}><FilePdfIcon />{journalpost.tittel}</div></Table.HeaderCell>
      <Table.DataCell>{innsender}</Table.DataCell>
      <Table.DataCell>{format(new Date(journalpost.sisteEndret), "dd.MM.yyyy")}</Table.DataCell>
    </Table.Row>
  );
};