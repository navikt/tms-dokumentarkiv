import { useStore } from "@nanostores/react";
import { FolderFillIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort } from "@navikt/ds-react";
import { format } from "date-fns";
import { text } from "../../language/text";
import { languageAtom } from "../../store/store";
import { SakstemaElement } from "./SakstemaListe";
import styles from "./SakstemaListeElement.module.css";
import { Link } from "react-router-dom";

const SakstemaListeElement = ({sakstema} : {sakstema: SakstemaElement}) => {

  const language = useStore(languageAtom);

  const url = `/dokumentarkiv/tema/${sakstema.kode}`

  return(
    <li className={styles.container} key={Math.random.toString()}>
      <Link to={url} className={styles.lenke}>
        <FolderFillIcon fontSize="1.75rem"/>
        <div>
        <BodyShort className={styles.tittel}>{sakstema.navn}</BodyShort>
        <BodyLong className={styles.ingress}>{`${text.sistEndret[language]} ${format(new Date(sakstema.sistEndret), "dd.MM.yyyy")}`}</BodyLong>
        </div>
      </Link>
    </li>
  );
};

export default SakstemaListeElement;