import { useStore } from "@nanostores/react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { text } from "../../../language/text";
import { languageAtom } from "../../../store/store";
import styles from "./IngenDokumenter.module.css";

const IngenDokumenter = () => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
    <Heading level="4" size="small">{text.dokumentTittel[language]}</Heading>
    <div className={styles.background}>
      <BodyShort className={styles.tekst}>
        {text.ingenDokumenter[language]}
      </BodyShort>
    </div>
    </div>
  );
};

export default IngenDokumenter;
