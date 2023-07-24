import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Disclaimer.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../../../store/store";
import { text } from "../../../../language/text";

const Disclaimer = () => {
  const language = useStore(languageAtom);


  return(
    <div className={styles.container}>
      <Heading level="3" size="small">{text.landingssideDisclaimerTittel[language]}</Heading>
      <ul>
        <li><BodyLong>{text.landingssideDisclaimerListepunktEn[language]}</BodyLong></li>
        <li><BodyLong>{text.landingssideDisclaimerListepunktTo[language]}</BodyLong></li>
        <li><BodyLong>{text.landingssideDisclaimerListepunktTre[language]}</BodyLong></li>
        <li><BodyLong>{text.landingssideDisclaimerListepunktFire[language]}</BodyLong></li>
      </ul>
      <BodyLong>{text.landingssideDisclaimerTaKontakt[language]}</BodyLong>
    </div>
  );
};

export default Disclaimer;