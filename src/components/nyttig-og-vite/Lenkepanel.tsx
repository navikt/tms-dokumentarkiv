import { Heading } from "@navikt/ds-react";
import styles from "./Lenkepanel.module.css";
import { kontaktOssUrl, saksbehandlingstiderUrl, tilbakemeldingerUrl } from "../../urls";
import { text } from "../../language/text";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { logNavigereEvent } from "../../utils/amplitude";

const Lenkepanel = () => {

  const language = useStore(languageAtom);

  return(
    <div className={styles.container}>
      <Heading level="2" size="small" className={styles.heading}>{text.nyttigOgVite[language]}</Heading>
      <a href={saksbehandlingstiderUrl} className={styles.lenke} onClick={() => logNavigereEvent("Lenke", "Lenkepanel", text.lenke1["nb"])}>{text.lenke1[language]}</a>
      <a href={tilbakemeldingerUrl} className={styles.lenke} onClick={() => logNavigereEvent("Lenke", "Lenkepanel", text.lenke2["nb"])}>{text.lenke2[language]}</a>
      <a href={kontaktOssUrl} className={styles.lenke} onClick={() => logNavigereEvent("Lenke", "Lenkepanel", text.lenke3["nb"])}>{text.lenke3[language]}</a>
    </div>
  );
};

export default Lenkepanel;