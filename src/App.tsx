import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landingsside from "./components/pages/landingsside/Landingsside";
import styles from "./App.module.css";
import DokumentUtlisting from "./components/pages/dokumentutlisting/DokumentUtlisting";
import { useLanguage } from "./hooks/useLanguage";

const App = () => {
  const BASEPATH = "/dokumentarkiv";
  const basePathWithLocales = [`${BASEPATH}`, `${BASEPATH}/en`, `${BASEPATH}/nn`];

  useLanguage();

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
