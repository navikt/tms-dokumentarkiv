import { useParams } from "react-router-dom";
import { lenker } from "./Lenker";
import styles from "./TemaLenke.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { text } from "../../language/text";
import { ChevronRightCircleFillIcon } from "@navikt/aksel-icons";
import { logNavigereEvent } from "../../utils/amplitude";

export type Temakode = "DAG" | "HJE" | "FOR" | "KOM" | "AAP" | "SYK" | "SYM" | "PEN" | "UFO" | "OMS";

const TemaLenke = ({ lenketekst }: { lenketekst: string }) => {
  const { temakode } = useParams();
  const type = temakode as Temakode;

  const unntaksKoder = ["DAG", "HJE", "FOR", "KOM", "AAP", "SYK", "SYM", "PEN", "UFO", "OMS"];
  const isUnntak = unntaksKoder.includes(type);

  const language = useStore(languageAtom);

  if (isUnntak) {
    return (
      <div className={styles.wrapper}>
        <ChevronRightCircleFillIcon className={styles.ikon} fontSize="1.5rem" />
        <span className={styles.intro}>
          {text.temaLenkeIntro[language]}
          <a href={lenker[type]} className={styles.lenke} onClick={() => logNavigereEvent("Lenke", "Temalenke", lenketekst)}>
            {lenketekst}
          </a>
        </span>
      </div>
    );
  } else {
    return null;
  }
};

export default TemaLenke;
