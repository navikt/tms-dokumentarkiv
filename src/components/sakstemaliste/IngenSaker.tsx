import { Button, Heading } from "@navikt/ds-react";
import { text } from "../../language/text";
import { languageAtom } from "../../store/store";
import { useStore } from "@nanostores/react";
import styles from "./IngenSaker.module.css";
import { minSideUrl } from "../../urls";

interface Props {
  isRepresentant: number | undefined;
}

const IngenSaker = (isRepresentant: Props) => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Heading className={styles.heading} level="3" size="medium">
          {isRepresentant ? text.representantIngenSakerTittel[language] : text.ingenSakerTittel[language]}
        </Heading>
        <ul>
          <li>{text.ingenSakerListe1[language]}</li>
          <li>{text.ingenSakerListe2[language]}</li>
          <li>{text.ingenSakerListe3[language]}</li>
        </ul>
        <p className={styles.taKontakt}>{text.ingenSakerTaKontakt[language]}</p>
      </div>
      <a href={minSideUrl}>
      <Button className={styles.button} variant="secondary">
        {text.minSideKnapp[language]}
      </Button>
      </a>
    </div>
  );
};

export default IngenSaker;
