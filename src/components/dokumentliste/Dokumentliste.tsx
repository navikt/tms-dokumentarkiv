import { useStore } from "@nanostores/react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
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

  const sistEndret = journalpostListe && format(new Date(journalpostListe?.journalposter[0].sisteEndret), "dd.MM.yyyy");
  const hasBorder = journalpostListe && journalpostListe.journalposter.length > 1;

  return (
    <div className={styles.container}>
      <Heading level="2" size="medium" className={styles.heading}>
        {text.dokumentListeTittel[language]}
      </Heading>
      <BodyShort size="small" className={styles.dato}>
        {text.sistEndret[language] + " " + sistEndret}
      </BodyShort>
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
