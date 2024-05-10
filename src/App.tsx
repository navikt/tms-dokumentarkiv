import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import DokumentUtlisting from "./components/pages/dokumentutlisting/DokumentUtlisting";
import Landingsside from "./components/pages/landingsside/Landingsside";
import { useLanguage } from "./hooks/useLanguage";
import { initializeAmplitude } from "./utils/amplitude";
import { reloadOnPageshow } from "./utils/reloadContentOnPageshow.ts";

const App = () => {
  const BASEPATH = "/dokumentarkiv";
  const basePathWithLocales = [`${BASEPATH}`, `${BASEPATH}/en`, `${BASEPATH}/nn`];

  useLanguage();
  initializeAmplitude();
  reloadOnPageshow();

  return (
    <main className={styles.pageContainer}>
      <section className={styles.contentContainer}>
        <Router>
          <Routes>
            {basePathWithLocales.map((basePath) => {
              return (
                <>
                  <Route path={basePath} element={<Landingsside />} />
                  <Route path={`${basePath}/tema/:temakode`} element={<DokumentUtlisting />} />
                  <Route path={`${basePath}/tema/:temakode/:journalpostId`} element={<DokumentUtlisting />} />
                  <Route path="/mine-saker" element={<Landingsside />} />
                  <Route path="/mine-saker/tema/:temakode" element={<DokumentUtlisting />} />
                  <Route path="/mine-saker/tema/:temakode/:journalpostId" element={<DokumentUtlisting />} />
                </>
              );
            })}
          </Routes>
        </Router>
      </section>
    </main>
  );
};

export default App;
