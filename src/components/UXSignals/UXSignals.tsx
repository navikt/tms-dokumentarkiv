import useUXSignalScript from "./useUXSignals";

const UXSignals = () => {
  useUXSignalScript(true);

  return <div data-uxsignals-embed="panel-ce74lzpks7" style={{ maxWidth: "620px" }} />;
};

export default UXSignals;
