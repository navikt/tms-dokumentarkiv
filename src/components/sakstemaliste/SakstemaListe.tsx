import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../api/api";
import { setIsError } from "../../store/store";
import { getSakstemaerUrl } from "../../urls";
import styles from "./SakstemaListe.module.css";
import SakstemaListeElement from "./SakstemaListeElement";

export interface SakstemaElement {
  navn: string,
  kode: string,
  sistEndret: string,
  detaljvisningUrl: string
}

const SakstemaListe = () => {

  const { data: sakstemaer, isLoading } = useSWRImmutable({ path: getSakstemaerUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  if(isLoading) {
    return null;
  }

  return (
    <ul className={styles.liste}>
      {sakstemaer?.map((sakstema: SakstemaElement) => (
        <SakstemaListeElement sakstema={sakstema}/>
      ))}
    </ul>
  );
};

export default SakstemaListe;