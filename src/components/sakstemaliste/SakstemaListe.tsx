import SakstemaListeElement from "./SakstemaListeElement";
import styles from "./SakstemaListe.module.css";
import IngenSaker from "./IngenSaker";
import Disclaimer from "../pages/landingsside/disclaimer/Disclaimer";
import { text } from "../../language/text";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";

export interface SakstemaElement {
  navn: string;
  kode: string;
  sistEndret: string;
  detaljvisningUrl: string;
}

interface Props {
  isRepresentant: boolean | undefined;
  navn: string | undefined;
  sakstemaer: Array<SakstemaElement> | undefined;
  isLoading: boolean;
}

const SakstemaListe = ({ isRepresentant, navn, sakstemaer, isLoading }: Props) => {
  if (isLoading) {
    return null;
  }
  const language = useStore(languageAtom);
  const tomListe = sakstemaer?.length == 0;

  return (
    <>
      {isRepresentant && <h2>{text.representasjonValgtBruker[language] + navn}</h2>}
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
