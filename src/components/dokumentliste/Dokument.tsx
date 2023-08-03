import { EyeSlashIcon, FilePdfIcon } from "@navikt/aksel-icons";
import { Table } from "@navikt/ds-react";
import { format } from "date-fns";
import styles from "./Dokument.module.css";

export interface dokumentProps {
  tittel: string;
  dokumentInfoId: string;
  dokumenttype: string;
  brukerHarTilgang: boolean;
  eventuelleGrunnerTilManglendeTilgang: [];
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
    <Table.Row key={Math.random.toString()}>
      <Table.HeaderCell scope="row" className={tilgang ? styles.dokumentlenke : styles.dokumentIngenTilgang}>
        {tilgang ? (
          <a href={url} className={styles.lenke}>
            <div className={styles.ikonOgTittel}>
              <FilePdfIcon />
              {dokument.tittel}
            </div>
          </a>
        ) : (
          <div className={styles.ikonOgTittelIngenTilgang}>
            <EyeSlashIcon />
            {dokument.tittel}
          </div>
        )}
      </Table.HeaderCell>
      <Table.DataCell>{innsender}</Table.DataCell>
      <Table.DataCell>{format(new Date(sisteEndret), "dd.MM.yyyy")}</Table.DataCell>
    </Table.Row>
  );
};

export default Dokument;
