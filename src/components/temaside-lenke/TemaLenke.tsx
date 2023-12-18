import { useParams } from "react-router-dom";
import { lenker } from "./Lenker";
import styles from "./TemaLenke.module.css";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";
import { text } from "../../language/text";
import { logNavigereEvent } from "../../utils/amplitude";

export type Temakode = "DAG" | "HJE" | "FOR" | "KOM" | "AAP" | "SYK" | "SYM" | "PEN" | "UFO" | "OMS";

const TemaLenke = ({ lenketekst }: { lenketekst: string }) => {
  const { temakode } = useParams();
  const type = temakode as Temakode;

  const unntaksKoder = ["DAG", "HJE", "FOR", "KOM", "AAP", "SYK", "SYM", "PEN", "UFO", "OMS"];
  const isUnntak = unntaksKoder.includes(type);
  const isSykOrSym = type === "SYM" || type === "SYK";

  const language = useStore(languageAtom);

  if (isUnntak) {
    return (
      <span>
        {text.temaLenkeIntro[language]}
        <a
          href={lenker[type]}
          className={styles.lenke}
          onClick={() => logNavigereEvent("Lenke", "Temalenke", lenketekst)}
        >
          {isSykOrSym ? text.sykOgSymLenke[language] : lenketekst}
        </a>
      </span>
    );
  } else {
    return null;
  }
};

export default TemaLenke;
