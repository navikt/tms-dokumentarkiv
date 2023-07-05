import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landingsside from "./components/pages/landingsside/Landingsside";
import styles from "./App.module.css";
import DokumentUtlisting from "./components/pages/dokumentutlisting/DokumentUtlisting";


const App = () => {
  const BASEPATH = "/dokumentarkiv";

  return (
    <div className={styles.pageContainer}>
      <section className={styles.contentContainer}>
        <Router>
          <Routes>
            <Route path={BASEPATH} element={<Landingsside/>} />
            <Route path={`${BASEPATH}/tema/:temakode`} element={<DokumentUtlisting />} />
          </Routes>
        </Router>
      </section>
    </div>
  );
};

export default App;
