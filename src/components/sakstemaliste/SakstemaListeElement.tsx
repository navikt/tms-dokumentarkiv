import { useStore } from "@nanostores/react";
import { FolderFillIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
import { text } from "../../language/text";
import { languageAtom } from "../../store/store";
import { SakstemaElement } from "./SakstemaListe";
import styles from "./SakstemaListeElement.module.css";
import { Link } from "react-router-dom";
import { digisosRedirectUrl } from "../../urls";
import { logNavigereEvent } from "../../utils/amplitude";

const SakstemaListeElement = ({ sakstema }: { sakstema: SakstemaElement }) => {
  const language = useStore(languageAtom);

  const isDigisosRedirect = sakstema.kode === "KOM";
  const url = isDigisosRedirect ? digisosRedirectUrl : `/dokumentarkiv/tema/${sakstema.kode}`;

  return (
    <li className={styles.container} key={Math.random.toString()}>
      <Link
        to={url}
        className={styles.lenke}
        onClick={() => logNavigereEvent("Sakstemalenke", "Sakstemaliste", sakstema.navn)}
      >
        <Heading level="3" size="small" className={styles.tittel}>{sakstema.navn}</Heading>
        <BodyLong className={styles.ingress}>{`${text.sistEndret[language]} ${format(
          new Date(sakstema.sistEndret),
          "dd.MM.yyyy"
        )}`}</BodyLong>
      </Link>
    </li>
  );
};

export default SakstemaListeElement;
