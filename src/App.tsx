import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import DokumentUtlisting from "./components/pages/dokumentutlisting/DokumentUtlisting";
import EnkeltDokument from "./components/pages/enkeltdokument/EnkeltDokument";
import Landingsside from "./components/pages/landingsside/Landingsside";
import { useLanguage } from "./hooks/useLanguage";
import { initAmplitude } from "./utils/amplitude";

const App = () => {
  const BASEPATH = "/dokumentarkiv";
  const basePathWithLocales = [`${BASEPATH}`, `${BASEPATH}/en`, `${BASEPATH}/nn`];

  useLanguage();
  initAmplitude();

  return (
    <div className={styles.pageContainer}>
      <section className={styles.contentContainer}>
        <Router>
          <Routes>
            {basePathWithLocales.map((basePath) => {
              return (
                <>
                  <Route path={basePath} element={<Landingsside />} />
                  <Route path={`${basePath}/tema/:temakode`} element={<DokumentUtlisting />} />
                  <Route path={`${basePath}/tema/:temakode/:journalpostId`} element={<EnkeltDokument />} />
                  <Route path="/mine-saker" element={<Landingsside />} />
                  <Route path="/mine-saker/tema/:temakode" element={<DokumentUtlisting />} />                  
                  <Route path="/mine-saker/tema/:temakode/:journalpostId" element={<EnkeltDokument />} />
                </>
              );
            })}
          </Routes>
        </Router>
      </section>
    </div>
  );
};

export default App;
