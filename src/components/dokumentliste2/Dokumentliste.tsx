import { useStore } from "@nanostores/react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../api/api";
import { languageAtom, setIsError } from "../../store/store";
import { mineSakerApiUrl } from "../../urls";
import styles from "./Dokumentliste.module.css";
import { Heading } from "@navikt/ds-react";
import { text } from "../../language/text";
import Journalpost from "./Journalpost";
import { DokumentlisteProps } from "./DokumentInterfaces";

const Dokumentliste = () => {
  const { temakode } = useParams();
  const journalposterUrl = `${mineSakerApiUrl}/sakstema/${temakode}/journalposter`;

  const { data: journalpostListe, isLoading } = useSWRImmutable<DokumentlisteProps>(
    { path: journalposterUrl },
    fetcher,
    {
      shouldRetryOnError: false,
      onError: setIsError,
    },
  );

  const language = useStore(languageAtom);

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Heading level="2" size="medium" className={styles.heading}>
        {text.dokumentTittel[language]}
      </Heading>
      <ul className={styles.dokumentliste}>
        {journalpostListe?.journalposter.map((journalpost) => {
          return <Journalpost key={journalpost.journalpostId} journalpost={journalpost} language={language} />;
        })}
      </ul>
    </div>
  );
};

export default Dokumentliste;
