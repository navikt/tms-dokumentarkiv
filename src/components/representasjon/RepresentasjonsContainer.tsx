import { Select } from "@navikt/ds-react";
import { ChangeEvent } from "react";
import { fetcher, postUser } from "../../api/api";
import { TextLanguages, text } from "../../language/text";
import { setIsError, setSelectedUser } from "../../store/store";
import { Fullmakter } from "../pages/landingsside/Landingsside";
import styles from "./RepresentasjonsContainer.module.css";
import useSWR from "swr";
import { FullmaktInfoProps } from "../pages/dokumentutlisting/DokumentUtlisting";
import { getFullmaktInfoUrl, pdlFullmaktUrl } from "../../urls";

interface RepresentasjonsContainerProps {
  fullmakter: Fullmakter;
  language: TextLanguages;
  mutateSakstemaer: () => void;
  mutateUser: () => void;
}

const RepresentasjonsContainer = ({ fullmakter, language, mutateSakstemaer, mutateUser }: RepresentasjonsContainerProps) => {
  const { data: fullmaktInfo } = useSWR<FullmaktInfoProps>({ path: getFullmaktInfoUrl }, fetcher, {
    shouldRetryOnError: false,
    onError: setIsError,
  });

  const handleSelectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.options[event.target.selectedIndex].text, event.target.value);
    await postUser({ ident: event.target.value });
    mutateSakstemaer();
    mutateUser();
  };

  const genererListe = () => {
    const originalUser = {navn: fullmakter.navn, ident: fullmakter.ident}
    let nedtrekksliste = [originalUser];

    fullmakter?.fullmaktsGivere?.map((fullmaktsGiver) => {
      const user = { navn: fullmaktsGiver.navn, ident: fullmaktsGiver.ident };
        nedtrekksliste = [...nedtrekksliste, user]
    })

    return nedtrekksliste;
  };

  const nedtrekksliste = genererListe();

  return (
    <div className={styles.container}>
      <Select
        className={styles.select}
        label={text.representasjonLabel[language]}
        onChange={handleSelectChange}
      >
        {fullmakter && nedtrekksliste?.map((fullmaktsGiver) => (
          <option value={fullmaktsGiver.ident}>{fullmaktsGiver.navn}</option>
        ))}
      </Select>
      <a href={pdlFullmaktUrl} className={styles.lenke}>{text.representasjonLenkeTekst[language]}</a>
    </div>
  );
};

export default RepresentasjonsContainer;
