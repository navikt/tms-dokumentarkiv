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
import { logNavigereEvent } from "../../../utils/amplitude";
import { DokumentlisteProps } from "../../dokumentliste/DokumentInterfaces";
import Journalpost from "../../dokumentliste/Journalpost";
import styles from "./EnkeltDokument.module.css";

export interface FullmaktInfoProps {
  viserRepresentertesData: boolean;
  representertNavn: string | null;
}

const EnkeltDokument = () => {
  const { temakode, journalpostId } = useParams();
  const dokumentUrl = `${mineSakerApiUrl}/sakstema/${temakode}/journalpost/${journalpostId}`;

  const { data: dokumentliste, isLoading } = useSWRImmutable<DokumentlisteProps>({ path: dokumentUrl }, fetcher, {
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

  const journalpost = dokumentliste?.journalposter[0];

  const temaNavn = isContent && dokumentliste?.navn;
  const dato = isContent && format(new Date(journalpost.sisteEndret), "dd.MM.yyyy");
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
              <Journalpost key={journalpost.journalpostId} journalpost={journalpost} language={language} />;
            </ul>
          </div>
        ) : (
          <div className={styles.ingenDokumenter}>
            <BodyShort className={styles.ingenDokumenterTekst}>{text.kanIkkeViseDokument[language]}</BodyShort>
          </div>
        )}
        <Link
          to={nivaaEnUrl}
          className={styles.lenke}
          onClick={() => logNavigereEvent("Lenke", "Se alle", text.seAlleDokumenter["nb"])}
        >
          {text.seAlleDokumenter[language]}
        </Link>
      </div>
    </div>
  );
};

export default EnkeltDokument;
