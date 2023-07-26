import SakstemaListeElement from "./SakstemaListeElement";
import styles from "./SakstemaListe.module.css";

export interface SakstemaElement {
  navn: string;
  kode: string;
  sistEndret: string;
  detaljvisningUrl: string;
}

interface Props {
  isRepresentant: number | undefined;
  navn: string | undefined;
  sakstemaer: Array<SakstemaElement> | undefined;
  isLoading: boolean;
}

const SakstemaListe = ({ isRepresentant, navn, sakstemaer, isLoading }: Props) => {
  if (isLoading) {
    return null;
  }

  return (
    <>
      {isRepresentant && <h2>Du bruker nå dokumentarkivet på vegne av {navn}</h2>}
      <ul className={styles.liste}>
        {sakstemaer?.map((sakstema: SakstemaElement) => (
          <SakstemaListeElement sakstema={sakstema} />
        ))}
      </ul>
    </>
  );
};

export default SakstemaListe;
