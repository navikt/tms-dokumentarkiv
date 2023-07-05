import SakstemaListeElement from "./SakstemaListeElement";
import styles from "./SakstemaListe.module.css";

export interface SakstemaElement {
  navn: string,
  kode: string,
  sistEndret: string,
  detaljvisningUrl: string
}

const SakstemaListe = () => {
  const liste = [
    {
      navn: "Arbeidsavklaringspenger",
      kode: "AAP",
      sistEndret: "2023-04-13T14:36:13Z",
      detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/AAP",
    },
    {
      navn: "Tilleggsstønad",
      kode: "TSO",
      sistEndret: "2023-02-22T11:40:08Z",
      detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/TSO",
    },
    {
      navn: "Dagpenger",
      kode: "DAG",
      sistEndret: "2023-02-21T13:36:27Z",
      detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/DAG",
    },
    {
      navn: "Oppfølging",
      kode: "OPP",
      sistEndret: "2023-01-16T10:57:06Z",
      detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/OPP",
    },
  ];


  return (
    <ul className={styles.liste}>
      {liste.map((sakstema: SakstemaElement) => (
        <SakstemaListeElement sakstema={sakstema}/>
      ))}
    </ul>
  );
};

export default SakstemaListe;