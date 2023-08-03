import { useParams } from "react-router-dom";
import { ArrowDownIcon } from "@navikt/aksel-icons";
import { Table } from "@navikt/ds-react";
import styles from "./Dokumentliste.module.css";
import { CreateListElement, journalposterProps } from "./CreateListElement";
import { getJournalposterUrl } from "../../urls";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../api/api";
import { languageAtom, setIsError } from "../../store/store";
import { useStore } from "@nanostores/react";
import { text } from "../../language/text";

interface Props extends Array<journalposterProps>{
  navn: string,
  kode: string, 
  journalposter: Array<journalposterProps>
}


const Dokumentliste = () => {
  const { temakode } = useParams();
  const dokumentlisteUrl = `${getJournalposterUrl}?sakstemakode=${temakode}`;

  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentlisteUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);

  if(isLoading) {
    return null;
  }

  return (
    <Table className={styles.liste}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">{text.dokument[language]}</Table.HeaderCell>
          <Table.HeaderCell scope="col">{text.sendtInnAv[language]}</Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <div className={styles.datoKolonneTittel}>
              {text.dato[language]} <ArrowDownIcon fontSize="1rem" />
            </div>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {dokumentliste?.map(({ journalposter } : Props) => (
          journalposter.map((journalpost) => {
            return (CreateListElement(journalpost, language));
        })))}
      </Table.Body>
    </Table>
  );
};

export default Dokumentliste;
