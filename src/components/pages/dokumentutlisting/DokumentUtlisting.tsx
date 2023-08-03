import { BodyShort, Heading, Ingress } from "@navikt/ds-react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import { setIsError } from "../../../store/store";
import { getJournalposterUrl } from "../../../urls";
import Dokumentliste from "../../dokumentliste/Dokumentliste";
import Snarveier from "../../snarveier/Snarveier";
import styles from "./DokumentUtlisting.module.css";
import Disclaimer from "./disclaimer/Disclaimer";

const DokumentUtlisting = () => {
  const { temakode } = useParams();
  const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;

  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Heading level="2" size="xlarge">
        {dokumentliste ? dokumentliste[0].navn : "Dokumentliste"}
      </Heading>
      <Ingress className={styles.ingress}>
        Her finner du alle journalførte dokumenter. For endringer og informasjon om status, se foreldrepengene mine.
      </Ingress>
      <BodyShort className={styles.sistEndret}>Sist endret 25.05.2020</BodyShort>
      <Dokumentliste />
      <Snarveier />
      <Disclaimer />
    </>
  );
};

export default DokumentUtlisting;
