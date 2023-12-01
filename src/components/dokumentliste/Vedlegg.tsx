import { ChevronDownIcon, ChevronUpIcon, EyeSlashIcon, PaperclipIcon } from "@navikt/aksel-icons";
import { BodyShort, Button } from "@navikt/ds-react";
import { useState } from "react";
import { TextLanguages, text } from "../../language/text";
import { logNavigereEvent } from "../../utils/amplitude";
import { DokumentProps } from "./DokumentInterfaces";
import styles from "./Vedlegg.module.css";

interface Props {
  dokumenter: Array<DokumentProps>;
  language: TextLanguages;
  baseUrl: string;
}

interface VedleggslenkeProps {
  url: string;
  tittel: string;
  brukerHarTilgang: boolean;
}

const Vedlegg = ({ dokumenter, language, baseUrl }: Props) => {
  const [hideVedlegg, setHideVedlegg] = useState(true);
  const antallVedlegg = dokumenter.length - 1;
  const vedleggsListe = dokumenter.filter((d) => d.dokumenttype === "VEDLEGG");
  const grupperVedlegg = antallVedlegg > 4;

  const handleOnClick = () => {
    setHideVedlegg(!hideVedlegg);
  };

  const VedleggsLenke = ({ url, tittel, brukerHarTilgang }: VedleggslenkeProps) => {
    const tittelMedPdfTag = tittel + ".pdf";

    return brukerHarTilgang ? (
      <a href={url} className={styles.vedlegg} onClick={() => logNavigereEvent("Dokumentlenke", "Vedlegg")}>
        {tittelMedPdfTag}
      </a>
    ) : (
      <div className={styles.vedleggIngenTilgang}>{tittelMedPdfTag + " (Kan ikke vises)"}</div>
    );
  };

  if (grupperVedlegg) {
    return (
      <div className={styles.veddleggsListe}>
        <BodyShort className={styles.tittel}>{text.antallVedlegg[language](antallVedlegg)}</BodyShort>
        <Button
          className={styles.btn}
          variant="secondary-neutral"
          size="xsmall"
          icon={
            hideVedlegg ? (
              <ChevronDownIcon fontSize="1.5rem" aria-hidden />
            ) : (
              <ChevronUpIcon fontSize="1.5rem" aria-hidden />
            )
          }
          onClick={() => handleOnClick()}
        >
          {hideVedlegg ? text.visVedlegg[language] : text.skjulVedlegg[language]}
        </Button>
        <div className={hideVedlegg ? styles.visuallyHidden : null}>
          {vedleggsListe.map((vedlegg: DokumentProps) => (
            <VedleggsLenke
              url={`${baseUrl}/${vedlegg.dokumentInfoId}`}
              tittel={vedlegg.tittel}
              brukerHarTilgang={vedlegg.brukerHarTilgang}
              key={vedlegg.dokumentInfoId}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.veddleggsListe}>
      <BodyShort className={styles.tittel}>{text.antallVedlegg[language](antallVedlegg)}</BodyShort>
      {vedleggsListe.map((vedlegg: DokumentProps) => (
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
