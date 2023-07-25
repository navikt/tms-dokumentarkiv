import useSWRImmutable from "swr/immutable";
import useSWR, { mutate, useSWRConfig } from 'swr'
import { fetcher } from "../../api/api";
import { selectedUserAtom, setIsError } from "../../store/store";
import { getSakstemaerUrl } from "../../urls";
import styles from "./SakstemaListe.module.css";
import SakstemaListeElement from "./SakstemaListeElement";
import { useEffect } from "react";

export interface SakstemaElement {
  navn: string,
  kode: string,
  sistEndret: string,
  detaljvisningUrl: string
}

interface Props {
  isRepresentant: number | undefined,
  navn: string | undefined
}

const SakstemaListe = ({isRepresentant, navn}: Props) => {

  const { data: sakstemaer, isLoading } = useSWRImmutable({ path: getSakstemaerUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
    //revalidateOnMount: true
  });

  useEffect(() => {
    mutate(getSakstemaerUrl)
  }, [selectedUserAtom]);

  if(isLoading) {
    return null;
  }

  return (
    <>
      {isRepresentant && <h2>Du bruker nå dokumentarkivet på vegne av {navn}</h2>}
      <ul className={styles.liste}>
        {sakstemaer?.map((sakstema: SakstemaElement) => (
          <SakstemaListeElement sakstema={sakstema}/>
        ))}
      </ul>
    </>
  );
};

export default SakstemaListe;