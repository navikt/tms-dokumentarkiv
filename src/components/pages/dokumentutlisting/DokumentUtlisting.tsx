import { useStore } from "@nanostores/react";
import { BodyLong, Heading } from "@navikt/ds-react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, setIsError } from "../../../store/store";
import { getFullmaktInfoUrl, mineSakerApiUrl } from "../../../urls";
import styles from "./DokumentUtlisting.module.css";
import IngenDokumenter from "./IngenDokumenter";
import Disclaimer from "./disclaimer/Disclaimer";
import Lenkepanel from "../../nyttig-og-vite/Lenkepanel";
import TemaLenke from "../../temaside-lenke/TemaLenke";
import Dokumentliste from "../../dokumentliste/Dokumentliste";

export interface FullmaktInfoProps {
  viserRepresentertesData: boolean;
  representertNavn: string;
  representertIdent: string;
}

const DokumentUtlisting = () => {
  const { temakode, journalpostId } = useParams();

  const dokumentlisteUrl = journalpostId
    ? `${mineSakerApiUrl}/sakstema/${temakode}/journalpost/${journalpostId}`
    : `${mineSakerApiUrl}/sakstema/${temakode}/journalposter`;

  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const { data: fullmaktInfo } = useSWR<FullmaktInfoProps>({ path: getFullmaktInfoUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);

  const isContent = dokumentliste?.journalposter.length > 0;

  useBreadcrumbs({
    url: `/dokumentarkiv/tema/${temakode}`,
    title: isContent ? dokumentliste.navn : "...",
    handleInApp: true,
  });

  if (isLoading) {
    return null;
  }

  const temaNavn = isContent && dokumentliste?.navn;

  return (
    <>
      <Heading level="1" size="xlarge">
        {isContent ? dokumentliste?.navn : text.dokumentArkivTittel[language]}
      </Heading>
      {isContent ? (
        <div>
          <BodyLong size="medium" className={styles.ingress}>
            {text.dokumentArkivIngress[language] + " " + temaNavn}
            {fullmaktInfo?.viserRepresentertesData ? (
              <span>{" for " + fullmaktInfo.representertNavn + ". "}</span>
            ) : null}
            <TemaLenke lenketekst={temaNavn} />
          </BodyLong>
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
