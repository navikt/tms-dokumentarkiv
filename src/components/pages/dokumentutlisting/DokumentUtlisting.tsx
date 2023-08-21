import { useStore } from "@nanostores/react";
import { BodyShort, Heading, Ingress } from "@navikt/ds-react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, selectedUserAtom, setIsError } from "../../../store/store";
import { getJournalposterUrl } from "../../../urls";
import Dokumentliste from "../../dokumentliste/Dokumentliste";
import styles from "./DokumentUtlisting.module.css";
import IngenDokumenter from "./IngenDokumenter";
import Disclaimer from "./disclaimer/Disclaimer";

const DokumentUtlisting = () => {
  const { temakode } = useParams();
  const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;
  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);
  const user = useStore(selectedUserAtom);

  const isContent = dokumentliste?.length > 0;

  useBreadcrumbs(
    [
      {
        url: `/dokumentarkiv/tema/${temakode}`,
        title: isContent ? dokumentliste[0].navn : "...",
        handleInApp: true,
      },
    ],
    language
  );

  if (isLoading) {
    return null;
  }

  const temaNavn = isContent && dokumentliste[0]?.navn;
  const dato = isContent && format(new Date(dokumentliste[0]?.journalposter[0].sisteEndret), "dd.MM.yyyy");

  return (
    <>
      <Heading level="2" size="xlarge">
        {isContent ? dokumentliste[0]?.navn : text.dokumentArkivTittel[language]}
      </Heading>
      {isContent ? (
        <div>
          <BodyShort className={styles.sistEndret}>{text.sistEndret[language] + " " + dato}</BodyShort>
          <Ingress className={styles.ingress}>{text.dokumentArkivIngress[language] + " " + temaNavn + " for " + user.navn}</Ingress>
          <Dokumentliste />{" "}
        </div>
      ) : (
        <IngenDokumenter />
      )}
      <Disclaimer />
    </>
  );
};

export default DokumentUtlisting;
