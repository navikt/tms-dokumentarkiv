import { useStore } from "@nanostores/react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../../api/api";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import { text } from "../../../language/text";
import { languageAtom, setIsError } from "../../../store/store";
import { mineSakerApiUrl } from "../../../urls";
import styles from "./EnkeltDokument.module.css";
import { CreateListElement, journalposterProps } from "../../dokumentliste/CreateListElement";

export interface FullmaktInfoProps {
  viserRepresentertesData: boolean;
  representertNavn: string | null;
}

interface JournalpostProps extends Array<journalposterProps> {
  navn: string;
  kode: string;
  journalposter: Array<journalposterProps>;
}

const EnkeltDokument = () => {
  const { temakode, journalpostId } = useParams();
  const dokumentUrl = `${mineSakerApiUrl}/sakstema/${temakode}/journalpost/${journalpostId}`;


  const { data: dokumentliste, isLoading } = useSWRImmutable({ path: dokumentUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const language = useStore(languageAtom);

  const isContent = dokumentliste?.journalposter.length > 0;

  useBreadcrumbs({
    url: `/dokumentarkiv/tema/${temakode}`,
    title: isContent ? dokumentliste.navn : "...",
    handleInApp: true,
  });

  if (isLoading) {
    return null;
  }

  const temaNavn = isContent && dokumentliste?.navn;
  const dato = isContent && format(new Date(dokumentliste?.journalposter[0].sisteEndret), "dd.MM.yyyy");
  const nivaaEnUrl = `/dokumentarkiv`;

  return (
    <div className={styles.pageContainer}>
      <Heading level="1" size="xlarge">
        {isContent ? temaNavn : text.dokumentArkivTittel[language]}
      </Heading>
      <div className={styles.container}>
        <Heading level="2" size="large">
          {text.dokumentTittelEntall[language]}
        </Heading>
        {isContent ? (
          <div>
            <BodyShort className={styles.sistEndret}>{text.sistEndret[language] + " " + dato}</BodyShort>
            <ul className={styles.dokumentliste}>
              {dokumentliste && CreateListElement(dokumentliste?.journalposter[0], language)}
            </ul>
          </div>
        ) : (
          <div className={styles.ingenDokumenter}>
            <BodyShort className={styles.ingenDokumenterTekst}>{text.kanIkkeViseDokument[language]}</BodyShort>
          </div>
        )}
        <Link to={nivaaEnUrl} className={styles.lenke}>
          {text.seAlleDokumenter[language]}
        </Link>
      </div>
    </div>
  );
};

export default EnkeltDokument;
