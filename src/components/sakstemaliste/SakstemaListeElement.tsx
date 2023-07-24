import { BodyLong } from "@navikt/ds-react"
import { SakstemaElement } from "./SakstemaListe";
import { format } from "date-fns";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import styles from "./SakstemaListeElement.module.css"
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { text } from "../../language/text";

const SakstemaListeElement = ({sakstema} : {sakstema: SakstemaElement}) => {

  const language = useStore(languageAtom);

  return(
    <li className={styles.container} key={Math.random.toString()}>
      <a href={sakstema.detaljvisningUrl} className={styles.lenke}>
        <div>
        <p className={styles.tittel}>{sakstema.navn}</p>
        <BodyLong className={styles.ingress}>{`${text.sistEndret[language]} ${format(new Date(sakstema.sistEndret), "dd.MM.yyyy")}`}</BodyLong>
        </div>
        <ChevronRightIcon className={styles.chevron} fontSize="1.5rem"/>
      </a>
    </li>
  );
};

export default SakstemaListeElement;