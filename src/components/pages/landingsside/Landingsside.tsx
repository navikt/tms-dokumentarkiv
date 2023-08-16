import { Heading } from "@navikt/ds-react";
import RepresentasjonsContainer from "../../representasjon/RepresentasjonsContainer";
import SakstemaListe, { SakstemaElement } from "../../sakstemaliste/SakstemaListe";
import { useStore } from "@nanostores/react";
import { languageAtom, selectedUserAtom, setIsError, setSelectedUser } from "../../../store/store";
import { text } from "../../../language/text";
import useSWRImmutable from "swr/immutable";
import { getFullmaktForhold, getSakstemaerUrl } from "../../../urls";
import { fetcher } from "../../../api/api";
import useSWR from "swr";
import ContentLoader from "../../loader/ContentLoader";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";

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
      onSuccess: (o) => setSelectedUser(o.navn, o.ident),
    }
  );

  const {
    data: sakstemaer,
    isLoading: isLoadingSakstemaer,
    mutate,
    isValidating,
  } = useSWR<Array<SakstemaElement>>({ path: getSakstemaerUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);
  const representert = useStore(selectedUserAtom);

  useBreadcrumbs([], language);

  if (isLoadingFullmakter) {
    return null;
  }

  const isRepresentant = fullmakter && fullmakter.fullmaktsGivere.length > 0;

  return (
    <>
      <Heading level="2" size="large">
        {text.dokumentarkiv[language]}
      </Heading>
      {isRepresentant ? <RepresentasjonsContainer fullmakter={fullmakter} language={language} mutate={mutate} /> : null}
      {isValidating ? (
        <ContentLoader />
      ) : (
        <SakstemaListe
          isRepresentant={isRepresentant}
          navn={representert.navn}
          sakstemaer={sakstemaer}
          isLoading={isLoadingSakstemaer}
        />
      )}
    </>
  );
};

export default Landingsside;
