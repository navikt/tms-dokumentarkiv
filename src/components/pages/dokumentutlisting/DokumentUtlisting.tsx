import { useStore } from "@nanostores/react";
import { BodyLong, BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, setIsError } from "../../../store/store";
import { getFullmaktInfoUrl, getJournalposterUrl } from "../../../urls";
import Dokumentliste from "../../dokumentliste/Dokumentliste";
import styles from "./DokumentUtlisting.module.css";
import IngenDokumenter from "./IngenDokumenter";
import Disclaimer from "./disclaimer/Disclaimer";
import Lenkepanel from "../../nyttig-og-vite/Lenkepanel";
import TemaLenke from "../../temaside-lenke/TemaLenke";

export interface FullmaktInfoProps {
  viserRepresentertesData: boolean;
  representertNavn: string;
  representertIdent: string;
}

const DokumentUtlisting = () => {
  const { temakode } = useParams();
  //const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;
  const dokumentlisteUrl = `${getJournalposterUrl}/sakstemakode`;

  
  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const { data: fullmaktInfo } = useSWR<FullmaktInfoProps>(
    { path: getFullmaktInfoUrl },
    fetcher,
    {
      shouldRetryOnError: false,
      onError: setIsError,
    }
  );

  const language = useStore(languageAtom);

  const isContent = dokumentliste?.length > 0;

  useBreadcrumbs({
    url: `/dokumentarkiv/tema/${temakode}`,
    title: isContent ? dokumentliste[0].navn : "...",
    handleInApp: true,
  });

  if (isLoading) {
    return null;
  }

  const temaNavn = isContent && dokumentliste[0]?.navn;
  const dato = isContent && format(new Date(dokumentliste[0]?.journalposter[0].sisteEndret), "dd.MM.yyyy");

  return (
    <>
      <Heading level="1" size="xlarge">
        {isContent ? dokumentliste[0]?.navn : text.dokumentArkivTittel[language]}
      </Heading>
      {isContent ? (
        <div>
          <BodyShort className={styles.sistEndret}>{text.sistEndret[language] + " " + dato}</BodyShort>
          <BodyLong size="medium" className={styles.ingress}>
            {text.dokumentArkivIngress[language] + " " + temaNavn}
            {fullmaktInfo?.viserRepresentertesData ? <span>{" for " + fullmaktInfo.representertNavn}</span> : null}
          </BodyLong>
          <TemaLenke lenketekst={temaNavn}/>
          <Dokumentliste />
          <Lenkepanel />
        </div>
      ) : (
        <IngenDokumenter />
      )}
      <Disclaimer />
    </>
  );
};

export default DokumentUtlisting;
