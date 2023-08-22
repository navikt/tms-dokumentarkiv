import { BodyShort } from "@navikt/ds-react";
import { text } from "../../language/text";
import { languageAtom } from "../../store/store";
import { useStore } from "@nanostores/react";
import styles from "./IngenSaker.module.css";
import Disclaimer from "../pages/landingsside/disclaimer/Disclaimer";

interface Props {
  isRepresentant: boolean | undefined;
}

const IngenSaker = (isRepresentant: Props) => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.background}>
          <BodyShort className={styles.tekst}>
            {isRepresentant ? text.representantIngenSakerTittel[language] : text.ingenSakerTittel[language]}
          </BodyShort>
        </div>
        <Disclaimer />
      </div>
    </div>
  );
};

export default IngenSaker;
