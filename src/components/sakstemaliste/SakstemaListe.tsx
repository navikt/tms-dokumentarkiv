import SakstemaListeElement from "./SakstemaListeElement";
import styles from "./SakstemaListe.module.css";
import IngenSaker from "./IngenSaker";
import Disclaimer from "../pages/landingsside/disclaimer/Disclaimer";
import { text } from "../../language/text";
import { useStore } from "@nanostores/react";
import { languageAtom, selectedUserAtom } from "../../store/store";
import { Heading } from "@navikt/ds-react";

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
  viserRepresentertesData: boolean | undefined;
}

const SakstemaListe = ({ isRepresentant, sakstemaer, isLoading, viserRepresentertesData }: Props) => {
  if (isLoading) {
    return null;
  }
  const language = useStore(languageAtom);
  const tomListe = sakstemaer?.length == 0;
  const user = useStore(selectedUserAtom);

  return (
    <>
      {viserRepresentertesData && <Heading size="large" level="3" className={styles.heading}>{text.representasjonValgtBruker[language] + user.navn}</Heading>}
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
