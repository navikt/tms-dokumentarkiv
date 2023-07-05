import { BodyShort, Heading, Ingress } from "@navikt/ds-react";
import styles from "./DokumentUtlisting.module.css";
import Dokumentliste from "../../dokumentliste/Dokumentliste";

const DokumentUtlisting = () => {

  return(
    <>
      <Heading level="2" size="xlarge">Arbeidsavklaringspenger</Heading>
      <Ingress className={styles.ingress}>Her finner du alle journalførte dokumenter. For endringer og informasjon om status, se foreldrepengene mine.</Ingress>
      <BodyShort className={styles.sistEndret}>Sist endret 25.05.2020</BodyShort>
      <Dokumentliste />
    </>
  );
};

export default DokumentUtlisting;