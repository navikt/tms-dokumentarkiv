import { useStore } from "@nanostores/react";
import { BodyShort, Button, Heading } from "@navikt/ds-react";
import { text } from "../../../language/text";
import { languageAtom } from "../../../store/store";
import { dokumentArkivUrl } from "../../../urls";
import styles from "./IngenDokumenter.module.css";

const IngenDokumenter = () => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <BodyShort>
        {text.ingenDokumenter[language]}
      </BodyShort>
      <a href={dokumentArkivUrl}>
        <Button className={styles.button} variant="secondary">
          {text.tilbakeKnapp[language]}
        </Button>
      </a>
    </div>
  );
};

export default IngenDokumenter;
