import { EyeSlashIcon, FilePdfIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
import { TextLanguages, text } from "../../language/text";
import { dokumentUrl } from "../../urls";
import { JournalpostProps } from "./DokumentInterfaces";
import styles from "./Journalpost.module.css";
import Vedlegg from "./Vedlegg";

const Journalpost = ({
  journalpost,
  language,
  border,
}: {
  journalpost: JournalpostProps;
  language: TextLanguages;
  border: boolean;
}) => {
  const baseDokumentUrlForJournalpost = `${dokumentUrl}/${journalpost.journalpostId}`;
  const hasVedlegg = journalpost.dokumenter.length > 1;

  const DokumentMedTilgang = ({
    dokumentId,
    tittel,
    sisteEndret,
  }: {
    dokumentId: string;
    tittel: string;
    sisteEndret: string;
  }) => {
    const fullstendigDokumentUrl = `${baseDokumentUrlForJournalpost}/${dokumentId}`;

    return (
      <a href={fullstendigDokumentUrl} className={`${styles.dokumentElement} ${styles.hover}`}>
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

  const DokumentUtenTilgang = ({ tittel, sisteEndret }: { tittel: string; sisteEndret: string }) => {
    return (
      <div className={`${styles.dokumentElement} ${styles.ikkeTilgang}`}>
        <div className={styles.ikonWrapper}>
          <EyeSlashIcon fontSize="1.75rem" />
        </div>
        <div className={styles.textWrapper}>
          <BodyShort size="medium" className={styles.lenketekst}>
            {tittel}
          </BodyShort>
          <BodyShort size="small" className={styles.datoOgInnsender}>
            {format(new Date(sisteEndret), "dd.MM.yyyy")}
          </BodyShort>
          <BodyShort size="small" className={styles.dokumentKanIkkeVises}>
            {text.dokumentKanIkkeVises[language]}
          </BodyShort>
        </div>
      </div>
    );
  };

  return (
    <li key={journalpost.journalpostId}>
      {journalpost.dokumenter.map((dokument) => {
        if (dokument.dokumenttype === "HOVED") {
          return dokument.brukerHarTilgang ? (
            <DokumentMedTilgang
              dokumentId={dokument.dokumentInfoId}
              tittel={dokument.tittel}
              sisteEndret={journalpost.sisteEndret}
            />
          ) : (
            <DokumentUtenTilgang tittel={dokument.tittel} sisteEndret={journalpost.sisteEndret} />
          );
        }
      })}
      {hasVedlegg && (
        <Vedlegg dokumenter={journalpost.dokumenter} language={language} baseUrl={baseDokumentUrlForJournalpost} />
      )}
      {border ? <div className={styles.border} /> : null}
    </li>
  );
};

export default Journalpost;
