import useUXSignalScript from "./useUXSignals";
import styles from "./UXSignals.module.css";

const UXSignals = () => {
  useUXSignalScript(true);

  return (
    <div className={styles.wrapper}>
      <div data-uxsignals-embed="panel-ce74lzpks7" style={{ maxWidth: "620px" }} />
    </div>
  );
};

export default UXSignals;
