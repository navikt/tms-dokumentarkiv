import useSWR, { mutate } from 'swr'
import { fetcher } from "../../api/api";
import { selectedUserAtom, setIsError, setSakstemaliste } from "../../store/store";
import { getSakstemaerUrl } from "../../urls";
import styles from "./SakstemaListe.module.css";
import SakstemaListeElement from "./SakstemaListeElement";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import React from 'react';
import ContentLoader from '../loader/ContentLoader';

export interface SakstemaElement {
  navn: string,
  kode: string,
  sistEndret: string,
  detaljvisningUrl: string
}

interface SakstemaerProps {
  sakstemaer: Array<SakstemaElement>;
}

interface Props {
  isRepresentant: number | undefined,
  navn: string | undefined
}

const SakstemaListe = ({isRepresentant, navn}: Props) => {

  const { data: sakstemaer, isLoading, mutate, isValidating } = useSWR({ path: getSakstemaerUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const user = useStore(selectedUserAtom)

  useEffect(() => {
    mutate()
    console.log("refetch")
  }, [user]);

  if(isLoading) {
    return null;
  }

  return (
    <>
      {isRepresentant && <h2>Du bruker nå dokumentarkivet på vegne av {navn}</h2>}
      {isValidating ? <ContentLoader /> : 
      <ul className={styles.liste}>
        {sakstemaer?.map((sakstema: SakstemaElement) => (
          <SakstemaListeElement sakstema={sakstema}/>
        ))}
      </ul>}
    </>
  );
};

export default SakstemaListe;