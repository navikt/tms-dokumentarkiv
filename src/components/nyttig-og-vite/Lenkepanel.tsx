import { Heading } from "@navikt/ds-react";
import styles from "./Lenkepanel.module.css";
import { kontaktOssUrl, saksbehandlingstiderUrl, tilbakemeldingerUrl } from "../../urls";
import { text } from "../../language/text";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";

const Lenkepanel = () => {

  const language = useStore(languageAtom);

  return(
    <div className={styles.container}>
      <Heading level="2" size="small" className={styles.heading}>{text.nyttigOgVite[language]}</Heading>
      <a href={saksbehandlingstiderUrl} className={styles.lenke}>{text.lenke1[language]}</a>
      <a href={tilbakemeldingerUrl} className={styles.lenke}>{text.lenke2[language]}</a>
      <a href={kontaktOssUrl} className={styles.lenke}>{text.lenke3[language]}</a>
    </div>
  );
};

export default Lenkepanel;