import { useStore } from "@nanostores/react";
import { useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../api/api";
import { languageAtom, setIsError } from "../../store/store";
import { getJournalposterUrl } from "../../urls";
import { CreateListElement, journalposterProps } from "./CreateListElement";
import styles from "./Dokumentliste.module.css";
import { Heading } from "@navikt/ds-react";
import { text } from "../../language/text";

interface Props extends Array<journalposterProps>{
  navn: string,
  kode: string, 
  journalposter: Array<journalposterProps>
}


const Dokumentliste = () => {
  const { temakode } = useParams();
  //const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;
  const dokumentlisteUrl = `${getJournalposterUrl}/sakstemakode`;

  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);

  if(isLoading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Heading level="3" size="medium" className={styles.heading}>{text.dokumentTittel[language]}</Heading>
      <ul className={styles.dokumentliste}>
        {dokumentliste?.map(({ journalposter }: Props) =>
          journalposter.map((journalpost) => {
            return CreateListElement(journalpost, language);
          })
        )}
      </ul>
    </div>
  );
};

export default Dokumentliste;
