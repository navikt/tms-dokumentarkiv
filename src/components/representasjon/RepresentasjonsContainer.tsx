import { Heading, Select } from "@navikt/ds-react";
import { ChangeEvent } from "react";
import { postUser } from "../../api/api";
import { TextLanguages, text } from "../../language/text";
import {  setSelectedUser } from "../../store/store";
import { Fullmakter } from "../pages/landingsside/Landingsside";
import styles from "./RepresentasjonsContainer.module.css";
import { pdlFullmaktUrl } from "../../urls";
import { logNavigereEvent } from "../../utils/amplitude";

interface RepresentasjonsContainerProps {
  fullmakter: Fullmakter;
  language: TextLanguages;
  mutateSakstemaer: () => void;
  mutateUser: () => void;
  viserRepresentertesData: boolean | undefined;
  user: { navn: string | undefined; ident: string | undefined };
}

const RepresentasjonsContainer = ({
  fullmakter,
  language,
  mutateSakstemaer,
  mutateUser,
  viserRepresentertesData,
  user,
}: RepresentasjonsContainerProps) => {

  const handleSelectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.options[event.target.selectedIndex].text, event.target.value);
    await postUser({ ident: event.target.value });
    mutateSakstemaer();
    mutateUser();
  };

  const genererListe = () => {
    const originalUser = { navn: fullmakter.navn + text.representasjonDeg[language], ident: fullmakter.ident };
    let nedtrekksliste = [originalUser];

    fullmakter?.fullmaktsGivere?.map((fullmaktsGiver) => {
      const user = { navn: fullmaktsGiver.navn, ident: fullmaktsGiver.ident };
      nedtrekksliste = [...nedtrekksliste, user];
    });

    return nedtrekksliste;
  };

  const nedtrekksliste = genererListe();

  /*const log = (user: {navn: string, ident: string}) => {
    const isInnloggetBruker = user.ident === fullmakter.ident;
    logNavigereEvent("Option", "Nedtrekksliste", isInnloggetBruker ? "Representant" : "Representert");
  }*/

  return (
    <>
      <div className={styles.container}>
        <Select
          className={styles.select}
          label={text.representasjonLabel[language]}
          defaultValue={user.ident}
          onChange={handleSelectChange}
          onClick={() => logNavigereEvent("Nedtrekksliste", "Representasjon")}
        >
          {fullmakter &&
            nedtrekksliste?.map((user) => (
              <option value={user.ident}>{user.navn}</option>
            ))}
        </Select>
        <a href={pdlFullmaktUrl} className={styles.lenke} onClick={() => logNavigereEvent("Lenke", "Digital fullmakt innsynslenke", text.representasjonLenkeTekst["nb"])}>
          {text.representasjonLenkeTekst[language]}
        </a>
      </div>
      {viserRepresentertesData && (
        <Heading size="large" level="2" className={styles.heading}>
          {text.representasjonValgtBruker[language] + user.navn}
        </Heading>
      )}
    </>
  );
};

export default RepresentasjonsContainer;
