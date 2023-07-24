import { Loader } from "@navikt/ds-react";
import styles from "./ContentLoader.module.css";
import { text } from "../../language/text";
import { useStore } from "@nanostores/react";
import { languageAtom } from "../../store/store";

const ContentLoader = () => {
  const language = useStore(languageAtom);

  return (
    <div className={styles.contentLoader}>
      <Loader transparent title={text.lasterInn[language]} size="2xlarge" />
    </div>
  );
};

export default ContentLoader;
