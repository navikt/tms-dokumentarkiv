import SakstemaListeElement from "./SakstemaListeElement";
import styles from "./SakstemaListe.module.css";
import IngenSaker from "./IngenSaker";
import Disclaimer from "../pages/landingsside/disclaimer/Disclaimer";

export interface SakstemaElement {
  navn: string;
  kode: string;
  sistEndret: string;
  detaljvisningUrl: string;
}

interface Props {
  isRepresentant: boolean | undefined;
  sakstemaer: Array<SakstemaElement> | undefined;
  isLoading: boolean;
}

const SakstemaListe = ({ isRepresentant, sakstemaer, isLoading }: Props) => {
  if (isLoading) {
    return null;
  }
  const tomListe = sakstemaer?.length == 0;

  return (
    <>
      {tomListe ? (
        <IngenSaker isRepresentant={isRepresentant}/>
      ) : (
        <div>
          <ul className={styles.liste}>
            {sakstemaer?.map((sakstema: SakstemaElement) => (
              <SakstemaListeElement sakstema={sakstema} />
            ))}
          </ul>
          <Disclaimer />
        </div>
      )}
    </>
  );
};

export default SakstemaListe;
