import { BodyLong, BodyShort, Heading } from "@navikt/ds-react";
import styles from "./Disclaimer.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../../../store/store";
import { text } from "../../../../language/text";

const Disclaimer = () => {
  const language = useStore(languageAtom);

  return(
    <div className={styles.container}>
      <Heading level="3" size="small">{text.dokumentDisclaimerTittel[language]}</Heading>
      <ul className={styles.liste}>
        <li><BodyLong>{text.documentDisclaimerListepunktEn[language]}</BodyLong></li>
        <li><BodyLong>{text.documentDisclaimerListepunktTo[language]}</BodyLong></li>
      </ul>
    </div>
  );
};

export default Disclaimer;