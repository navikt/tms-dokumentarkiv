import { FilePdfIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
import { TextLanguages } from "../../language/text";
import { JournalpostProps } from "./DokumentInterfaces";
import styles from "./Journalpost.module.css";

const Journalpost = ({ journalpost, language }: { journalpost: JournalpostProps; language: TextLanguages }) => {
  const DokumentMedTilgang = ({ tittel, sisteEndret }: { tittel: string; sisteEndret: string }) => {
    return (
      <a href="midlertidig" className={styles.dokumentElement}>
        <div className={styles.ikonWrapper}>
          <FilePdfIcon fontSize="1.75rem" />
        </div>
        <div className={styles.textWrapper}>
          <Heading level="3" size="xsmall" className={styles.lenketekst}>
            {tittel}
          </Heading>
          <BodyShort size="small" className={styles.datoOgInnsender}>
            {format(new Date(sisteEndret), "dd.MM.yyyy")}
          </BodyShort>
        </div>
      </a>
    );
  };

  return (
    <>
      <DokumentMedTilgang tittel={journalpost.dokumenter[0].tittel} sisteEndret={journalpost.sisteEndret} />
    </>
  );
};

export default Journalpost;
