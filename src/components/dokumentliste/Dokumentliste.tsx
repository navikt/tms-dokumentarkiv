import { useStore } from "@nanostores/react";
import { Heading } from "@navikt/ds-react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../api/api";
import { text } from "../../language/text";
import { languageAtom, setIsError } from "../../store/store";
import { mineSakerApiUrl } from "../../urls";
import { DokumentlisteProps } from "./DokumentInterfaces";
import styles from "./Dokumentliste.module.css";
import Journalpost from "./Journalpost";

const Dokumentliste = () => {
  const { temakode, journalpostId } = useParams();

  const journalposterUrl = journalpostId
    ? `${mineSakerApiUrl}/sakstema/${temakode}/journalpost/${journalpostId}`
    : `${mineSakerApiUrl}/sakstema/${temakode}/journalposter`;

  const { data: journalpostListe, isLoading } = useSWRImmutable<DokumentlisteProps>(
    { path: journalposterUrl, handleNotFound: true },
    fetcher,
    {
      shouldRetryOnError: false,
      onError: setIsError,
    }
  );

  const language = useStore(languageAtom);

  if (isLoading) {
    return null;
  }

  const hasBorder = journalpostListe && journalpostListe.journalposter.length > 1;

  return (
    <div className={styles.container}>
      <Heading level="2" size="medium" className={styles.heading}>
        {text.dokumentListeTittel[language]}
      </Heading>
      <ul className={styles.dokumentliste}>
        {journalpostListe?.journalposter.map((journalpost) => {
          return (
            <Journalpost
              key={journalpost.journalpostId}
              journalpost={journalpost}
              language={language}
              border={hasBorder}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Dokumentliste;
