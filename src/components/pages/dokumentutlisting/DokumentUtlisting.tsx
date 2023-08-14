import { BodyShort, Heading, Ingress } from "@navikt/ds-react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import { languageAtom, setIsError } from "../../../store/store";
import { getJournalposterUrl } from "../../../urls";
import Dokumentliste from "../../dokumentliste/Dokumentliste";
import Snarveier from "../../snarveier/Snarveier";
import styles from "./DokumentUtlisting.module.css";
import Disclaimer from "./disclaimer/Disclaimer";
import { useStore } from "@nanostores/react";
import { text } from "../../../language/text";
import { format } from "date-fns";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";

const DokumentUtlisting = () => {
  const { temakode } = useParams();
  const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;
  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);

  useBreadcrumbs(
    [
      {
        url: `/dokumentarkiv/tema/${temakode}`,
        title: dokumentliste ? dokumentliste[0].navn : "...",
        handleInApp: true,
      },
    ],
    language
  );

  if (isLoading) {
    return null;
  }

  const temaNavn = dokumentliste && dokumentliste[0].navn;
  const dato = dokumentliste && format(new Date(dokumentliste[0].journalposter[0].sisteEndret), "dd.MM.yyyy")

  return (
    <>
      <Heading level="2" size="xlarge">
        {dokumentliste ? dokumentliste[0].navn : text.dokumentArkivTittel[language]}
      </Heading>      
      <BodyShort className={styles.sistEndret}>{text.sistEndret[language] + " " + dato}</BodyShort>
      <Ingress className={styles.ingress}>
        {text.dokumentArkivIngress[language] + " " +  temaNavn}
      </Ingress>
      <Dokumentliste />
      <Snarveier />
      <Disclaimer />
    </>
  );
};

export default DokumentUtlisting;
