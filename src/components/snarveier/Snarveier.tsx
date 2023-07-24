import { Heading, LinkPanel } from "@navikt/ds-react";
import styles from "./Snarveier.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { text } from "../../language/text";

const Snarveier = () => {
  const language = useStore(languageAtom);


  return(
    <div className={styles.container}>
      <Heading size="medium" level="3">{text.snarveier[language]}</Heading>
      <div className={styles.cardWrapper}>
        <LinkPanel className={styles.card} border={false}>{text.saksbehandlingstider[language]}</LinkPanel>
        <LinkPanel className={styles.card} border={false}>{text.sendKlage[language]}</LinkPanel>
      </div>
    </div>
  );
};

export default Snarveier;