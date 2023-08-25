import { useStore } from "@nanostores/react";
import { BodyShort } from "@navikt/ds-react";
import { text } from "../../../language/text";
import { languageAtom } from "../../../store/store";
import styles from "./IngenDokumenter.module.css";

const IngenDokumenter = () => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <BodyShort className={styles.tekst}>
        {text.ingenDokumenter[language]}
      </BodyShort>
    </div>
  );
};

export default IngenDokumenter;
