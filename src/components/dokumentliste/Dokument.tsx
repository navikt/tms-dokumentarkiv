import { EyeSlashIcon, FilePdfIcon } from "@navikt/aksel-icons";
import { BodyShort } from "@navikt/ds-react";
import { format } from "date-fns";
import styles from "./Dokument.module.css";
import { logNavigereEvent } from "../../utils/amplitude";

export interface dokumentProps {
  tittel: string;
  dokumentInfoId: string;
  dokumenttype: string;
  brukerHarTilgang: boolean;
  eventuelleGrunnerTilManglendeTilgang: Array<string>;
  variant: string;
}

interface Props {
  dokument: dokumentProps;
  innsender: string;
  sisteEndret: string;
  url: string;
}

const Dokument = ({ dokument, innsender, sisteEndret, url }: Props) => {
  const tilgang = dokument.brukerHarTilgang;

  return (
      <>
        {tilgang ? (
          <a href={url} className={styles.dokumentlenke} onClick={() => logNavigereEvent("Dokumentlenke", "Hoveddokument")}>
           <FilePdfIcon fontSize="2rem"/> 
           <div className={styles.textWrapper}>
              {dokument.tittel}
              <BodyShort className={styles.datoOgInnsender}>{format(new Date(sisteEndret), "dd.MM.yyyy")}</BodyShort>
            </div>
          </a>
        ) : (
          <div className={styles.ikkeKlikkbar}>
            <EyeSlashIcon fontSize="2rem"/>
            <div className={styles.textWrapper}>
              {dokument.tittel}
              <BodyShort className={styles.datoOgInnsender}>{format(new Date(sisteEndret), "dd.MM.yyyy")}</BodyShort>
            </div>
          </div>
        )}   
      </>
  );
};

export default Dokument;
