import { Button, Heading } from "@navikt/ds-react";
import { text } from "../../language/text";
import { languageAtom } from "../../store/store";
import { useStore } from "@nanostores/react";
import styles from "./IngenSaker.module.css";

const IngenSaker = (isRepresentant: number | undefined) => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Heading className={styles.heading} level="3" size="medium">
          {isRepresentant ? text.representantIngenSakerTittel[language] : text.ingenSakerTittel[language]}
        </Heading>
        <ul>
          <li>
            Har du sendt inn en søknad per post tar det litt tid før saken vises her. Du kan likevel ettersende
            dokumenter.
          </li>
          <li>
            Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager
            ulempene dette medfører.
          </li>
          <li>For bidragssaker kan du kun se dokumenter fra starten av 2022.</li>
        </ul>
        <p className={styles.taKontakt}>Ta kontakt dersom det er noe du lurer på.</p>
      </div>
      <Button className={styles.button} variant="secondary">
        Gå til Min Side
      </Button>
    </div>
  );
};

export default IngenSaker;
