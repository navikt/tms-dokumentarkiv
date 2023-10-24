import { EyeSlashIcon, PaperclipIcon } from "@navikt/aksel-icons";
import styles from "./Vedlegg.module.css";
import { dokumentProps } from "./Dokument";
import { BodyShort } from "@navikt/ds-react";
import { TextLanguages, text } from "../../language/text";
import { logNavigereEvent } from "../../utils/amplitude";

interface Props {
  dokumenter: Array<dokumentProps>;
  language: TextLanguages;
  baseUrl: string;
}

interface VedleggslenkeProps {
  url: string;
  tittel: string;
  brukerHarTilgang: boolean;
}

const Vedlegg = ({ dokumenter, language, baseUrl }: Props) => {
  const antallVedlegg = dokumenter.length - 1;
  const vedleggsListe = dokumenter.filter((d) => d.dokumenttype === "VEDLEGG");

  const VedleggsLenke = ({ url, tittel, brukerHarTilgang }: VedleggslenkeProps) => {
    return brukerHarTilgang ? (
      <a href={url} className={styles.vedlegg} onClick={() => logNavigereEvent("Dokumentlenke", "Vedlegg")}>
        <PaperclipIcon fontSize="1.5rem" />
        {tittel}
      </a>
    ) : (
      <div className={styles.vedleggIngenTilgang}>
        <EyeSlashIcon fontSize="1.5rem" />
        {tittel}
      </div>
    );
  };

  return (
    <div className={styles.veddleggsListe}>
      <BodyShort className={styles.tittel}>{text.antallVedlegg[language](antallVedlegg)}</BodyShort>
      {vedleggsListe.map((vedlegg: dokumentProps) => (
        <VedleggsLenke
          url={`${baseUrl}/${vedlegg.dokumentInfoId}`}
          tittel={vedlegg.tittel}
          brukerHarTilgang={vedlegg.brukerHarTilgang}
          key={vedlegg.dokumentInfoId}
        />
      ))}
    </div>
  );
};

export default Vedlegg;
