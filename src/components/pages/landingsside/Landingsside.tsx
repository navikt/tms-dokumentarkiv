import { useStore } from "@nanostores/react";
import { Heading } from "@navikt/ds-react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, setIsError } from "../../../store/store";
import { getAlleJournalposterUrl, getFullmaktForhold, getFullmaktInfoUrl, getSakstemaerUrl } from "../../../urls";
import ContentLoader from "../../loader/ContentLoader";
import RepresentasjonsContainer from "../../representasjon/RepresentasjonsContainer";
import SakstemaListe, { SakstemaElement } from "../../sakstemaliste/SakstemaListe";
import { FullmaktInfoProps } from "../dokumentutlisting/DokumentUtlisting";
import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";
import { logDokumenterEvent, logEvent, logSakstemaEvent } from "../../../utils/amplitude.ts";
import { isProduction } from "../../../api/environment.ts";

type fullmaktsGiverConfig = {
  navn: string;
  ident: string;
};

export interface Fullmakter {
  navn: string;
  ident: string;
  fullmaktsGivere: Array<fullmaktsGiverConfig>;
}

const Landingsside = () => {
  const { data: fullmakter, isLoading: isLoadingFullmakter } = useSWRImmutable<Fullmakter>(
    { path: getFullmaktForhold },
    fetcher,
    {
      shouldRetryOnError: false,
      onError: setIsError,
    },
  );

  const {
    data: sakstemaer,
    isLoading: isLoadingSakstemaer,
    mutate: mutateSakstemaer,
    isValidating,
  } = useSWR<Array<SakstemaElement>>({ path: getSakstemaerUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const { data: fullmaktInfo, mutate: mutateUser } = useSWR<FullmaktInfoProps>({ path: getFullmaktInfoUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const { data: alleJournalPoster } = useSWR({ path: getAlleJournalposterUrl }, fetcher, {
    shouldRetryOnError: false,
  });

  const language = useStore(languageAtom);

  useBreadcrumbs();

  if (isLoadingFullmakter) {
    return null;
  }

  if (sakstemaer) {
    logEvent("sakstemaer", sakstemaer.length);
  }

  if (alleJournalPoster) {
    const antallDokumenter = alleJournalPoster.reduce(
      (acc: number, jp: any) => (jp?.dokument?.dokumentInfoId ? acc + 1 : acc),
      0,
    );
    logEvent("dokumenter", antallDokumenter);
  }

  const isRepresentant = fullmakter && fullmakter.fullmaktsGivere.length > 0;

  const user = fullmaktInfo?.viserRepresentertesData
    ? { navn: fullmaktInfo.representertNavn, ident: fullmaktInfo.representertIdent }
    : { navn: fullmakter?.navn, ident: fullmakter?.ident };

  return (
    <>
      <Heading level="1" size="large">
        {text.dokumentarkiv[language]}
      </Heading>
      {isRepresentant ? (
        <RepresentasjonsContainer
          fullmakter={fullmakter}
          language={language}
          mutateSakstemaer={mutateSakstemaer}
          mutateUser={mutateUser}
          viserRepresentertesData={fullmaktInfo?.viserRepresentertesData}
          user={user}
        />
      ) : null}
      {isValidating ? (
        <ContentLoader />
      ) : (
        <SakstemaListe isRepresentant={isRepresentant} sakstemaer={sakstemaer} isLoading={isLoadingSakstemaer} />
      )}
    </>
  );
};

export default Landingsside;
