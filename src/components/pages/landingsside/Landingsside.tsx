import { Heading } from "@navikt/ds-react";
import RepresentasjonsContainer, { fullmakterProps } from "../../representasjon/RepresentasjonsContainer";
import SakstemaListe from "../../sakstemaliste/SakstemaListe";
import Disclaimer from "./disclaimer/Disclaimer";
import { useStore } from "@nanostores/react";
import { languageAtom, selectedUserAtom, setIsError, setSelectedUser } from "../../../store/store";
import { text } from "../../../language/text";
import useSWRImmutable from "swr/immutable";
import { getFullmaktForhold } from "../../../urls";
import { fetcher } from "../../../api/api";

const Landingsside = () => {
  const { data: fullmakter, isLoading } = useSWRImmutable<fullmakterProps>({ path: getFullmaktForhold }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
    onSuccess: (fullmakter) => setSelectedUser(fullmakter.navn, fullmakter.ident),
  });

  const language = useStore(languageAtom);
  const representert = useStore(selectedUserAtom);

  if(isLoading) {
    return null;
  }

  const isRepresentant = fullmakter?.fullmaktsGivere?.length;

  return (
    <>
      <Heading level="2" size="xlarge">{text.dokumentarkiv[language]}</Heading>
      {isRepresentant ? <RepresentasjonsContainer fullmakter={fullmakter} language={language}/> : null}
      <SakstemaListe isRepresentant={isRepresentant} navn={representert.navn}/>
      <Disclaimer />
    </>
  );
};

export default Landingsside;
