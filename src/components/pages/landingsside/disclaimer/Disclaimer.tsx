import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Disclaimer.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../../../store/store";
import { text } from "../../../../language/text";
import { kontaktOssUrl } from "../../../../urls";
import { logNavigereEvent } from "../../../../utils/amplitude";

const Disclaimer = () => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.container}>
      <Heading level="3" size="small">
        {text.landingssideDisclaimerTittel[language]}
      </Heading>
      <ul>
        <li>
          <BodyLong>{text.landingssideDisclaimerListepunktEn[language]}</BodyLong>
        </li>
        <li>
          <BodyLong>{text.landingssideDisclaimerListepunktTo[language]}</BodyLong>
        </li>
      </ul>
      <BodyLong>
        {text.landingssideDisclaimerTekstDel1[language]}
        <span>
          <a
            href={kontaktOssUrl}
            onClick={() => logNavigereEvent("Lenke", "Disclaimer", text.landingssideDisclaimerTekstDel2["nb"])}
          >
            {text.landingssideDisclaimerLenketekst[language]}
          </a>
        </span>
        {text.landingssideDisclaimerTekstDel2[language]}
      </BodyLong>
    </div>
  );
};

export default Disclaimer;
