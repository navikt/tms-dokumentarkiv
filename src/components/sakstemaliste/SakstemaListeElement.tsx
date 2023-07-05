import { BodyLong } from "@navikt/ds-react"
import { SakstemaElement } from "./SakstemaListe";
import { formatToReadableDate } from "../../utils/DateFormatter";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import styles from "./SakstemaListeElement.module.css"

const SakstemaListeElement = ({sakstema} : {sakstema: SakstemaElement}) => {

  return(
    <li className={styles.container} key={sakstema.sistEndret}>
      <a href={sakstema.detaljvisningUrl} className={styles.lenke}>
        <div>
        <p className={styles.tittel}>{sakstema.navn}</p>
        <BodyLong className={styles.ingress}>{`Sist endret ${formatToReadableDate(sakstema.sistEndret)}`}</BodyLong>
        </div>
        <ChevronRightIcon className={styles.chevron} fontSize="1.5rem"/>
      </a>
    </li>
  );
};

export default SakstemaListeElement;