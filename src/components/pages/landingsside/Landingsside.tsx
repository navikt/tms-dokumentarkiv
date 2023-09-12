import { useStore } from "@nanostores/react";
import { Heading } from "@navikt/ds-react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, setIsError, setSelectedUser } from "../../../store/store";
import { getFullmaktForhold, getFullmaktInfoUrl, getSakstemaerUrl } from "../../../urls";
import ContentLoader from "../../loader/ContentLoader";
import RepresentasjonsContainer from "../../representasjon/RepresentasjonsContainer";
import SakstemaListe, { SakstemaElement } from "../../sakstemaliste/SakstemaListe";
import { FullmaktInfoProps } from "../dokumentutlisting/DokumentUtlisting";

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
    }
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

  const language = useStore(languageAtom);

  useBreadcrumbs();

  if (isLoadingFullmakter) {
    return null;
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
